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
                </div>
            </div>
        </div>
    );
}

export default Tech;