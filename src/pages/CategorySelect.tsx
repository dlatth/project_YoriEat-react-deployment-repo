import React from 'react';
import { useLocation } from 'react-router-dom';

const CategorySelect: React.FC = () => {
  const location = useLocation();
  const category = location.state?.category;

  return <div>{category ? <h1>{category.name}</h1> : <h1>No Category Selected</h1>}</div>;
};

export default CategorySelect;
