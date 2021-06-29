import {faChevronCircleDown} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { React, useState } from 'react';
import { Pane, Button, Heading, SideSheet, Switch, Position} from 'evergreen-ui'

function Navbar(props) {
    const [isShown, setIsShown] = useState(false);
    const [checked, setChecked] = useState(false);
    return (
        <Pane className="navbar" display="flex" padding={16} background="tint2" borderRadius={3}>
            <Pane flex={1} alignItems="center" display="flex">
                <Heading size={600} className="fancy-font">YASH'S PAGE</Heading>
            </Pane>
            <Pane class="outer-options">
                <Button marginRight={15} appearance="minimal">Contact</Button>
                <Button marginRight={15} appearance="minimal">Resume</Button>
                <button className="circle-button" onClick={() => setIsShown(true)}><FontAwesomeIcon size="1x" icon={faChevronCircleDown}/></button>
            </Pane>
            <SideSheet
                id="glassPane"
                isShown={isShown}
                position={Position.TOP}
                onCloseComplete={() => setIsShown(false)}
                preventBodyScrolling>
                <Heading marginLeft={40} marginTop={40}>YASH KADAM'S PORTFOLIO</Heading>
                <Pane flex={1} alignItems="center" display="flex" margin={40}>Dark Mode <Switch height={24} marginLeft={15} checked={checked} onChange={(e) => setChecked(e.target.checked)} /></Pane>
                <br></br>
                <Button marginLeft={40} marginBottom={40} appearance="minimal">About Me</Button>
                <Button marginBottom={40} appearance="minimal">Education & Experience</Button>
                <Button marginBottom={40} appearance="minimal">Skills</Button>
            </SideSheet>
        </Pane>
    );
}

export default Navbar;