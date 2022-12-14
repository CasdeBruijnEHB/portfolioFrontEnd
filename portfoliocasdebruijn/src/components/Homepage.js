import React, { Component } from 'react';
import '../styles/homepage.css'

class Homepage extends Component {
    render() {
        return (
        <div className="fullPage">
          <nav>
            <div id="navDiv">
              <p>Home</p>
              <p>About me</p>
              <p>Work</p>
              <p>Contact</p>
            </div>
          </nav>
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