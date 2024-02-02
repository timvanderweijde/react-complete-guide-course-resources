import ProjectSideBar from './components/ProjectSideBar.jsx';
import NewProject from './components/NewProject.jsx';
import NoProjectSelected from './components/NoProjectSelected.jsx';
import { useState } from 'react';

function App() {

  const [projectsState, setProjectsState] = useState({
    selectedProject: undefined,
    projects: []
  });

  function handleCancel() {
    setProjectsState(prev => {
      return {
        ...prev,
        selectedProject: undefined
      }
    });
  }

  function handleOnStartNewProject() {

    setProjectsState(prev => {
      return {
        ...prev,
        selectedProject: null
      }
    });
  }

  function handleNewProject(projectData) {

    setProjectsState(prev => {

      const newProject = {
        ...projectData,
        id: Math.random()
      }

      return {
        ...prev,
        selectedProject: undefined,
        projects: [...prev.projects, newProject]
      }
    });
  }

  console.log(projectsState.projects)
  
  return (
    <main className='h-screen my-8'>
      <ProjectSideBar onStartNewProject={handleOnStartNewProject} projects={projectsState.projects} />
      {projectsState.selectedProject === null ? <NewProject onCancel={handleCancel} onAdd={handleNewProject} /> : <NoProjectSelected onStartNewProject={handleOnStartNewProject} />}
    </main>
  );
}

export default App;
