import React from 'react';
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
  // 라인의 시작점을 조정하기 위한 offset
  const offset = lineIndex * 150;

  return (
    <div className="recipe-line" style={{ marginLeft: `${offset}px` }}>
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
