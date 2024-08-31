import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/recipeDetail.css';

const RecipeDetail: React.FC = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const location = useLocation();
  const recipe = location.state?.recipe;

  if (!recipe) {
    return <div>레시피가 없습니다.</div>;
  }

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === recipe.process.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? recipe.process.length - 1 : prevSlide - 1));
  };

  return (
    <div className="recipe-detail">
      {/* 왼쪽 섹션의 내용 */}
      <div className="left-section">
        <div className="left-header">
          <h1 className="recipe-name">{recipe.name}</h1>
          <img className="recipe-image" src={recipe.images[0]} alt={recipe.name} />
        </div>
        <div className="left-info">
          <div className="recipe-tags">
            {recipe.tags.map((tag: string, index: number) => (
              <button key={index} className="tag-button">
                {tag}
              </button>
            ))}
          </div>
          <div className="recipe-ingredients">
            <h2 className="recipe-ingredients-title">재료</h2>
            <ul>
              {recipe.ingredient.map((ingredient: string, index: number) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <div className="recipe-description">{recipe.description}</div>
          </div>
        </div>
      </div>
      {/* 오른쪽 섹션의 내용 */}
      <div className="right-section">
        <div className="recipe-text">{recipe.text}</div>
        <div className="carousel">
          <button onClick={prevSlide} className="carousel-control prev">
            ◀
          </button>
          <div className="carousel-slide">
            <div className="carousel-card">
              <p>{recipe.process[currentSlide]}</p>
            </div>
          </div>
          <button onClick={nextSlide} className="carousel-control next">
            ▶
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
