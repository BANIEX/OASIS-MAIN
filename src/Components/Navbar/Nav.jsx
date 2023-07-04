import logo from '../../image/logo.jpeg'
import './Nav.css'
import { useState } from 'react';

const Nav = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='nav__con'>
        <div className='logodiv'>
            <img className='logo' src={logo} alt='logo' />
        </div>
        <nav className={`nav ${isOpen? 'show': '' }`}>
            <ul className={`nav__list ${isOpen? 'open': '' }`}>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Support</li>
                <li className='donate'>Donate</li>

                
            </ul>
            
        </nav>
        <div className={`hamburger`} onClick={toggleMenu}>
              <i className="fas fa-bars"></i>

        </div>
    </div>
  )
}

export default Nav
