import './Tech.scss';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage, faCubes, faDatabase, faPenRuler } from '@fortawesome/free-solid-svg-icons';

function Tech(props) {

    return (
        <div id='tech-main'>
            <div className='tech-text'>
                <h1>Tools</h1>
                <h1>&</h1>
                <h1>Tech</h1>
            </div>

            <div className='cards-container'>
                <div className='card'>

                    <div className='suit-wrapper'>
                        <h2>A</h2>
                        <FontAwesomeIcon className='icon' icon={faLanguage} />
                    </div>

                    <div className='suit-wrapper'>
                        <h2>A</h2>
                        <FontAwesomeIcon className='icon' icon={faLanguage} />
                    </div>

                    <div className='card-body c1'>
                        <div className='icon-group'>
                            <i class="devicon-html5-plain"></i>
                            <p>HTML</p>
                        </div>

                        <div className='icon-group'>
                            <i class="devicon-css3-plain"></i>
                            <p>CSS</p>
                        </div>

                        <div className='icon-group'>
                            <i class="devicon-javascript-plain"></i>
                            <p>Javascript</p>
                        </div>

                        <div className='icon-group'>
                            <i class="devicon-java-plain"></i>
                            <p>Java</p>
                        </div>

                        <div className='icon-group'>
                            <i class="devicon-ruby-plain"></i>
                            <p>Ruby</p>
                        </div>

                        <div className='icon-group'>
                            <img src='/sql-server.png' />
                            <p>SQL</p>
                        </div>
                    </div>

                    <h3>Languages</h3>
                </div>

                <div className='card'>
                    <div className='suit-wrapper'>
                        <h2>K</h2>
                        <FontAwesomeIcon className='icon' icon={faCubes} />
                    </div>

                    <div className='suit-wrapper'>
                        <h2>K</h2>
                        <FontAwesomeIcon className='icon' icon={faCubes} />
                    </div>

                    <div className='card-body c2'>
                        <div className='icon-group'>
                            <i class="devicon-nodejs-plain"></i>
                            <p>NodeJS</p>
                        </div>

                        <div className='icon-group'>
                            <i class="devicon-react-original"></i>
                            <p>React</p>
                        </div>

                        <div className='icon-group'>
                            <i class="devicon-sass-original"></i>
                            <p>SASS</p>
                        </div>

                        <div className='icon-group'>
                            <i class="devicon-express-original"></i>
                            <p>Express</p>
                        </div>

                        <div className='icon-group'>
                            <i class="devicon-rails-plain"></i>
                            <p>Rails</p>
                        </div>

                        <div className='icon-group'>
                            <i class="devicon-jquery-plain"></i>
                            <p>jQuery</p>
                        </div>

                        <div className='icon-group'>
                            <i class="devicon-django-plain"></i>
                            <p>Django</p>
                        </div>

                        <div className='icon-group'>
                            <i class="devicon-threejs-original"></i>
                            <p>Three.js</p>
                        </div>
                    </div>

                    <h3>Frameworks</h3>
                </div>

                <div className='card'>
                    <div className='suit-wrapper'>
                        <h2>Q</h2>
                        <FontAwesomeIcon className='icon' icon={faDatabase} />
                    </div>

                    <div className='suit-wrapper'>
                        <h2>Q</h2>
                        <FontAwesomeIcon className='icon' icon={faDatabase} />
                    </div>

                    <div className='card-body c3'>
                        <div className='icon-group'>
                            <i class="devicon-postgresql-plain"></i>
                            <p>PostgreSQL</p>
                        </div>

                        <div className='icon-group'>
                            <i class="devicon-mysql-plain"></i>
                            <p>MySQL</p>
                        </div>
                    </div>

                    <h3>Databases</h3>
                </div>

                <div className='card'>
                    <div className='suit-wrapper'>
                        <h2>J</h2>
                        <FontAwesomeIcon className='icon' icon={faPenRuler} />
                    </div>

                    <div className='suit-wrapper'>
                        <h2>J</h2>
                        <FontAwesomeIcon className='icon' icon={faPenRuler} />
                    </div>

                    <div className='card-body c4'>
                        <div className='icon-group'>
                            <i class="devicon-photoshop-plain"></i>
                            <p>Photoshop</p>
                        </div>

                        <div className='icon-group'>
                            <i class="devicon-figma-plain"></i>
                            <p>Figma</p>
                        </div>

                        <div className='icon-group'>
                            <i class="devicon-blender-original"></i>
                            <p>Blender</p>
                        </div>

                        <div className='icon-group'>
                            <i class="devicon-unity-original"></i>
                            <p>Unity</p>
                        </div>
                    </div>

                    <h3>Design</h3>
                </div>
            </div>
        </div>
    );
}

export default Tech;