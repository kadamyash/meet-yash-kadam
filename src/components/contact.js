import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter,faLinkedin, faFacebook, faDiscord, faBehance, faYoutube, faArtstation, faSoundcloud } from '@fortawesome/free-brands-svg-icons'
import {faEnvelope, faPhoneAlt} from '@fortawesome/free-solid-svg-icons'
import { Pane } from 'evergreen-ui'
import ContactUs from "../assets/contact-us.png" 

function Contact(props) {
    return (
        <div className="content" id="contact">
            <div className="welcome-card">
                <div className="gif-alternates"> 
                    <img src={ContactUs} alt="couldn't load :(" width="400em"></img >
                </div>
                <div className="typo">
                    <h1 className="hero">CONTACT ME</h1> 
                    <br></br>
                    <div className="flexRow"><FontAwesomeIcon size="2x" icon={faPhoneAlt}/><a href="tel:+918879063110" rel="noreferrer" target="_blank" style={{color:'inherit', textDecoration:'none'}}><span style={{marginLeft: '1em'}}>+91-887-906-3110</span></a></div>
                    <br></br>
                    <div className="flexRow"><FontAwesomeIcon size="2x" icon={faEnvelope}/><a href="mailto:work_yash@outlook.com" rel="noreferrer" target="_blank" style={{color:'inherit', textDecoration:'none'}}><span style={{marginLeft: '1em'}}>work_yash@outlook.com</span></a></div>
                    <br></br>
                    <div className="flexRow"><FontAwesomeIcon size="2x" icon={faTwitter}/><a href="https://twitter.com/DJAxebow" rel="noreferrer" target="_blank" style={{color:'inherit', textDecoration:'none'}}><span style={{marginLeft: '1em'}}>@DJAxebow</span></a></div>
                    <br></br>
                    <br></br>
                    <h3>YOU MAY ALSO CONNECT WITH ME OVER...</h3> 
                    <Pane marginTop={15} display="flex">
                        <a href="https://instagram.com/axebow.art" rel="noreferrer" target="_blank" style={{color:'inherit'}}><Pane margin={15}><FontAwesomeIcon size="2x" icon={faInstagram}/></Pane></a>
                        <a href="https://www.facebook.com/yashk398" rel="noreferrer" target="_blank" style={{color:'inherit'}}><Pane margin={15}><FontAwesomeIcon size="2x" icon={faFacebook}/></Pane></a>
                        <a href="https://www.linkedin.com/in/yash-kadam/" rel="noreferrer" target="_blank" style={{color:'inherit'}}><Pane margin={15}><FontAwesomeIcon size="2x" icon={faLinkedin}/></Pane></a>
                        <a href="https://discord.com/users/753084561050566657" rel="noreferrer" target="_blank" style={{color:'inherit'}}><Pane margin={15}><FontAwesomeIcon size="2x" icon={faDiscord}/></Pane></a>
                    </Pane>
                    <h3>CREATIVE MEDIA PROFILES</h3> 
                    <Pane marginTop={15} display="flex">
                        <a href="https://behance.net/yashkadam4" rel="noreferrer" target="_blank" style={{color:'inherit'}}><Pane margin={15}><FontAwesomeIcon size="2x" icon={faBehance}/></Pane></a>
                        <a href="https://www.youtube.com/channel/UCJX6D0FI__G6Im1pMvQjEOA" rel="noreferrer" target="_blank" style={{color:'inherit'}}><Pane margin={15}><FontAwesomeIcon size="2x" icon={faYoutube}/></Pane></a>
                        <a href="https://www.artstation.com/yash_kadam" rel="noreferrer" target="_blank" style={{color:'inherit'}}><Pane margin={15}><FontAwesomeIcon size="2x" icon={faArtstation}/></Pane></a>
                        <a href="https://soundcloud.com/axebow/" rel="noreferrer" target="_blank" style={{color:'inherit'}}><Pane margin={15}><FontAwesomeIcon size="2x" icon={faSoundcloud}/></Pane></a>
                    </Pane>
                </div>
                <div className="gif">
                    {/* <a href="https://iconscout.com/illustrations/multi" target="_blank">Multi Tasking ceo handling multiple departments with ease Illustration</a> by <a href="https://iconscout.com/contributors/iconscout">Iconscout Freebies</a> on <a href="https://iconscout.com">Iconscout</a> */}
                    <img src={ContactUs} alt="couldn't load :(" width="400em"></img >
                </div>
            </div>
        </div>
    );
}

export default Contact;