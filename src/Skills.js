import './Skills.scss'
import { SiHtml5, SiCss3, SiReact, SiVisualstudiocode } from 'react-icons/si';
import { FaSass, FaGitAlt } from 'react-icons/fa';

const Skills = () => {

    return (
        <div className="Skills" id='skills'>
            <div className="container">
                <h2>Skills</h2>
                <div className="skills-container">
                    <SiReact className='icon'/>
                    <SiHtml5 className='icon' />
                    <SiCss3 className='icon' />
                    <FaSass className='icon' />
                    <FaGitAlt className='icon' />
                    <SiVisualstudiocode className='icon' />
                </div>
            </div>
        </div>
    );
}
 
export default Skills;