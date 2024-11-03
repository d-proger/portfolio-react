import { NavLink } from 'react-router-dom';
import BtnDarkMode from '../BtnDarkMode/BtnDarkMode';
import './style.css';


const Navbar = () => {
    const activeClass = 'nav-list__link nav-list__link--active';
    const noActiveClass = 'nav-list__link';

    return (
        <nav className="nav">
            <div className="container">
                <div className="nav-row">
                    <NavLink to="/" className="logo">
                        <strong>Freelancer</strong>
                    </NavLink>
                    {/* <a href="./index.html" className="logo"><strong>Freelancer</strong> portfolio</a> */}

                    <BtnDarkMode />

                    <ul className="nav-list">

                        <li className="nav-list__item">
                            <NavLink to="/" className={({ isActive }) => isActive ? activeClass : noActiveClass}>Home</NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink to="/projects" className={({ isActive }) => isActive ? activeClass : noActiveClass}>Projects</NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink to="/contacts" className={({ isActive }) => isActive ? activeClass : noActiveClass}>Contacts</NavLink>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

