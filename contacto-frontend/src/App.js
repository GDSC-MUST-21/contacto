// import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { Routes, Route } from "react-router-dom";
import Profile from './pages/Profile';
import GigProfile from './pages/GigProfile';
import WebDev from './pages/WebDev';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/category' element={<WebDev />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/gig' element={<GigProfile />} />
      </Routes>
    </div>
  );
}

export default App;
