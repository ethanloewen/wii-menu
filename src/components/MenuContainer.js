import './MenuContainer.scss';
import Fullscreen from './Fullscreen';
import { useEffect, useState } from 'react';
import $ from "jquery";



function MenuContainer() {
  const [isFullscreen, setIsFullscreen] = useState(true);

  const enterFullscreen = (e) => {
    console.log(e.target.id);
    // $(`#${e.target.id}`).attr('id', 'panel-zoom');

    // $(`#fullscreen-main`).css('display', 'block !important');
    setIsFullscreen(true);

    // small timeout required to make the animation work properly
    setTimeout(() => {
      $(`.anim-panel`).css('animation', 'p3 1.5s forwards');
      // $(`.anim-panel`).css('animation', 'panel-fullscreen-test 1.5s forwards');
      // $(`.panel-container`).css('display', 'none');
      // $(`.hud-container`).css('display', 'none');
      // $(`.stretchy-wrapper`).css('animation', 'fade-to-black 1.5s forwards');
      // $(`.buttons button`).css('animation', 'text-zoom 1.5s forwards');
    }, 10);

  };

  const exitFullscreen = (e) => {
    // small timeout required to make the animation work properly
    setTimeout(() => {
      $(`.anim-panel`).css('animation', 'panel-shrink 1.5s forwards');
      $(`.panel-container`).css('display', 'flex');
      $(`.hud-container`).css('display', 'flex');
      $(`.stretchy-wrapper`).css('animation', 'fade-from-black 1.5s forwards');
      $(`.buttons button`).css('animation', 'text-zoom 1.5s reverse');
    }, 10);
  };

  return (
    <section id='menu-main'>
      <div className='menu-main-container'>
        <div className='stretchy-wrapper'>
          <div>

            <Fullscreen isFullscreen={isFullscreen} shrinkPanel={exitFullscreen} />

            <div className='panel-container'>
              <div className='panels' onClick={(e) => {enterFullscreen(e)}}>
                <div className='p-row'>
                  <div className='panel' id='panel-1' ></div>
                  <div className='panel' id='panel-2'></div>
                  <div className='panel' id='panel-3'></div>
                  <div className='panel' id='panel-4'></div>
                </div>
                <div className='p-row'>
                  <div className='panel' id='panel-5'></div>
                  <div className='panel' id='panel-6'></div>
                  <div className='panel' id='panel-7'></div>
                  <div className='panel' id='panel-8'></div>
                </div>
                <div className='p-row'>
                  <div className='panel' id='panel-9'></div>
                  <div className='panel' id='panel-10'></div>
                  <div className='panel' id='panel-11'></div>
                  <div className='panel' id='panel-12'></div>
                </div>
              </div>
            </div>

            <div className='hud-container'>

              <div id='clock'>
                <div className='clock-main'>
                    <h1 id='time'>22:00</h1>
                    <h2 id='date'>Fri 22/01</h2>
                </div>
              </div>

              <div className='hud'>
                <div className='hud-cap' id='left-cap'>
                  <div className='hud-button'></div>
                  <div className='hud-ring'></div>
                </div>

                <div className='hud-cap' id='right-cap'>
                  <div className='hud-button'></div>
                  <div className='hud-ring' id='right-ring'></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default MenuContainer;