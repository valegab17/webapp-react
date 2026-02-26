//import axios
import axios from "axios"
//import state ed effect
import { useState, useEffect } from "react"
import { Link, useParams, useNavigate} from "react-router-dom"

//import component lista reviews
import MovieReview from "../components/MovieReview"

//import endpoint
const endpoint = "http://localhost:3000/api/movies/";




function MoviePage() {
    //prendo il film da url rotta
    const {id} = useParams();
//creo istanza del navigate per poterlo usare
const redirect = useNavigate();
//setto la variabile di stato per il film
const [movie, setMovie] = useState({});
    //funzione per gestire chiamata alla rotta show di BE
    const fetchMovie = () =>{
        axios.get(endpoint + id)
        .then(res=>{setMovie(res.data);})
        .catch(err =>{
            console.log(err);
            if(err.satus = 404) redirect('/404');
        })
    }
    //richiamo fetch
        useEffect(fetchMovie,[]);

    //funzione di rendering listato dei movies
    const renderReviews = () => {
        return movie.reviews?.map(review => {
            return (
                <MovieReview reviewProp={review} key={review.id} />
            )
        })
    }

    return (
        <>
            <header id="movie" className="border-bottom border-1 mb-3">
                <h1>{movie.title}</h1>
                <h3 className="text-muted"><i>{movie.director}</i></h3>
                <p>{movie.abstract}</p>
            </header>
            <section id="reviews">
                <header className="d-flex justify-content-between align-items-center mb-4">
                    <h4>Our community reviews</h4>
                </header>
                {/* Qui ci andranno le recensioni */}
                {renderReviews()}


            </section>
            <section className="review-form">

            </section>
            <footer className="border-top border-1 pt-2 mb-3 d-flex justify-content-end">
                <Link to="/" className="btn btn-primary"> Back to Homepage</Link>
            </footer>
        </>
    )
}

export default MoviePage
