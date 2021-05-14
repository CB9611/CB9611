import React from 'react';
import image1 from '../images/mclaren720s.png';
import image2 from '../images/nissanR33Skyline.png';
import image3 from '../images/teslaModel3.png';
import '../styles/home.css';

const home = () => {
    return (
        <div>
            <body className="homeContent">
                Welcome to CB9611
            </body>
            <body className="images">
                <img src={image1} alt="mclaren720s.png" className="image_content"></img>
                <li className="textContent_1">Here we like cars</li>
                <img src={image3} alt="teslaModel3.png" className="image_content"></img>
                <li className="textContent_2">video games</li>
                <img src={image2} alt="nissanR33Skyline.png" className="image_content"></img>
                <li className="textContent_3">and having a great time</li>
            </body>
        </div>
    );
}

export default home;