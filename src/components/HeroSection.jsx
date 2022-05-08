import React from 'react';
import Button from './UI/button/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle} from "@fortawesome/free-solid-svg-icons";
import video_2 from "../videos/video-2.mp4"

function HeroSection() {
    return ( 
        <div className='hero-container'>
            <video className='hero-container__video' src={video_2} autoPlay loop muted/>
            <h1 className='hero-container__title'>ADVENTURE AWAITS</h1>
            <p className='hero-container__text'> What are you waiting for?</p>
            <div className="hero-container__btns">
                <Button 
                className='btns' 
                buttonStyle='btn_outline'
                buttonSize='btn_large'>
                    GET STARTED
                </Button>
                <Button 
                className='btns' 
                buttonStyle='btn_primary'
                buttonSize='btn_large'>
                    WATCH TRAILER
                    <FontAwesomeIcon 
                    className='hero-container__icon' 
                    icon={faPlayCircle}
                    />
                </Button>
            </div>
        </div>
     );
}

export default HeroSection;