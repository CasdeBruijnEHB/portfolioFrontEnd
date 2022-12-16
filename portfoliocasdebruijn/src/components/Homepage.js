import React, { Component } from 'react';
import '../styles/homepage.css'
import background from '../assets/bgTexture_v12.png'
//<img id="backgroundImage" src={background} alt="nope"></img>
class Homepage extends Component {
    render() {
        return (
          
        <div className="fullPage">
            <img id="backgroundImage" src={background} alt="nope"></img>
          
          <p id="topHeadTekst"> Hi, my name is</p>
          <p id="headTitle">Cas De Bruijn</p>
          <p id="introTekst">I’m a <span className="introSpans">Front-End Developer</span>, 
              <span className="introSpans"> Motion Designer</span> and 
              <span className="introSpans"> Graphic Designer</span> based in Brussels.</p>
            <div id="scrollDownDiv">
              <p id="scrollDownTekst">Check out some of my work.</p>
            </div>
        </div>
        );
    }
}

export default Homepage;