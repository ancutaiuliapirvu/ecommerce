import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className='header'>
            <div className="logo">Logo</div>
            
            <div className='navigation-container'>
                <nav className="navigation">
                    <ul>
                        <li>
                            <Link to='/home'>Home</Link>
                        </li>
                        <li>
                            <Link to='/products'>Products</Link>
                        </li>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                        <li>
                            <Link to='/contact'>Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>


            <div className="cart"> 
                {/* s-ar putea sa nu mearga */}
                
                <Link to='/cart'>
                    <button>Cart</button>
                </Link>
            </div>
        </div>
    )
}

export default Header;