import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/categorySelect.css';
import RecipeLine from '../components/RecipeLine';

interface Recipe {
  id: number;
  category_id: number;
  user_id: number;
  name: string;
  text: string;
}

const CategorySelect: React.FC = () => {
  // 레시피를 세 줄로 나누기 위한 상태
  const [recipeLines, setRecipeLines] = useState<Recipe[][]>([[], [], []]);
  const location = useLocation();
  const category = location.state?.category;

  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await fetch('/db.json');
      const data = await response.json();
      // 선택한 카테고리에 해당하는 레시피만 필터링
      const filteredRecipes = data.recipes.filter((recipe: Recipe) => recipe.category_id === category.id);

      // 중복을 제거한 후, 세 그룹으로 나누기
      const uniqueRecipes = filteredRecipes.filter(
        (recipe: Recipe, index: number, self: Recipe[]) =>
          index === self.findIndex((r: Recipe) => r.name === recipe.name)
      );

      // 세 줄로 나누기
      const lines: Recipe[][] = [[], [], []];
      uniqueRecipes.forEach((recipe: Recipe, index: number) => {
        lines[index % 3].push(recipe);
      });

      setRecipeLines(lines);
    };
    fetchRecipes();
  }, [category]);

  return (
    <div className="category-select">
      <div className="category-capsule" style={{ backgroundColor: category.bg_color }}>
        <h1 className="category-title" style={{ color: category.txt_color }}>
          {category.name}
        </h1>
      </div>
      <div className="recipe-container">
        {recipeLines.map((recipes, index) => (
          <RecipeLine key={index} recipes={recipes} lineIndex={index} />
        ))}
      </div>
    </div>
  );
};

export default CategorySelect;
