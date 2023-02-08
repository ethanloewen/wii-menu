import './Fullscreen.scss';
import { useState } from 'react';
import Projects from './channels/Projects.js';
import Bio from './channels/Bio.js';
import Tech from './channels/Tech.js';


function Fullscreen(props) {
  const [startLink, setStartLink] = useState('startlink');

  const currentPanel = props.currentPanel;

  let loadPanel = <h1>test</h1>;

  if (currentPanel == 1) {
    loadPanel = <Bio />;
  } else if (currentPanel == 2) {
    loadPanel = <Tech />;
  } else if (currentPanel == 3) {
    loadPanel = <Projects setStartLink={setStartLink} />;
  }

  // console.log(startLink);

  return (
    <div id='fullscreen-main'>
      <div className='anim-panel'>

        {/* {loadPanel} */}

        {/* {currentPanel == 1 && <Bio /> }
        {currentPanel == 2 && <Tech /> }
        {currentPanel == 3 && <Projects setStartLink={setStartLink} /> } */}


        {/* <Projects setStartLink={setStartLink} /> */}
        <Bio updateTitle={props.updateTitle} />
        {/* <Tech /> */}

        <div className='buttons-container'>
          <div className='buttons'>
            <button id='menu-button' onClick={() => {props.exitFullscreen()}}>Wii Menu</button>
            <button id='start-button'>Start</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fullscreen;