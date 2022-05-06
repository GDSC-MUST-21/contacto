// import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { Routes, Route } from "react-router-dom";
import Profile from './pages/Profile';
import GigProfile from './pages/GigProfile';
import WebDev from './pages/WebDev';
import SoftwareDev from './pages/SoftwareDev'
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/web-dev' element={<WebDev />} />
        <Route path='/software-dev' element={<SoftwareDev />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/gig' element={<GigProfile />} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
