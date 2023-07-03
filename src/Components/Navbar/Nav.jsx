import logo from '../../image/logo.jpeg'
import './Nav.css'

const Nav = () => {
  return (
    <div className='nav__con'>
        <div className='logodiv'>
            <img className='logo' src={logo} alt='logo' />
        </div>
        <nav>
            <ul className='nav__list'>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Support</li>
                <li className='donate'>Donate</li>

                
            </ul>
            
        </nav>
        <div className='hamburger'>
              <i className="fas fa-bars"></i>

        </div>
    </div>
  )
}

export default Nav
