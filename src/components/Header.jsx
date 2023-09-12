import './Header.css';
import { Link } from 'react-router-dom';

//TODO: Replace cart button to cart icon button

function Header() {
    return (
        <div className='header'>
            <div className="logo">Logo</div>
            
            <div className='navigation-container'>
                <nav className="navigation">
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
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
                <Link to='/cart'>
                    <button>Cart</button>
                </Link>
            </div>
        </div>
    )
}

export default Header;