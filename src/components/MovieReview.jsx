import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

//importo le icon
import { faPaw } from "@fortawesome/free-solid-svg-icons"
function MovieReview() {


    return (
        <>
            <div className="card mb-4">
            <div className="card-body">
                <p className="card-text">
                    testo della review
                </p>
                <strong><FontAwesomeIcon icon={faPaw} /> : 5/5</strong>
                <address><i>By review Author</i></address>
            </div>
            </div>


        </>
    )
}

export default MovieReview
