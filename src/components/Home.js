import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter,faLinkedin } from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { Pane } from 'evergreen-ui'
import RoboBoi from "../assets/0001-0120.gif" 

function Home(props) {
    return (
        <div className="content" id="fullscreen-mb">
            <div className="welcome-card">
                <div className="gif-alternates"> 
                    <img src={RoboBoi} alt="couldn't load :(" width="400em"></img >
                </div>
                <div className="typo">
                    <h1 className="hero">Hello</h1>
                    <h1 className="hero-highlighted">I am Yash Kadam</h1>
                    <h1 className="hero">I design content</h1>
                    <br></br>
                    <button className="custom-btn" intent="none"><a style={{color:'inherit', textDecoration: 'none'}} href="#about">more about me</a></button>
                    <Pane marginTop={40} display="flex">
                        <a href="https://instagram.com/axebow.art" rel="noreferrer" target="_blank" style={{color:'inherit'}}><Pane margin={15}><FontAwesomeIcon size="2x" icon={faInstagram}/></Pane></a>
                        <a href="https://twitter.com/DJAxebow" rel="noreferrer" target="_blank" style={{color:'inherit'}}><Pane margin={15}><FontAwesomeIcon size="2x" icon={faTwitter}/></Pane></a>
                        <a href="https://www.linkedin.com/in/yash-kadam/" rel="noreferrer" target="_blank" style={{color:'inherit'}}><Pane margin={15}><FontAwesomeIcon size="2x" icon={faLinkedin}/></Pane></a>
                        <a href="mailto:work_yash@outlook.com" rel="noreferrer" target="_blank" style={{color:'inherit'}}><Pane margin={15}><FontAwesomeIcon size="2x" icon={faEnvelope}/></Pane></a>
                    </Pane>
                </div>
                <div className="gif">
                    {/* <a href="https://iconscout.com/illustrations/multi" target="_blank">Multi Tasking ceo handling multiple departments with ease Illustration</a> by <a href="https://iconscout.com/contributors/iconscout">Iconscout Freebies</a> on <a href="https://iconscout.com">Iconscout</a> */}
                    <img src={RoboBoi} alt="couldn't load :(" width="400em"></img >
                </div>
            </div>
        </div>
    );
}

export default Home;