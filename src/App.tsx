import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import MainCategories from './pages/MainCategories';
import CategorySelect from './pages/CategorySelect';
import Like from './pages/Like';
import Script from './pages/Script';
import UserDetail from './pages/UserDetail';
import RecipeDetail from './pages/RecipeDetail';
import Setting from './components/Setting';
import Navbar from './components/NavBar';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/mainCategories" />} />
          <Route path="/mainCategories" element={<MainCategories />} />
          <Route path="/categorySelect" element={<CategorySelect />} />
          <Route path="/like" element={<Like />} />
          <Route path="/script" element={<Script />} />
          <Route path="/userDetail" element={<UserDetail />} />
          <Route path="/recipeDetail" element={<RecipeDetail />} />
          <Route path="/setting" element={<Setting />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
