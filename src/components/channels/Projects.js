import './Projects.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen } from '@fortawesome/free-regular-svg-icons';
import { faFolder } from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery';
import { useState } from 'react';




function Projects(props) {

    const [rotation, setRotation] = useState(0);
    const [id, setId] = useState('s1');

    const iconColor = '#1a1a1a';
    const iconSize = '3x';
    const focusIconSize = '4x';

    const updateSpinner = (e) => {
        const lastId = id;
        const currentId = (e.target.id).slice(1);
        let rotationAmt = rotation;
        
        if (currentId > lastId) {
            rotationAmt -= 30;
        } else {
            rotationAmt += 30;
        }

        $(`.spinner-container`).css('transform', `rotate(${rotationAmt}deg)`);
        setRotation(rotationAmt);
        setId(`${currentId}`);
        console.log('id', e.target.id);
    };

    return (
        <div id='projects-main'>


            <div className='project-title'>
                <h1>:Tiny URL</h1>
            </div>

            <div className='spinner-container' onClick={(e) => {updateSpinner(e)}}>

                <div className='spinner s6'>
                    <div className='spin-item' id='s6'>
                        <FontAwesomeIcon icon={faFolderOpen} size={focusIconSize} color={iconColor} pointerEvents='none' />
                    </div>
                </div>

                <div className='spinner s7'>
                    <div className='spin-item' id='s7'>
                        <FontAwesomeIcon icon={faFolder} size={iconSize} pointerEvents='none'/>
                    </div>
                </div>
                <div className='spinner s8'>
                    <div className='spin-item' id='s8'>
                        <FontAwesomeIcon icon={faFolder} size={iconSize} pointerEvents='none'/>
                    </div>
                </div>
                <div className='spinner s9'>
                    <div className='spin-item' id='s9'>
                        <FontAwesomeIcon icon={faFolder} size={iconSize} pointerEvents='none'/>
                    </div>
                </div>
                <div className='spinner s10'>
                    <div className='spin-item' id='s10'>
                        <FontAwesomeIcon icon={faFolder} size={iconSize} pointerEvents='none'/>
                    </div>
                </div>
                <div className='spinner s11'>
                    <div className='spin-item' id='s11'>
                        <FontAwesomeIcon icon={faFolder} size={iconSize} pointerEvents='none'/>
                    </div>
                </div>
                <div className='spinner s12'>
                    <div className='spin-item' id='s12'>
                        <FontAwesomeIcon icon={faFolder} size={iconSize} pointerEvents='none'/>
                    </div>
                </div>
                <div className='spinner s1'>
                    <div className='spin-item' id='s1'>
                        <FontAwesomeIcon icon={faFolder} size={iconSize} pointerEvents='none'/>
                    </div>
                </div>
                <div className='spinner s2'>
                    <div className='spin-item' id='s2'>
                        <FontAwesomeIcon icon={faFolder} size={iconSize} pointerEvents='none'/>
                    </div>
                </div>
                <div className='spinner s3'>
                    <div className='spin-item' id='s3'>
                        <FontAwesomeIcon icon={faFolder} size={iconSize} pointerEvents='none'/>
                    </div>
                </div>
                <div className='spinner s4'>
                    <div className='spin-item' id='s4'>
                        <FontAwesomeIcon icon={faFolder} size={iconSize} pointerEvents='none'/>
                    </div>
                </div>
                <div className='spinner s5'>
                    <div className='spin-item' id='s5'>
                        <FontAwesomeIcon icon={faFolder} size={iconSize} pointerEvents='none'/>
                    </div>
                </div>
                
            </div>

            <div className='panel-name'>
                <h2>Projects</h2>
            </div>



        </div>
    );
}

export default Projects;