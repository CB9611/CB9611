import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/about.css';

const about = () => {
    return (
        <div>
            <body className="aboutContent">
                Hello, thank you for visiting my website. My name is Cameron Branch. I am a student attending
                Southeastern Louisiana University. I am majoring in Information Technology. Before college, I
                used to make Youtube videos for a living. I have worked several jobs until I landed my dream
                job at a company called Sparkhound LLC. My birthday is on November 8, 1996. My favorite color
                scheme is black & red. When I say that, I don't really mean black AND red. I mean that my
                favorite color is black with red accents. If red is the dominant color, then I think the color
                red is hideous. As you can tell by the color scheme of my website here. I like a contrasting
                look and clean layouts. I love the minimalist approach for any website. I am always very proud
                of everything I make. That's why I believe you should also check out my 404 page by clicking
                <Link to="404" title="Check out the 404 page" className="errorAboutLink"> here</Link>.
            </body>
        </div>
    );
}

export default about;