import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

//importo le icon
import { faHouse } from "@fortawesome/free-solid-svg-icons"
function MovieCard() {


    return (
        <>
            <div className="card mb-4">
                <img src="https://m.media-amazon.com/images/I/51iMWqn1dqL._AC_UF1000,1000_QL80_.jpg" className="card-img-top" alt="titolo del film" />
                <div className="card-body">
                    {/* Qui inserisco i film e le info  */}
                <h5 className="movie-title">Titolo del film</h5>
                <address><i>Autore</i></address>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea vel, aliquid in maxime inventore qui consequatur cum ad, quasi voluptatum sequi, unde aspernatur aperiam est commodi. Alias ea, voluptas doloribus porro reiciendis dolores, hic, recusandae quam sit dolorum error molestias aliquid quo itaque ipsa eum cumque dignissimos rerum. Qui, autem.</p>
            <Link to={`movies/1`} className="btn btn-secondary">See meowre</Link>
                </div>

            </div>


        </>
    )
}

export default MovieCard
