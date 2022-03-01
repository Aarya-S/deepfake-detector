import React from 'react';
import Navbar2 from '../components/Navbar2';
import '../css/Home.css';

const Home = () => {
  return (
    <>
    <Navbar2 />
    <div id="hero">
        <h2 className='hero-title'>Deepfake Detector</h2>
        <h5 className='hero-subtitle'>Detect fake faces in photos and videos</h5>
        <p className='hero-body'>Our revolutionary tech helps you detect fake faces in photos and videos with our very strong algorithm. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quia asperiores maiores veniam, pariatur natus iusto voluptas, sed quibusdam neque quod laboriosam eligendi. Sint voluptatum nemo autem consequatur cupiditate inventore totam cum itaque hic reiciendis maiores, officiis facilis ut est in nostrum? Quibusdam, dicta in fugit earum vero autem eveniet.</p>

        <div className="button-area">
            <a href='/about' className="btn btn-light btn-width">About Us</a>
            <a href='/image' className="btn btn-outline-light btn-width">Image Detector</a>
            <a href='/video' className="btn btn-outline-light btn-width">Video Detector</a>
        </div>
    </div>
    </>
  )
}

export default Home;