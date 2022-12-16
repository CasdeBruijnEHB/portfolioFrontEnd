import React, { Component } from 'react';
import '../styles/contact.css'
import image from '../assets/blobV1.png'

class Contact extends Component {
    render() {
        return (
            <div className="fullPage">
                <div id="containerAbout">
                    <p className="subtitle">Contact me</p>
                    <div>
                    <p id="wantToWork">Want to work with me?</p>
                    
                    <img id="blobAbout" src={image}></img>
                        <p id="contactKnop"> <a href="mailto:casdebruijn5@hotmail.com">Get in touch</a> </p>
                  
                    
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;