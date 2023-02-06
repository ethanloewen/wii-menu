import './Tech.scss';
import { useState } from 'react';

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
                <h2>A</h2>
                <h2>A</h2>
            </div>
            <div className='card'>
                <h2>K</h2>
                <h2>K</h2>
            </div>
            <div className='card'>
                <h2>Q</h2>
                <h2>Q</h2>
            </div>
            <div className='card'>
                <h2>J</h2>
                <h2>J</h2>
            </div>
        </div>
    </div>
  );
}

export default Tech;