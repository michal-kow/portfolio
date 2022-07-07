import './Header.scss'
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

const Header = () => {
    return (
        <div className="Header">
            <a href='http://github.com/michal-kow' target='_blank' rel="noreferrer"><FaGithub className='github-icon'/></a>
            <a href='https://www.linkedin.com/in/michal-tomasz-kowalik/' target='_blank' rel="noreferrer"><FaLinkedin className='linkedin-icon'/></a>
        </div>
    );
}
 
export default Header;