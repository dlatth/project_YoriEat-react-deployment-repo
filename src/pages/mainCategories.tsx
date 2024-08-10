import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/mainCategories.css';

interface Category {
  id: number;
  name: string;
  bg_color: string;
  txt_color: string;
  image: string;
}

const MainCategories: React.FC = () => {
  // catagoires: 카테고리 목록, setCategories: 카테고리 목록을 업데이트하는 함수
  const [categories, setCategories] = useState<Category[]>([]);
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch('/db.json');
      const data = await response.json();
      setCategories(data.categories);
    };
    fetchCategories();
  }, []);

  // 이전 카테고리로 이동하는 함수
  const handlePrevClick = () => {
    setCurrentCategoryIndex((prevIndex) => (prevIndex === 0 ? categories.length - 1 : prevIndex - 1));
  };

  // 다음 카테고리로 이동하는 함수
  const handleNextClick = () => {
    setCurrentCategoryIndex((prevIndex) => (prevIndex === categories.length - 1 ? 0 : prevIndex + 1));
  };

  // 현재 카테고리 정보
  const currentCategory = categories[currentCategoryIndex];

  // 카테고리 목록이 없으면 'Loading...'을 표시
  if (categories.length === 0) return <div>Loading...</div>;

  return (
    <div className="category-container" style={{ backgroundColor: currentCategory.bg_color }}>
      <div className="arrow" onClick={handlePrevClick}>
        <img src={`${process.env.PUBLIC_URL}/images/angleLeft.svg`} alt="Previous" />
      </div>
      <div className="category-content">
        <div className="category-image" style={{ backgroundImage: `url(${currentCategory.image})` }}></div>
        <h1 style={{ color: currentCategory.txt_color }}>{currentCategory.name}</h1>
      </div>
      <div className="arrow" onClick={handleNextClick}>
        <img src={`${process.env.PUBLIC_URL}/images/angleRight.svg`} alt="Next" />
      </div>
    </div>
  );
};

export default MainCategories;
