import React from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub, faBehance } from '@fortawesome/free-brands-svg-icons'
import { Pane } from 'evergreen-ui'

function Work(props) {
    return (
        <div className="content" id="work">
            <div className="welcome-card-1">
                <h1 style={{fontStyle:'italic',fontWeight: 800, marginBottom: '10px'}}>WORK</h1>
                <div></div> 
                <h3 style={{fontStyle:'italic',fontWeight: 800}}>Some of my highlighted work</h3>
                <br></br>
                <br></br>
                <br></br>
                <div className="grid-50-c">
                    <div className="card-flex">
                        <div>IMG</div>
                        <div className="flex">
                        <a href="https://www.youtube.com/watch?v=LCbXXcoLbQM" style={{color: 'inherit'}} target="_blank" rel="noreferrer"><h3>DRIVE TO THE FUTURE</h3></a>
                            <p className="pre">
                                This is a short movie I made up from scratch using Blender 3D, HitFilm express
                                 and scoringin FL Studio. This was story boarded with pen and paper, 
                                 rendered with Cycles Render andput out on YouTube, with breakdown on my Behance.
                            </p>
                        </div>
                    </div>
                    <div className="card-flex">
                        <div>IMG</div>
                        <div className="flex">
                        <a href="https://noteback-beta.vercel.app/" style={{color: 'inherit'}} target="_blank" rel="noreferrer"><h3>NOTEBACK-BETA</h3></a>
                            <p className="pre">
                            This was my first full Reack Web App I made. I don’t have lot of full stack project but this is
                            one I’d like to pin as a little coder. This app is a web based whiteboard, to pin notes and 
                            mark them as done with sufficient UI-styling using Evergreen-UI. This also has Google OAuth
                            </p>
                        </div>
                    </div>
                    <div className="card-flex">
                        <div>IMG</div>
                        <div className="flex">
                        <a href="https://behance.net/yashkadam4" style={{color: 'inherit'}} target="_blank" rel="noreferrer"><h3>BEHANCE UI DESIGN PORTFOLIO</h3></a>
                            <p className="pre">
                            This is my entire Behance library back from the day I started with XD and Figma, I couldn’t 
                            highlight one project, since my entire library is a project with my own ideas, while getting
                            inspired from the maestros out there.
                            </p>
                        </div>
                    </div>
                    <div className="card-flex">
                        <div>IMG</div>
                        <div className="flex">
                        <a href="https://pastr-web.vercel.app/" style={{color: 'inherit'}} target="_blank" rel="noreferrer"><h3>PASTR-WEB</h3></a>
                            <p className="pre">
                            This is a pastebin like web-app I made within 24 hours with React JS, Firebase and 
                            hosted quickly on Vercel. This app has Google SSO to sign-in and save and share
                            plain text like on pastebin. Just a quick coding based endeavour.
                            </p>
                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <span>More on my other profiles...</span>
                <Pane marginTop={40} display="flex">
                        <a href="https://instagram.com/axebow.art" target="_blank" rel="noreferrer"><Pane margin={15}><FontAwesomeIcon size="2x" icon={faInstagram}/></Pane></a>
                        <a href="https://github.com/kadamyash" target="_blank" rel="noreferrer"><Pane margin={15}><FontAwesomeIcon size="2x" icon={faGithub}/></Pane></a>
                        <a href="https://behance.net/yashkadam4" target="_blank" rel="noreferrer"><Pane margin={15}><FontAwesomeIcon size="2x" icon={faBehance}/></Pane></a>
                </Pane>
            </div>
        </div>
    );
}

export default Work;