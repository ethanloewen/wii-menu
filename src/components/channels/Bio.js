import './Bio.scss';
import $ from 'jquery';
import { useState } from 'react';

function Bio(props) {

    return (
        <div id='bio-main'>
            <div className='img-wrap'>
                <img src='/ethan_mii_v2.png' alt='ethan-mii' />
                <div className='circ'></div>
                <div className='circ'></div>
                <div className='circ'></div>
            </div>
            <div className='bio-text'>
                <h1>Hi, I'm Ethan</h1>
                <h2>A fullstack web developer from Canada</h2>
                {/* <div className='wrapper'>
                    <img src='/wii_button_v2.png' alt='ethan-mii' />
                    <div className='circ'></div>
                </div> */}
            </div>
        </div>
    );
}

export default Bio;