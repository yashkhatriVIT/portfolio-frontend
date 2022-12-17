import React from 'react';
import { Button } from '../Button/Button';
import './AboutMe.css';
import '../../App.css';
function AboutMe() {
  return (
    <>
        <div className="hero-container">
            {/* <video src='/videos/aboutMe.mp4' autoPlay loop muted /> */}
            <h3>Lets Connect</h3>
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                Contact me
            </Button >
            {/* <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                Contact
            </Button > */}
        </div>
    </>
  )
}

export default AboutMe