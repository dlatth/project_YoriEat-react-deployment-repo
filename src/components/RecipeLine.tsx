import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/recipeLine.css';

interface Recipe {
  id: number;
  name: string;
  text: string;
  ingredient: string[];
  time: number;
  images: string[];
  tags: string[];
  description: string;
  category_id: number;
  user_id: number;
}

interface Process {
  id: number;
  images: string[];
  videos: string[];
  text: string[];
  recipe_id: number;
}

interface RecipeLineProps {
  recipes: Recipe[];
  processes: Process[];
  lineIndex: number;
}

const RecipeLine: React.FC<RecipeLineProps> = ({ recipes, processes, lineIndex }) => {
  const lineRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const line = lineRef.current;

    const handleScroll = () => {
      if (line) {
        const maxScrollLeft = line.scrollWidth - line.clientWidth;
        // 스크롤이 거의 끝에 도달했을 때
        if (line.scrollLeft >= maxScrollLeft - 1) {
          line.scrollLeft = 1; // 스크롤을 처음으로 보냄 (약간의 여유를 두고)
        } else if (line.scrollLeft <= 0) {
          line.scrollLeft = maxScrollLeft - 1; // 스크롤을 끝으로 보냄 (약간의 여유를 두고)
        }
      }
    };

    if (line) {
      line.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (line) {
        line.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const handleCardClick = (recipe: Recipe) => {
    const recipeProcess = processes.find((process) => process.recipe_id === recipe.id);
    navigate('/recipeDetail', { state: { recipe, process: recipeProcess } });
  };

  const getRandomImage = (images: string[]) => {
    return images[Math.floor(Math.random() * images.length)];
  };

  // 라인의 시작점을 조정하기 위한 offset
  const offset = lineIndex * 150;

  return (
    <div className="recipe-line" ref={lineRef} style={{ marginLeft: `${offset}px` }}>
      {recipes.map((recipe) => (
        <div key={recipe.id} className="recipe-card" onClick={() => handleCardClick(recipe)}>
          <div className="recipe-text">
            <h2 className="card-name">{recipe.name}</h2>
            <p className="card-text">{recipe.text}</p>
          </div>
          <div
            className="card-img"
            style={{
              backgroundImage: recipe.images.length > 0 ? `url(${getRandomImage(recipe.images)})` : 'none',
              backgroundColor: recipe.images.length > 0 ? 'transparent' : '#ddd',
            }}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default RecipeLine;
