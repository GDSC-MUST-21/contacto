// import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { Routes, Route } from "react-router-dom";
import Category from './pages/Category';
import Profile from './pages/Profile';
import GigProfile from './pages/GigProfile';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/category' element={<Category/>} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/gig' element={<GigProfile />} />
      </Routes>
    </div>
  );
}

export default App;
