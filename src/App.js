import './App.css';
import Home from './components/Home';
import {faChevronCircleDown} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { React, useState } from 'react';
import { Pane, Button, Heading, SideSheet, Switch, Position} from 'evergreen-ui'
import About from './components/Content';
import Logo from "./assets/sample.svg";
import Experience from './components/Experience';
import Skills from './components/Skills';
import Work from './components/Work-List';
import Axebow from './components/axebow'; 
import Contact from './components/contact';

function App() {
  const [theme, setTheme] = useState("defaultTheme");
  const [isShown, setIsShown] = useState(false);
  const [checked, setChecked] = useState(false);

  function switchTheme(){
    if(theme==="defaultTheme"){
      setTheme("darkTheme");
    }
    else{
      setTheme("defaultTheme");
    }
  }
  return (
    <div className="App" id={theme}>
      <Pane className="navbar" display="flex" padding={16} background="tint2" borderRadius={3}>
            <Pane flex={1} alignItems="center" display="flex">
                <Heading size={600} className="fancy-font evergreen-text"><a href="/"><img src={Logo} alt="YASH'S LOGO" width="40px"></img></a></Heading>
            </Pane>
            <Pane class="outer-options">
                <Button className="evergreen-text" marginRight={15} appearance="minimal"><a href="#contact" style={{textDecoration: 'none', color: 'inherit'}}>Contact</a></Button>
                <Button marginRight={15} appearance="minimal"><a href="https://drive.google.com/file/d/1H0hB7fqStjy_vFeKPbXKKwGZPc53u_1Y/view?usp=sharing" download="Resume-Yash-Kadam" style={{textDecoration: 'none', color: 'inherit'}}>Resume</a></Button>
                <button className="circle-button" onClick={() => setIsShown(true)}><FontAwesomeIcon size="1x" icon={faChevronCircleDown}/></button>
            </Pane>
            <SideSheet
                id="glassPane"
                isShown={isShown}
                position={Position.TOP}
                onCloseComplete={() => setIsShown(false)}
                preventBodyScrolling>
                <Heading marginLeft={40} marginTop={40}>YASH KADAM'S PORTFOLIO</Heading>
                <Pane flex={1} alignItems="center" display="flex" margin={40}>Dark Mode <Switch height={24} marginLeft={15} checked={checked} onChange={(e) => {setChecked(e.target.checked); switchTheme();}} /></Pane>
                <br></br>
                <Button marginLeft={40} marginBottom={40} appearance="minimal"><a style={{color:'inherit'}} href="#about">About Me</a></Button>
                <Button marginBottom={40} appearance="minimal"><a style={{color:'inherit'}} href="#timeline">Education & Experience</a></Button>
                <Button marginBottom={40} appearance="minimal"><a style={{color:'inherit'}} href="#skills">Skills</a></Button>
            </SideSheet>
      </Pane>
      <Home></Home>
      <About></About>
      <Experience></Experience>
      <Skills></Skills>
      <Work></Work>
      <Axebow></Axebow>
      <Contact></Contact>
    </div>
  );
}

export default App;
