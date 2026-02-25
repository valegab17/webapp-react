import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

//importo le icon
import { faPaw } from "@fortawesome/free-solid-svg-icons"
function MovieReview(props) {
        const {name,vote,text} = props.reviewProp;


    return (
        <>
            <div className="card mb-4">
                <div className="card-body">
                    <p className="card-text">
                        {text}
                    </p>
                    <strong><FontAwesomeIcon icon={faPaw} /> : {vote}</strong>
                    <address><i>By {name}</i></address>
                </div>
            </div>


        </>
    )
}

export default MovieReview
