import Button from './Button.jsx';

export default function ProjectSideBar({ onStartNewProject, projects }) {

    return (
        <aside>
            <h2>Your Projects ({projects.length})</h2>
            <div>
                <Button onClick={onStartNewProject} className="text-stone-700 hover:text-red-500">+ Add Project</Button>
            </div>

            <ul className='mt-8'>
                {
                    projects.map((project) => (
                        <li key={project.id}>
                            <button>
                            {project.title}
                            </button>
                            </li>
                    )
                )}
            </ul>
        </aside>
    );
}