import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/categorySelect.css';

const CategorySelect: React.FC = () => {
  const location = useLocation();
  const category = location.state?.category;

  return (
    <div className="category-select">
      <div className="category-capsule" style={{ backgroundColor: category.bg_color }}>
        <h2 className="category-title" style={{ color: category.txt_color }}>
          {category.name}
        </h2>
      </div>
    </div>
  );
};

export default CategorySelect;
