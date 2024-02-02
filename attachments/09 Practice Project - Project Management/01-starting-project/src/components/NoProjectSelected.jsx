import noProjectImage from '../assets/no-projects.png';
import Button from './Button.jsx';

export default function NoProjectSelected({onStartNewProject}) {

    return (
        <div className='mt-24 text-center w-2/3'>
            <img src={noProjectImage} className='w-16 h-16 object-contain mx-auto'/>
            <h2>No Project selected</h2>
            <p>Select a project or create a new project</p>
            <p>
                <Button onClick={onStartNewProject} >Create new project</Button>
            </p>
        </div>
    );
}