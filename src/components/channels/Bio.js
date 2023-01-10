import './Bio.scss';
import $ from 'jquery';
import { useState } from 'react';

function Bio(props) {

    return (
        <div id='bio-main'>
            <div className='img-wrap'>
                <img src='/ethan_mii.png' alt='ethan-mii' />
            </div>
        </div>
    );
}

export default Bio;