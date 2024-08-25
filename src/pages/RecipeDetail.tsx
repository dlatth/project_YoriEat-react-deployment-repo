import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/recipeDetail.css';

const RecipeDetail: React.FC = () => {
  const location = useLocation();
  const recipe = location.state?.recipe;

  if (!recipe) {
    return <div>레시피가 없습니다.</div>;
  }

  return (
    <div className="recipe-detail">
      <h1 className="recipe-title">{recipe.name}</h1>
      <p className="recipe-text">{recipe.text}</p>
    </div>
  );
};

export default RecipeDetail;
