import React from 'react'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css'

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='public/video/webVideo.mp4' autoPlay loop muted />

      <h1>MY PORTFOLIO</h1>
      <p>GRAPHIC DESINGNER | WEB DEVELOPER - FULLSTACK | PRODUCT DESINGNER</p>

      <div className='btns-sec'>
        <div className='hero-btns'>
          <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>GET STARTED</Button>
        </div>

        <div className='hero-btns'>
          <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>WATCH TRAILER <i className='fa fa-play'></i></Button>
        </div>
      </div>

    </div>
  )
}

export default HeroSection