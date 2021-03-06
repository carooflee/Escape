import React from 'react';
import {Button} from "./Button";
import "./HeroSection.css";

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/" autoPlay loop muted />
            LEAVE YOUR LIFE BEHIND
            <div className="hero-btn">
                <Button className='btns' buttonStyle='btn--outline'
                buttonSize="btn--large">Get Started</Button>
            </div>
        </div>
    )
}

export default HeroSection