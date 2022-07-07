import './Dots.scss';
import { useEffect, useState } from 'react';

const Dots = ({projects, activeProject, changeActiveProject}) => {

    const [dotsClicked, setDotsClicked] = useState([true, false, false, false]);

    useEffect(() => {
        let newArray = [false, false, false, false];
        newArray[activeProject] = true;
        setDotsClicked(newArray)
    }, [])


    const handleDotClick = (e) => {
        const dotId = e.currentTarget.id;
        const dotNumber = dotId.substring(dotId.length-1);
        let newArray = [false, false, false, false];
        newArray[dotNumber] = true;
        setDotsClicked(newArray);
        changeActiveProject(dotNumber);
    }

    const dotsList = projects.map((project) => <li key={project.id} id={"dot"+project.id} onClick={handleDotClick} className={dotsClicked[project.id] ? "dot active" : "dot"}></li>)


    return (
        <ul className='Dots'>
            {dotsList}
        </ul>
    );
}
 
export default Dots;