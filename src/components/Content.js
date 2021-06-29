import React from 'react';
import '../App.css';
import Person from "../assets/person-attribution-needed.png";
import Avatar from "../assets/1624990816671.jpg";

function About(props) {
    return (
        <div className="content">
            <div className="welcome-card" id="about">
                <div className="gif">
                    {/* <a href="https://iconscout.com/illustrations/multi" target="_blank">Multi Tasking ceo handling multiple departments with ease Illustration</a> by <a href="https://iconscout.com/contributors/iconscout">Iconscout Freebies</a> on <a href="https://iconscout.com">Iconscout</a> */}
                    <img src={Person} alt="couldn't load :(" width="400em"></img >
                </div>
                <div className="typo">
                    <div className="grid-10">
                        <div><img className="avatar" src={Avatar} alt="couldn't load :(" width="100%"></img ></div>
                        <div>
                            <span><h3>Yash Sandeep Kadam</h3></span>
                            <span>Mumbai, India</span>
                        </div>
                    </div>
                    <br></br>
                    <div className="flex">
                        <h3>LET ME INTRODUCE MYSELF PLEASE</h3>
                        <br></br>
                        <p className="pre">
                            I am Yash from Mumbai, an aspiring artist who designs various interesting content
                            for a self-declared artistic project of life. I mainly design User Interface and 
                            User Experience Mockups, 3D-Illustrations and animations, VFX based videos,
                            Web-based CSS elements and also produce music. 
                            I am a Computer Science Graduate from Mumbai University and have some work 
                            experience with a campus job and small scale internship projects.
                            Apart from this, I have been held the head-position for a year 
                            for CSI (Computer Society of India) managing and working with graphics and VFX
                            for our college. Also I have a few more  skills and experiences to share
                            in bits throughout this website, so come along....
                            It won’t be too long. 
                        </p>
                        <br></br>
                        <div>
                            <a href="#timeline"><button className="custom-btn" style={{margin: '5px 10px'}}>EDUCATION & EXPERIENCE</button></a>
                            <a href="#skills"><button className="custom-btn" style={{margin: '5px 10px'}}>SKILLS</button></a>
                            <a href="#axebow"><button className="custom-btn" style={{margin: '5px 10px'}}>AXEBOW?</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;