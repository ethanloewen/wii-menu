import './Projects.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen } from '@fortawesome/free-regular-svg-icons';
import { faFolder } from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery';
import { useState } from 'react';




function Projects(props) {

    const [rotation, setRotation] = useState(0);
    const [id, setId] = useState('s3');
    const [lastClass, setLastClass] = useState('i1');

    const iconColor = '#1a1a1a';
    const iconSize = '3x';
    const focusIconSize = '4x';

    const updateSpinner = (e) => {

        const lastId = id;
        const currentId = e.target.id;
        let rotationAmt = rotation;

        console.log(e.target.classList);

        // make the selected element have id of 's3'
        $(`#${currentId}`).attr("id", "s3");
        console.log('lastId', lastId);
        $(`#${lastId}`).attr("id", "replaced");

        // return if the same element is clicked
        if (currentId === 3) {
            return;
        }

        const formattedCurrentId = (currentId).slice(1);
        console.log('formattedId', typeof formattedCurrentId);

        if (formattedCurrentId === '5') {
            rotationAmt -= 60;
        } 
        else if (formattedCurrentId === '4') {
            rotationAmt -= 30;
            console.log('hit');
        } 
        // note case (formattedCurrentId === 3) is already handled above
        else if (formattedCurrentId === '2') {
            rotationAmt += 30;
        } 
        else if (formattedCurrentId === '1') {
            rotationAmt += 60;
        }
        
        $(`.spinner-container`).css('transform', `rotate(${rotationAmt}deg)`);

        setRotation(rotationAmt);
        setId(`${currentId}`);
        // console.log('id', e.target.id);
    };

    return (
        <div id='projects-main'>


            <div className='project-title'>
                <h1>:Tiny URL</h1>
            </div>

            <div className='spinner-container' onClick={(e) => {updateSpinner(e)}}>

                <div className='spinner s6'>
                    <div className='spin-item i1' id='s3'>
                        <FontAwesomeIcon icon={faFolderOpen} size={focusIconSize} color={iconColor} pointerEvents='none' />
                    </div>
                </div>

                <div className='spinner s7'>
                    <div className='spin-item i2' id='s4'>
                        <FontAwesomeIcon icon={faFolder} size={iconSize} pointerEvents='none'/>
                    </div>
                </div>
                <div className='spinner s8'>
                    <div className='spin-item i3' id='s5'>
                        <FontAwesomeIcon icon={faFolder} size={iconSize} pointerEvents='none'/>
                    </div>
                </div>
                <div className='spinner s9'>
                    <div className='spin-item i4' id='blank'>
                        <FontAwesomeIcon icon={faFolder} size={iconSize} pointerEvents='none'/>
                    </div>
                </div>
                <div className='spinner s10'>
                    <div className='spin-item i5' id='blank'>
                        <FontAwesomeIcon icon={faFolder} size={iconSize} pointerEvents='none'/>
                    </div>
                </div>
                <div className='spinner s11'>
                    <div className='spin-item i6' id='blank'>
                        <FontAwesomeIcon icon={faFolder} size={iconSize} pointerEvents='none'/>
                    </div>
                </div>
                <div className='spinner s12'>
                    <div className='spin-item i7' id='blank'>
                        <FontAwesomeIcon icon={faFolder} size={iconSize} pointerEvents='none'/>
                    </div>
                </div>
                <div className='spinner s1'>
                    <div className='spin-item i8' id='blank'>
                        <FontAwesomeIcon icon={faFolder} size={iconSize} pointerEvents='none'/>
                    </div>
                </div>
                <div className='spinner s2'>
                    <div className='spin-item i9' id='blank'>
                        <FontAwesomeIcon icon={faFolder} size={iconSize} pointerEvents='none'/>
                    </div>
                </div>
                <div className='spinner s3'>
                    <div className='spin-item i10' id='blank'>
                        <FontAwesomeIcon icon={faFolder} size={iconSize} pointerEvents='none'/>
                    </div>
                </div>
                <div className='spinner s4'>
                    <div className='spin-item i11' id='s1'>
                        <FontAwesomeIcon icon={faFolder} size={iconSize} pointerEvents='none'/>
                    </div>
                </div>
                <div className='spinner s5'>
                    <div className='spin-item i12' id='s2'>
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