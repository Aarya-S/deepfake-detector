import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PhotoPage from './pages/PhotoPage';
import VideoPage from './pages/VideoPage';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path='/' exact />
          <Route element={<PhotoPage />} path='/image' />
          <Route element={<VideoPage />} path='/video' />
          <Route element={<AboutUs />} path='/about' />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
