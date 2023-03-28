import './Projects.scss'
import LaptopComponent from './LaptopComponent';
import { useEffect, useState } from 'react';
import Dots from './Dots';
import { jsonData } from './projects-data';
import ProjectInfo from './ProjectInfo';

const Projects = () => {

    const [activeProject, setActiveProject] = useState(0);
    const [isProjectsInfoVisible, setIsProjectsInfoVisible] = useState(false);
    const [isProjectChanging, setIsProjectChanging] = useState(false);
    const [offsetStart, setOffsetStart] = useState(100);
    const [offsetEnd, setOffsetEnd] = useState(1000);

    const projects = jsonData;

    useEffect(() => {
        const homeHeight = document.querySelector('.Home').offsetHeight;
        const skillsHeight = document.querySelector('.Skills').offsetHeight;
        const contactHeight = document.querySelector('.Contact').offsetHeight;
        setOffsetStart(homeHeight+skillsHeight);
        setOffsetEnd(contactHeight);
    }, [])


    window.addEventListener('scroll', () => {
        let scrollValue = ( window.pageYOffset + window.innerHeight - 1.8*offsetStart ) / ( document.body.offsetHeight - offsetStart - 2*offsetEnd );
        if (scrollValue < 0) {
            scrollValue = 0;
        } else if (scrollValue > 1) {
            scrollValue = 1;
        }
        document.documentElement.style.setProperty('--scroll', scrollValue);
        if (scrollValue > 0.5) {
            setIsProjectsInfoVisible(true);
        } else {
            setIsProjectsInfoVisible(false);
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