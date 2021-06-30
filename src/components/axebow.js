import React from 'react';

function Axebow(props) {
    return (
        <div className="content" id="axebow">
            <div className="welcome-card" style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                <h3>Check out my Axebow alias?</h3>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <p className="pre">
                    As "Axebow" I have been producing music and have gotten commendable
                response and achievements. You might want to take a listen.
                </p>
                <br></br>
                <br></br>
                <br></br>
                <button className="custom-btn" intent="none"><a style={{color:'inherit', textDecoration: 'none'}} href="https://djaxebow.editorx.io/axebow" rel="noreferrer" target="_blank">More about Axebow</a></button>
            </div>
        </div>
    );
}

export default Axebow;