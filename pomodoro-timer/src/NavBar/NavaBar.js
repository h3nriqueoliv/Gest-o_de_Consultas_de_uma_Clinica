import './NavBar.css';
import { Link } from 'react-router-dom';
import Logo from './img/v1.png';

const NavBar = () => {
    return ( 
        <div className="content-navbar">
            <nav className='navbar'>
                 <Link to="/"><img className='Logo' src={Logo}/></Link>
            </nav>
        </div>
     );
}
 
export default NavBar;