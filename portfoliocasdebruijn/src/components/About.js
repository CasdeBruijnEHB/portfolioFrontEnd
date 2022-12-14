import React, { Component } from 'react';
import '../styles/about.css'

class About extends Component {
    render() {
        return (
            <div className="fullPage">
                <div id="containerAboutPage"> 
                    <p className="subtitle">About me</p>
                    <div id="aboutMeText">
                        <p>Hi, I'm Cas! A 25 year old Multimedia and Creative Technologies student at the Erasmushogeschool in Brussels. A few years ago I finished my bachelor in marketing which I studied in Hasselt, at the Hogeschool PXL.
                            After I succesfully finished it I was delighted but still somehow hungry to learn more. I've always had a passion for design so I decided I wanted to pursue this new study in Brussels. 
                            <br/>
                            <br/>
                            I started doing graphic design when I was 17 years old to make some extra cash. I started with designing t-shirts and sold my work online using sites like Redbubble and Teepublic. 
                            At that time, I had no experience with any graphic design tools, so I learned how to work with software like Photoshop and Illustrator by online courses and got better with every design I created.
                            </p>

                            <img id="aboutIMG" src="https://cdn.myportfolio.com/ed610251-0cc2-4e37-a9f8-2415118edd81/1cf792dd-d0a0-4166-a396-de074e92d1c1_rw_1200.png?h=2dee289f6bd05c31c399bdab51763123"></img>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;