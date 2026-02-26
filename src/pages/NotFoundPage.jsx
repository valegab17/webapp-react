import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

//importo le icon
import { faHouse } from "@fortawesome/free-solid-svg-icons"
import { faPaw } from "@fortawesome/free-solid-svg-icons"
function NotFoundPage() {


    return (
        <>
         <div className="h-100 d-flex flex-column align-items-center ">
            <h2>Page Not Found</h2>
            <p className="text-muted my-3"> <FontAwesomeIcon icon={faPaw} /> Sorry but the page you are looking furrr does not exist. <FontAwesomeIcon icon={faPaw} /></p>
            <Link className="btn btn-secondary" to="/">Back to home</Link>
         </div>
        </>
    )
}

export default NotFoundPage
