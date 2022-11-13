import './Fullscreen.scss';
import { useEffect, useState } from 'react';
import Projects from './channels/Projects.js';

function Fullscreen(props) {
  const [startLink, setStartLink] = useState('startlink');

  console.log(startLink)

  return (
    <div id='fullscreen-main'>
      <div className='anim-panel'>

        <Projects setStartLink={setStartLink} />

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