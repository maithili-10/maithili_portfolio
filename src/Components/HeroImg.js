import "./HeroImgStyles.css";
import React from 'react';
import IntroImg from '../images/intro.jpg'
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={ IntroImg } alt="IntroImg"/>
      </div>
      <div className="content">
        <p>HI, I'M MAITHILI.</p>
        <h1> REACT DEVELOPER</h1>
 <div className="divbtn"style={{display:"flex"}}>
  <Link to="/projects" className="btn">Projects</Link>
  <Link to="/contact" className="btn btn-light">Contact Me</Link>
</div>
      </div>
    </div>
  )
}

export default HeroImg