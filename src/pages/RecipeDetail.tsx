import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/recipeDetail.css';

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  image: string;
  tags: string[];
  bio: string;
  social: string[];
}

const RecipeDetail: React.FC = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [user, setUser] = React.useState<User | null>(null);
  const location = useLocation();
  const recipe = location.state?.recipe;
  const process = location.state?.process;

  useEffect(() => {
    if (recipe && recipe.user_id) {
      const fetchUser = async () => {
        const response = await fetch('/db.json');
        const data = await response.json();

        // 유저 ID에 해당하는 유저 정보 찾기
        const foundUser = data.users.find((user: User) => user.id === recipe.user_id);

        if (foundUser) {
          setUser(foundUser);
        }
      };
      fetchUser();
    }
  }, [recipe]);

  if (!recipe || !process) {
    return <div>레시피 정보가 없습니다.</div>;
  }

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === process.text.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? process.text.length - 1 : prevSlide - 1));
  };

  return (
    <div className="recipe-detail">
      {/* 왼쪽 섹션 */}
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
          </div>
          {user && (
            <div className="recipe-user">
              <img className="user-image" src={user.image} alt={user.name} />
              <div className="user-info">
                <h2 className="user-name">{user.name}</h2>
                <p className="user-bio">{user.bio}</p>
              </div>
            </div>
          )}
          <div className="recipe-description">{recipe.description}</div>
        </div>
      </div>

      {/* 오른쪽 섹션 */}
      <div className="right-section">
        <div className="recipe-text">{recipe.text}</div>
        <div className="carousel">
          <button onClick={prevSlide} className="carousel-control prev">
            ◀
          </button>
          <div className="carousel-slide">
            <div className="carousel-card">
              <p>{process.text[currentSlide]}</p>
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
