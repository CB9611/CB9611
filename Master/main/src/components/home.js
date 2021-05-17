import React from 'react';
import image1 from '../images/carsBanner.png';
import '../styles/home.css';

const home = () => {
    return (
        <div>
            <body className="cars">
                <img src={image1} alt="teslaModel3.png" className="carsImg" />
            </body>
            <body className="homeContent">
                Welcome to CB9611! Here we like cars, video games, and having a great time
            </body>
        </div>
    );
}

export default home;