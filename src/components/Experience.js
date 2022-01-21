import React from 'react';
import '../App.css';
import Person from "../assets/boy-going-to-the-school-2127130-0.svg";

function Experience(props) {
    return (
        <div className="content" id="timeline">
            <div className="welcome-card">
                <div className="typo">
                    <h1 style={{fontStyle:'italic',fontWeight: 800}}>EDUCATION</h1>
                    <br></br>
                    <div className="grid-10" style={{margin:'1em 0'}}>
                        <div className="marker"></div>
                        <div>2014 - High School, CBSE (9.8 CGPI)</div>
                    </div>
                    <div className="grid-10 style={{margin:'1em 0'}}">
                        <div className="marker"></div>
                        <div>2016 - Higher Secondary, Maharashtra Board (85.69%)</div>
                    </div>
                    <div className="grid-10" style={{margin:'1em 0'}}>
                        <div className="marker"></div>
                        <div>2020 - B.E, Computer Science, Mumbai University (8.07 CGPI)</div>
                    </div>
                    <div className="grid-10" style={{margin:'1em 0'}}>
                        <div className="marker"></div>
                        <div>2022 [Ongoing] - OCGC, UX Design, Humber College Institute of Technology & Advanced Learning,</div>
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <h1 style={{fontStyle:'italic',fontWeight: 800}}>EXPERIENCE</h1>
                    <br></br>
                    <div className="grid-10" style={{margin:'1em 0'}}>
                        <div className="marker"></div>
                        <div>2019 - Internship - Weacom Technologies, Nashik</div>
                    </div>
                    <div className="grid-10" style={{margin:'1em 0'}}>
                        <div className="marker"></div>
                        <div>2020 - Joined Capgemini India, Campus Placement</div>
                    </div>
                    <div className="grid-10" style={{margin:'1em 0'}}>
                        <div className="marker"></div>
                        <div>2021 - Internship - UX Design, IIT Bombay</div>
                    </div>
                </div>
                <div className="gif">
                    {/* <a href="https://iconscout.com/illustrations/multi" target="_blank">Multi Tasking ceo handling multiple departments with ease Illustration</a> by <a href="https://iconscout.com/contributors/iconscout">Iconscout Freebies</a> on <a href="https://iconscout.com">Iconscout</a> */}
                    <img src={Person} alt="couldn't load :(" width="500em"></img >
                </div>
            </div>
        </div>
    );
}

export default Experience;
