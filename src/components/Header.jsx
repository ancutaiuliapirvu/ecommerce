import './Header.css';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge'


//TODO: Replace cart button to cart icon button

function Header(props) {

    const {favoritesNumber} = props;

    const favoritesFromLocalStorage = localStorage.getItem('favoriteNumber');
    console.log('favorites LS', favoritesFromLocalStorage)

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
                <div className="notification-number">
                    <Badge pill bg="primary" style={{width: '10px', marginTop: '30px'}}>
                        {favoritesNumber}
                    </Badge>
                </div>
            </div>
        </div>
    )
}

export default Header;