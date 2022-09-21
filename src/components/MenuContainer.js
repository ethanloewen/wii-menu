import './MenuContainer.scss';

function MenuContainer() {
  return (
    <section id='menu-main'>
      <div className='menu-main-container'>
        <div className='stretchy-wrapper'>
          <div>
            <div className='panel-container'>

              <div className='panels'>
                <div className='p-row'>
                  <div className='panel'></div>
                  <div className='panel'></div>
                  <div className='panel'></div>
                  <div className='panel'></div>
                </div>
                <div className='p-row'>
                  <div className='panel'></div>
                  <div className='panel'></div>
                  <div className='panel'></div>
                  <div className='panel'></div>
                </div>
                <div className='p-row'>
                  <div className='panel'></div>
                  <div className='panel'></div>
                  <div className='panel'></div>
                  <div className='panel'></div>
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