import './Projects.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen } from '@fortawesome/free-regular-svg-icons';
import { faFolder } from '@fortawesome/free-solid-svg-icons';




function Projects(props) {

    const iconColor = '#1a1a1a';
    const iconSize = '3x';
    const focusIconSize = '4x';

    return (
        <div id='projects-main'>


            <div className='project-title'>
                <h1>:Tiny URL</h1>
            </div>

            <div className='spinner-container'>

                <div className='spinner s1'>
                    <div className='spin-item'>
                        <FontAwesomeIcon icon={faFolderOpen} size={focusIconSize} color={iconColor} />
                    </div>
                </div>

                <div className='spinner s2'>
                    <div className='spin-item'>
                        <FontAwesomeIcon icon={faFolder} size={iconSize} />
                    </div>
                </div>
                <div className='spinner s3'>
                    <div className='spin-item'>
                        <FontAwesomeIcon icon={faFolder} size={iconSize} />
                    </div>
                </div>
                <div className='spinner s4'>
                    <div className='spin-item'>
                        <FontAwesomeIcon icon={faFolder} size={iconSize} />
                    </div>
                </div>
                <div className='spinner s5'>
                    <div className='spin-item'>
                        <FontAwesomeIcon icon={faFolder} size={iconSize} />
                    </div>
                </div>
                <div className='spinner s6'>
                    <div className='spin-item'>
                        <FontAwesomeIcon icon={faFolder} size={iconSize} />
                    </div>
                </div>
                <div className='spinner s7'>
                    <div className='spin-item'>
                        <FontAwesomeIcon icon={faFolder} size={iconSize} />
                    </div>
                </div>
                <div className='spinner s8'>
                    <div className='spin-item'>
                        <FontAwesomeIcon icon={faFolder} size={iconSize} />
                    </div>
                </div>
                <div className='spinner s9'>
                    <div className='spin-item'>
                        <FontAwesomeIcon icon={faFolder} size={iconSize} />
                    </div>
                </div>
                <div className='spinner s10'>
                    <div className='spin-item'>
                        <FontAwesomeIcon icon={faFolder} size={iconSize} />
                    </div>
                </div>
                <div className='spinner s11'>
                    <div className='spin-item'>
                        <FontAwesomeIcon icon={faFolder} size={iconSize} />
                    </div>
                </div>
                <div className='spinner s12'>
                    <div className='spin-item'>
                        <FontAwesomeIcon icon={faFolder} size={iconSize} />
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