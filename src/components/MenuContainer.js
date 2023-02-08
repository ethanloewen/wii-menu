import './MenuContainer.scss';
import Fullscreen from './Fullscreen';
import { useEffect, useState } from 'react';
import $ from "jquery";



function MenuContainer() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [lastId, setLastId] = useState('');

  const toggleIsFullscreen = () => {
    setIsFullscreen(current => !current);
  };

  const enterFullscreen = (e) => {

    toggleIsFullscreen();

    // Bio page animations
    $('.circ:nth-of-type(3)').css('animation', '1.5s ease-in 2.5s 1 forwards sharpen-shadows-1');
    $('.circ:nth-of-type(2)').css('animation', '1.5s ease-in 2.5s 1 forwards sharpen-shadows-1');
    $('.circ:nth-of-type(1)').css('animation', '1.5s ease-in 2.5s 1 forwards sharpen-shadows-2');
    $('.bio-text h1').css('animation', 'title-typing 2.5s steps(13, end), blink-caret .8s step-end infinite');
    $('.bio-text h2').css('animation', '2s ease-in 3s 1 forwards description-fade');
    $('.links-section').css('animation', '2s ease-in 3s 1 forwards description-fade');





    // small timeout required to make the animation work properly
    setTimeout(() => {
      $(`.anim-panel`).css('animation', `${e.target.id} 1.5s forwards`);
      $(`#fullscreen-main`).css('animation', 'fade-dark 1.5s forwards');
      $(`.buttons button`).css('animation', 'pointer-pause 1.5s forwards');
      $(`.panel-container`).css('animation', 'hide-panels 1.5s forwards');
    }, 10);

    setLastId(`${e.target.id}`);

  };

  const exitFullscreen = () => {

    // Bio page animations
    setTimeout(() => {
      $('.circ:nth-of-type(3)').css('animation', 'none');
      $('.circ:nth-of-type(2)').css('animation', 'none');
      $('.circ:nth-of-type(1)').css('animation', 'none');
    }, 1000);

    // small timeout required to make the animation work properly
    setTimeout(() => {
      $(`.anim-panel`).css('animation', `${lastId}-reverse 1s forwards`);
      $(`#fullscreen-main`).css('animation', 'fade-light 1s forwards');
      $(`.buttons button`).css('animation', 'pointer-pause 1s forwards');
      $(`.panel-container`).css('animation', 'show-panels 1s forwards');
    }, 10);

    toggleIsFullscreen();
  };

  const getDate = () => {
    const date = new Date();
    const day = date.getDate();
    const dayOfWeek = date.getDay();
    const month = date.getMonth() + 1;

    let dayString = '';

    switch(dayOfWeek) {
      case 1:
        dayString = 'Mon';
        break;
      case 2:
        dayString = 'Tue';
        break;
      case 3:
        dayString = 'Wed';
        break;
      case 4:
        dayString = 'Thu';
        break;
      case 5:
        dayString = 'Fri';
        break;
      case 6:
        dayString = 'Sat';
        break;
      case 7:
        dayString = 'Sun';
        break;
    }

    const formattedDate = `${dayString} ${month}/${day}`;

    return formattedDate;
  };

  const getTime = () => {
    const date = new Date();
    const time = date.toLocaleTimeString('en-US', {hour12: false});
    const formattedTime = time.slice(0, 5);

    return formattedTime;
  }

  const [timeState, setTimeState] = useState(getTime());
  const [dateState, setDateState] = useState(getDate());

  // update date & time
  useEffect(() => {
    setInterval(() => {setTimeState(getTime());}, 1000);
    setInterval(() => {setDateState(getDate());}, 60000);
  }, [timeState, dateState]);
  

  return (
    <section id='menu-main'>
      <div className='menu-main-container'>
        <div className='stretchy-wrapper'>
          <div className='spacing'>

            <Fullscreen isFullscreen={isFullscreen} exitFullscreen={exitFullscreen} />

            <div className='panel-container'>
              <div className='panels' onClick={(e) => {enterFullscreen(e)}}>
                <div className='p-row'>
                  <div className='panel' id='p1' ></div>
                  <div className='panel' id='p2'></div>
                  <div className='panel' id='p3'></div>
                  <div className='panel' id='p4'></div>
                </div>
                <div className='p-row'>
                  <div className='panel' id='p5'></div>
                  <div className='panel' id='p6'></div>
                  <div className='panel' id='p7'></div>
                  <div className='panel' id='p8'></div>
                </div>
                <div className='p-row'>
                  <div className='panel' id='p9'></div>
                  <div className='panel' id='p10'></div>
                  <div className='panel' id='p11'></div>
                  <div className='panel' id='p12'></div>
                </div>
              </div>
            </div>

            <div className='hud-container'>

              <div id='clock'>
                <div className='clock-main'>
                    <h1 id='time'>{timeState}</h1>
                    <h2 id='date'>{dateState}</h2>
                </div>
              </div>

              <div className='hud'>
                <div className='hud-cap' id='left-cap'>
                  <div className='hud-button'></div>
                  <div className='hud-ring' id='left-ring'></div>
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