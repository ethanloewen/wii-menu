import './Fullscreen.scss';
import $ from "jquery";



function Fullscreen(props) {

  return (
    <div id='fullscreen-main'>
      <div className='anim-panel'>
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