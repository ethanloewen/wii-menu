import './Projects.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen } from '@fortawesome/free-regular-svg-icons';
import { faFolder } from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery';
import { useState } from 'react';




function Projects(props) {
    const projectDetails = [
        {
            'title': 'Project 1',
            'link': 'testlink1'
        },
        {
            'title': 'Project 2',
            'link': 'testlink2'
        },
        {
            'title': 'Project 3',
            'link': 'testlink3'
        },
        {
            'title': 'Project 4',
            'link': 'testlink4'
        },
        {
            'title': 'Project 5',
            'link': 'testlink5'
        }
    ];

    const [rotation, setRotation] = useState(0);
    const [id, setId] = useState('s3');
    const [lastClass, setLastClass] = useState('i1');
    const [projectIndex, setProjectIndex] = useState(0);
    const [projectInfo, setProjectInfo] = useState(projectDetails[projectIndex]);

    

    const iconColor = '#1a1a1a';
    const iconSize = '3x';
    const focusIconSize = '4x';

    // NEW function to wrap negatives (might replace formatClassesArr as a more generic ver.)
    const wrapInRange = (n, m) => {
        const num = n;
        const max = m;

        const wrappedValue = num % max;

        return wrappedValue;
    };
    
    // check for and convert [-1 to 11, 0 to 12, 13 to 1, 14 to 2] (classes must be in i1-i12)
    const formatClassesArr = (arr) => {
        const outputArr = [];

        for (const elm of arr) {
            switch(elm) {
                case -1:
                    outputArr.push(11);
                    break;
                    
                case 0:
                    outputArr.push(12);
                    break;
                
                case 13:
                    outputArr.push(1);
                    break;
                    
                case 14:
                    outputArr.push(2);
                    break;

                default:
                    outputArr.push(elm);
            } 
        }

        return outputArr;
    };

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
        $(`.${currentClass}`).attr("id", "s3");
        // remove id from old element
        $(`.${lastClass}`).attr("id", "blank");

        // get id without letter
        const formattedCurrentId = (currentId).slice(1);

        // set a rotation amount based on how far away was clicked
        if (formattedCurrentId === '5') {
            rotationAmt -= 60;
        } 
        else if (formattedCurrentId === '4') {
            rotationAmt -= 30;
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

        let classesToUpdate = [];

        classesToUpdate[0] = formattedCurrentClass - 2;
        classesToUpdate[1] = formattedCurrentClass - 1;
        classesToUpdate[2] = formattedCurrentClass + 1;
        classesToUpdate[3] = formattedCurrentClass + 2;

        // use the formatClassesArr() function to normalize the unwanted values
        const finalFormatted = formatClassesArr(classesToUpdate);

        // add relevant id to new 'hitbox' classes
        for (let i = 0; i < 4; i++) {
            
            //skip iteration for s3 that is already set earlier
            let count = i;
            if (count >= 2) {
                count++;
            }
            
            $(`.i${finalFormatted[i]}`).attr("id", `s${count + 1}`);
            console.log(`.i${finalFormatted[i]}`, `s${count + 1}`);
        }

        setRotation(rotationAmt);
        setLastClass(`${currentClass}`)
    };

    return (
        <div id='projects-main'>


            <div className='project-title'>
                <h1>:{projectInfo.title}</h1>
                {/* <h1>:{wrapInRange()}</h1> */}
            </div>

            <div className='spinner-container' onClick={(e) => {updateSpinner(e)}}>

                <div className='spinner'>
                    <div className='i1 spin-item' id='s3'>
                        <FontAwesomeIcon className='icon' icon={faFolder} size={iconSize} pointerEvents='none' />
                    </div>
                </div>

                <div className='spinner'>
                    <div className='i2 spin-item' id='s4'>
                        <FontAwesomeIcon className='icon' icon={faFolder} size={iconSize} pointerEvents='none'/>
                    </div>
                </div>
                <div className='spinner'>
                    <div className='i3 spin-item' id='s5'>
                        <FontAwesomeIcon className='icon' icon={faFolder} size={iconSize} pointerEvents='none'/>
                    </div>
                </div>
                <div className='spinner'>
                    <div className='i4 spin-item' id='blank'>
                        <FontAwesomeIcon className='icon' icon={faFolder} size={iconSize} pointerEvents='none'/>
                    </div>
                </div>
                <div className='spinner'>
                    <div className='i5 spin-item' id='blank'>
                        <FontAwesomeIcon className='icon' icon={faFolder} size={iconSize} pointerEvents='none'/>
                    </div>
                </div>
                <div className='spinner'>
                    <div className='i6 spin-item' id='blank'>
                        <FontAwesomeIcon className='icon' icon={faFolder} size={iconSize} pointerEvents='none'/>
                    </div>
                </div>
                <div className='spinner'>
                    <div className='i7 spin-item' id='blank'>
                        <FontAwesomeIcon className='icon' icon={faFolder} size={iconSize} pointerEvents='none'/>
                    </div>
                </div>
                <div className='spinner'>
                    <div className='i8 spin-item' id='blank'>
                        <FontAwesomeIcon className='icon' icon={faFolder} size={iconSize} pointerEvents='none'/>
                    </div>
                </div>
                <div className='spinner'>
                    <div className='i9 spin-item' id='blank'>
                        <FontAwesomeIcon className='icon' icon={faFolder} size={iconSize} pointerEvents='none'/>
                    </div>
                </div>
                <div className='spinner'>
                    <div className='i10 spin-item' id='blank'>
                        <FontAwesomeIcon className='icon' icon={faFolder} size={iconSize} pointerEvents='none'/>
                    </div>
                </div>
                <div className='spinner'>
                    <div className='i11 spin-item' id='s1'>
                        <FontAwesomeIcon className='icon' icon={faFolder} size={iconSize} pointerEvents='none'/>
                    </div>
                </div>
                <div className='spinner'>
                    <div className='i12 spin-item' id='s2'>
                        <FontAwesomeIcon className='icon' icon={faFolder} size={iconSize} pointerEvents='none'/>
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