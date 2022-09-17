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
                        <div className='hud'>
                            <div className='hud-ring'>
                                <div className='hud-cap' id='left-cap'>
                                    <div className='hud-button'></div>
                                </div>
                            </div>
                            <div className='hud-ring'>
                                <div className='hud-cap' id='right-cap'>
                                    <div className='hud-button'></div>
                                </div>
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