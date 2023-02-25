import './NavBar.css';
import { Link } from 'react-router-dom';
import NavBarLogo from './img/NavBarLogo.png';

const NavBar = () => {
    return ( 
        <nav className="navbar">

            {/* Logo's div */}
            <div className='logo'>
                <Link to="/"><img className='pomodoro-logo' alt='' src={NavBarLogo}/></Link>
            </div>

            {/* links div */}   
            <div className="links">
                <Link className='Separadores' to="/quiz">Quiz's</Link>
                <Link className='Separadores' to="/support">Suport</Link>
                <Link className='Separadores' to="/aboutus">AboutUs</Link>
                <Link className='Separadores' to="/sugestoes">Sugestions</Link>
            </div>

            {/* Links1 */}
            <div className="links1">
                <a href="/register">Register</a>
            </div>

            {/* Profile */}
          {/*   <div className="profile">
                <Link to="/profile"><img alt='' src={User}/></Link>
            </div>        */}

        </nav>
     );
}
 
export default NavBar;