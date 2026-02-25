import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

//importo le icon
import { faHouse } from "@fortawesome/free-solid-svg-icons"
function MovieCard(props) {
    const {id, title,director,genre,release_year,abstract,image} = props.movieProp;


    return (
        <>
            <div className="card mb-4">
                <img src={image} className="card-img-top" alt={title} />
                <div className="card-body">
                    {/* Qui inserisco i film e le info  */}
                    <h5 className="movie-title">{title} {release_year}</h5>
                    <address><i>{director} </i></address>
                    <p className="card-text">{abstract}</p>
                    <address><i>{genre}</i></address>
                    <Link to={`movies/${id}`} className="btn btn-secondary">See meowre</Link>
                </div>

            </div>


        </>
    )
}

export default MovieCard
