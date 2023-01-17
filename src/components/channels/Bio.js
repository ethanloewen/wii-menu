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
                <div className='links-section' id='external-links'>
                    <div className='icon'>
                        <i class="fa-brands fa-github fa-5x"></i>
                    </div>
                    <div className='icon resume'>
                        <i class="fa-solid fa-file-code fa-5x">
                            
                        </i>
                        {/* <div className='resume-circle'>
                            
                        </div> */}
                    </div>
                    <div className='icon'>
                        <i class="fa-brands fa-linkedin fa-5x"></i>
                    </div>
                </div>
                <div className='links-section' id='link-details'>
                    <img className='drawn-circ' src='/drawn_circ.png' alt='hand-drawn-circle' />
                    <img className='drawn-arrow' src='/drawn_arrow.png' alt='hand-drawn-arrow' />
                    <div className='resume-text'>
                        <p>get my resume</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Bio;