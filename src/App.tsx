import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import MainCategories from './pages/mainCategories';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/main-categories" />} />
        <Route path="/main-categories" element={<MainCategories />} />
      </Routes>
    </Router>
  );
}

export default App;
