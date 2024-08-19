import React, { useRef, useEffect } from 'react';
import '../styles/recipeLine.css';

interface Recipe {
  id: number;
  category_id: number;
  user_id: number;
  name: string;
  text: string;
}

interface RecipeLineProps {
  recipes: Recipe[];
  lineIndex: number;
}

const RecipeLine: React.FC<RecipeLineProps> = ({ recipes, lineIndex }) => {
  const lineRef = useRef<HTMLDivElement>(null);

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

  // 라인의 시작점을 조정하기 위한 offset
  const offset = lineIndex * 150;

  return (
    <div className="recipe-line" ref={lineRef} style={{ marginLeft: `${offset}px` }}>
      {recipes.map((recipe) => (
        <div key={recipe.id} className="recipe-card">
          <div className="recipe-text">
            <h2 className="card-name">{recipe.name}</h2>
            <p className="card-text">{recipe.text}</p>
          </div>
          <div className="card-img"></div>
        </div>
      ))}
    </div>
  );
};

export default RecipeLine;
