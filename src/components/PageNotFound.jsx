import { Link } from "react-router-dom";

function PageNotFound () {
    return(
        <div>
            404 not found
            Go back to <Link to='/'> Homepage </Link>
            
        </div>
    )
}

export default PageNotFound;