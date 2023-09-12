import { Link } from "react-router-dom";
import './Home.css'


//TODO: carusel imagini / imagine - element hero 


function Home() {
    return(
        <div className="home">
            <div className="hero">
                <img src="" alt="Hero Image" className="hero-image" />
                <div className="hero-content">
                    <h1>Welcome to Our Online Shop</h1>
                    <p>Discover the latest trends in fashion and accessories.</p>
                    <Link to='/cart'>Shop Now</Link>
                </div>
            </div>
        </div>
    )
}

export default Home;