import './Projects.scss'
import LaptopComponent from './LaptopComponent';
import { useState } from 'react';
import Dots from './Dots';
import { jsonData } from './projects-data';
import ProjectInfo from './ProjectInfo';

const Projects = () => {

    const [activeProject, setActiveProject] = useState(0);
    const [isProjectsInfoVisible, setIsProjectsInfoVisible] = useState(false);
    const [isProjectChanging, setIsProjectChanging] = useState(false);

    const projects = jsonData;

    const offsetStart = 926;
    const offsetEnd = 1800;

    window.addEventListener('scroll', () => {
        const scrollValue = ( window.pageYOffset - offsetStart ) / ( document.body.offsetHeight - offsetStart - offsetEnd - window.innerHeight );
        document.documentElement.style.setProperty('--scroll', scrollValue);
        if (scrollValue > 1.9) {
            // if (window.innerHeight )
            setIsProjectsInfoVisible(false);
        } else {
            setIsProjectsInfoVisible(true);
        }
    }, false);

    function timeout(delay) {
        return new Promise( res => setTimeout(res, delay) );
    }

    const waitBeforeChange = async () => {
        setIsProjectChanging(true);
        await timeout(300);
    }

    const changeActiveProject = async (index) => {
        if(activeProject!==index) {
            await waitBeforeChange();
            setActiveProject(index);
            setIsProjectChanging(false);
        }
    }

    return (
        <div className="Projects" id="projects-section">
            <h2>Projects</h2>
            <div className="projects-container">
                <div className={(isProjectsInfoVisible && !isProjectChanging) ? "info-container visible" : "info-container invisible"}>
                    <ProjectInfo projects={projects} index={activeProject}/>
                </div>
                <LaptopComponent isProjectsInfoVisible={isProjectsInfoVisible} isProjectChanging={isProjectChanging} projects={projects} index={activeProject}/>
            </div>
            <Dots projects={projects} activeProject={activeProject} changeActiveProject={changeActiveProject}/>
        </div>
    );
}
 
export default Projects;