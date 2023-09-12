import { Link } from 'react-router-dom';
import './About.css'

function About() {
    return(
        <div className="about-me-container">
            <div className="about-me-content">
                <h2>About Me</h2>
                <p>
                    Welcome to our ecommerce store! We are passionate about providing you with the best products and services.
                </p>
                <p>
                    Our team is dedicated to ensuring your shopping experience is exceptional, from browsing our catalog to receiving your order.
                </p>
                <p>
                    If you have any questions or need assistance, please don't hesitate to <Link to='/contact'>contact us</Link>. We're here to help!
                </p>
            </div>
        </div>
    )
}

export default About;