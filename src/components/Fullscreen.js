import './Fullscreen.scss';
import $ from "jquery";



function Fullscreen(props) {

  return (
    <>
      {props.isFullscreen?
        <div id='fullscreen-main'>
          <div className='anim-panel'>
            <div className='buttons-container'>
              <div className='buttons'>
                <button>Wii Menu</button>
                <button>Start</button>
              </div>
            </div>
          </div>
        </div>
        :
        <></>
      };
    </>
  );
}

export default Fullscreen;