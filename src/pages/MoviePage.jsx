import { Link } from "react-router-dom"
//import component lista reviews
import MovieReview from "../components/MovieReview"
function MoviePage() {


    return (
        <>
            <header id="movie" className="border-bottom border-1 mb-3">
                <h1>Titolo Film</h1>
                <h3 className="text-muted"><i>By Author</i></h3>
                <p>Lorem ipsum dolor sit amet.</p>
            </header>
            <section id="reviews">
                <header className="d-flex justify-content-between align-items-center mb-4">
                    <h4>Our community reviews</h4>
                </header>
                {/* Qui ci andranno le recensioni */}
                <MovieReview />
                <MovieReview />
                <MovieReview />


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
