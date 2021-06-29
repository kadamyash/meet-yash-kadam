import React from 'react';
import '../App.css';
import XD from "../assets/Adobe_XD_CC_icon.svg"
import PS from "../assets/Adobe_Photoshop_CC_icon.svg"
import AE from "../assets/Adobe_After_Effects_CC_icon.svg"
import BLENDER from "../assets/iconfinder_98935_blender_icon_512px.png"
import HITFILM from "../assets/icons8-hitfilm-express-144.png"
import html from "../assets/html-5.png"
import reactlogo from "../assets/logo192.png"
import css from "../assets/css.svg"
import js from "../assets/javascript.svg"
import firebase from "../assets/icons8-google-firebase-console.svg"

function Skills(props) {
    return (
        <div className="content" id="skills">
            <div className="welcome-card-adv">
                <div className="typo">
                    <h1 style={{fontStyle:'italic',fontWeight: 800}}>SKILLS</h1>
                    <br></br>   
                    <div>
                        <h3 style={{fontStyle:'italic',fontWeight: 800}}>Technical Skills</h3>
                        <br></br>
                        <div className="grid-50">
                                <div className="grid-10-c">
                                    <div><img className="icons" src={XD} alt="couldn't load :(" width="100%"></img ></div>
                                    <div>
                                        <span><h3>Adobe XD</h3></span>
                                        <span><progress class="skill-3" max="100" value="80"> </progress></span>
                                    </div>
                                </div>

                                <div className="grid-10-c">
                                    <div><img className="icons" src={html} alt="couldn't load :(" width="100%"></img ></div>
                                    <div>
                                        <span><h3>HTML</h3></span>
                                        <span><progress class="skill-3" max="100" value="80"> </progress></span>
                                    </div>
                                </div>



                                <div className="grid-10-c">
                                    <div><img className="icons" src={PS} alt="couldn't load :(" width="100%"></img ></div>
                                    <div>
                                        <span><h3>Adobe Photoshop</h3></span>
                                        <span><progress class="skill-3" max="100" value="80"> </progress></span>
                                    </div>
                                </div>

                                <div className="grid-10-c">
                                    <div><img className="icons" src={css} alt="couldn't load :(" width="100%"></img ></div>
                                    <div>
                                        <span><h3>CSS</h3></span>
                                        <span><progress class="skill-3" max="100" value="80"> </progress></span>
                                    </div>
                                </div>


                                <div className="grid-10-c">
                                    <div><img className="icons" src={AE} alt="couldn't load :(" width="100%"></img ></div>
                                    <div>
                                        <span><h3>Adobe AfterEffects</h3></span>
                                        <span><progress class="skill-3" max="100" value="60"> </progress></span>
                                    </div>
                                </div>

                                <div className="grid-10-c">
                                    <div><img className="icons" src={js} alt="couldn't load :(" width="100%"></img ></div>
                                    <div>
                                        <span><h3>Javascript</h3></span>
                                        <span><progress class="skill-3" max="100" value="60"> </progress></span>
                                    </div>
                                </div>


                                <div className="grid-10-c">
                                    <div><img className="icons" src={BLENDER} alt="couldn't load :(" width="100%"></img ></div>
                                    <div>
                                        <span><h3>Blender 3D</h3></span>
                                        <span><progress class="skill-3" max="100" value="80"> </progress></span>
                                    </div>
                                </div>

                                <div className="grid-10-c">
                                    <div><img className="icons" src={reactlogo} alt="couldn't load :(" width="100%"></img ></div>
                                    <div>
                                        <span><h3>React JS</h3></span>
                                        <span><progress class="skill-3" max="100" value="80"> </progress></span>
                                    </div>
                                </div>


                                <div className="grid-10-c">
                                    <div><img className="icons" src={HITFILM} alt="couldn't load :(" width="100%"></img ></div>
                                    <div>
                                        <span><h3>Hitfilm Express</h3></span>
                                        <span><progress class="skill-3" max="100" value="80"> </progress></span>
                                    </div>
                                </div>

                                <div className="grid-10-c">
                                    <div><img className="icons" src={firebase} alt="couldn't load :(" width="100%"></img ></div>
                                    <div>
                                        <span><h3>Firebase</h3></span>
                                        <span><progress class="skill-3" max="100" value="60"></progress></span>
                                    </div>
                                </div>
                        </div>
                        
                    </div>
                </div>
                <div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <h3 style={{fontStyle:'italic',fontWeight: 800}}>Professional Skills</h3>
                    <br></br>  
                    <div className="grid-33">
                        <div>3D Illustrations</div>
                        <div>Video Editing/VFX</div>
                        <div>Presentation</div>
                        <div>UI Design</div>
                        <div>Sound FX</div>
                        <div></div>
                        <div>Logo Design</div>
                    </div>
                    <br></br>
                    <h3 style={{fontStyle:'italic',fontWeight: 800}}>Languages</h3>
                    <br></br>  
                    <div className="grid-33">
                        <h5>English (Fluent)</h5>
                        <h5>Hindi (Fluent)</h5>
                        <h5>Marathi (Native)</h5>
                    </div>
                </div>
                    
            </div>
        </div>
    );
}

export default Skills;