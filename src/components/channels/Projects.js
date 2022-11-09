import './Projects.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen } from '@fortawesome/free-regular-svg-icons';
import { faFolder } from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery';
import { useState } from 'react';




function Projects(props) {

    const [rotation, setRotation] = useState(0);
    const [id, setId] = useState('s3');
    const [clickedClass, setClickedClass] = useState('i1');

    const iconColor = '#1a1a1a';
    const iconSize = '3x';
    const focusIconSize = '4x';

    const updateSpinner = (e) => {

        // return if the same element is clicked again
        if ((e.target.id).slice(1) === '3') {
            return;
        }

        const lastId = id;
        const currentId = e.target.id;
        const currentClass = e.target.classList[0];
        let rotationAmt = rotation;

        console.log('clicked class', e.target.classList[0]);

        // make the selected element have id of 's3'
        $(`#${currentId}`).attr("id", "s3");
        // remove id from old element
        $(`#${lastId}`).attr("id", "replaced");

        // get id without letter
        const formattedCurrentId = (currentId).slice(1);
        // console.log('formattedId', typeof formattedCurrentId);

        // set a rotation amount based on how far away was clicked
        if (formattedCurrentId === '5') {
            rotationAmt -= 60;
        } 
        else if (formattedCurrentId === '4') {
            rotationAmt -= 30;
            console.log('hit');
        } 
        // note: case (formattedCurrentId === 3) is already handled above
        else if (formattedCurrentId === '2') {
            rotationAmt += 30;
        } 
        else if (formattedCurrentId === '1') {
            rotationAmt += 60;
        }

        
        // set the transform to update the spinner's rotation
        $(`.spinner-container`).css('transform', `rotate(${rotationAmt}deg)`);

        // update the positions of the 'hitbox' divs
        const formattedCurrentClass = parseInt((currentClass).slice(1), 10);

        const classesToUpdate = [];

        if (!(formattedCurrentClass == 1 || formattedCurrentClass === 2 || formattedCurrentClass === 11 || formattedCurrentClass === 12)) {
            classesToUpdate[0] = formattedCurrentClass - 2;
            classesToUpdate[1] = formattedCurrentClass - 1;
            classesToUpdate[2] = formattedCurrentClass + 1;
            classesToUpdate[3] = formattedCurrentClass + 2;
        }

        // add relevant id to new 'hitbox' classes
        for (let i = 0; i < 4; i++) {
            console.log(i);
            $(`.spinner-container`).css('transform', `rotate(${rotationAmt}deg)`);
        }

        setRotation(rotationAmt);
        setId(`${currentId}`);
        setClickedClass()
        // console.log('id', e.target.id);
    };

    return (
        <div id='projects-main'>


            <div className='project-title'>
                <h1>:Tiny URL</h1>
            </div>

            <div className='spinner-container' onClick={(e) => {updateSpinner(e)}}>

                <div className='spinner s6'>
                    <div className='i1 spin-item' id='s3'>
                        <FontAwesomeIcon icon={faFolderOpen} size={focusIconSize} color={iconColor} pointerEvents='none' />
                    </div>
                </div>

                <div className='spinner s7'>
                    <div className='i2 spin-item' id='s4'>
                        <FontAwesomeIcon icon={faFolder} size={iconSize} pointerEvents='none'/>
                    </div>
                </div>
                <div className='spinner s8'>
                    <div className='i3 spin-item' id='s5'>
                        <FontAwesomeIcon icon={faFolder} size={iconSize} pointerEvents='none'/>
                    </div>
                </div>
                <div className='spinner s9'>
                    <div className='i4 spin-item' id='blank'>
                        <FontAwesomeIcon icon={faFolder} size={iconSize} pointerEvents='none'/>
                    </div>
                </div>
                <div className='spinner s10'>
                    <div className='i5 spin-item' id='blank'>
                        <FontAwesomeIcon icon={faFolder} size={iconSize} pointerEvents='none'/>
                    </div>
                </div>
                <div className='spinner s11'>
                    <div className='i6 spin-item' id='blank'>
                        <FontAwesomeIcon icon={faFolder} size={iconSize} pointerEvents='none'/>
                    </div>
                </div>
                <div className='spinner s12'>
                    <div className='i7 spin-item' id='blank'>
                        <FontAwesomeIcon icon={faFolder} size={iconSize} pointerEvents='none'/>
                    </div>
                </div>
                <div className='spinner s1'>
                    <div className='i8 spin-item' id='blank'>
                        <FontAwesomeIcon icon={faFolder} size={iconSize} pointerEvents='none'/>
                    </div>
                </div>
                <div className='spinner s2'>
                    <div className='i9 spin-item' id='blank'>
                        <FontAwesomeIcon icon={faFolder} size={iconSize} pointerEvents='none'/>
                    </div>
                </div>
                <div className='spinner s3'>
                    <div className='i10 spin-item' id='blank'>
                        <FontAwesomeIcon icon={faFolder} size={iconSize} pointerEvents='none'/>
                    </div>
                </div>
                <div className='spinner s4'>
                    <div className='i11 spin-item' id='s1'>
                        <FontAwesomeIcon icon={faFolder} size={iconSize} pointerEvents='none'/>
                    </div>
                </div>
                <div className='spinner s5'>
                    <div className='i12 spin-item' id='s2'>
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