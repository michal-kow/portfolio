import './Navbar.scss'
import { Link } from "react-scroll";
import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { IoIosArrowBack } from 'react-icons/io';

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    window.addEventListener('scroll', () => {
        document.documentElement.style.setProperty('--scroll-level', ( window.pageYOffset / ( document.body.offsetHeight- window.innerHeight )));
    }, false);

    const handleHamburger = () => {
        setIsMenuOpen(prev => !prev);
    }

    return (
        <div className={isMenuOpen ? "Navbar open" : "Navbar closed"}>
            <div className="menu">{isMenuOpen ? 
                <div className="menu-open">
                    <button className='btn-open' onClick={handleHamburger}><IoIosArrowBack /></button>
                    <ul className="sections-list">
                        <div className="level"></div>
                        <li className="section-item home"><Link to="Home" smooth={true} duration={600}>Home</Link></li>
                        <li className="section-item skills"><Link to="Skills" smooth={true} duration={600}>Skills</Link></li>
                        <li className="section-item projects"><Link to="Projects" smooth={true} duration={600}>Projects</Link></li>
                        <li className="section-item contact"><Link to="Contact" smooth={true} duration={600}>Contact</Link></li>
                    </ul>
                </div>
                : <button className='btn-closed' onClick={handleHamburger}><FiMenu /></button>}
            </div>
        </div>
    );
}
 
export default Navbar;