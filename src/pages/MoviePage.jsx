import { Link } from "react-router-dom"
//import component lista reviews
import MovieReview from "../components/MovieReview"

//importo array di recensioni da postman per avere un mockup delle recensioni
const movie = {
    "id": 1,
    "title": "Inception",
    "director": "Christopher Nolan",
    "genre": "Science Fiction",
    "release_year": 2010,
    "abstract": "A skilled thief is given a chance at redemption if he can successfully perform inception.",
    "image": "inception.jpg",
    "created_at": "2024-11-29T10:40:13.000Z",
    "updated_at": "2025-05-22T10:55:27.000Z",
    "reviews": [
        {
            "id": 1,
            "movie_id": 1,
            "name": "Alice",
            "vote": 5,
            "text": "A mind-bending masterpiece.",
            "created_at": "2024-11-29T10:40:13.000Z",
            "updated_at": "2024-11-29T10:40:13.000Z"
        },
        {
            "id": 2,
            "movie_id": 1,
            "name": "Bob",
            "vote": 4,
            "text": "Great visuals and a compelling story.",
            "created_at": "2024-11-29T10:40:13.000Z",
            "updated_at": "2024-11-29T10:40:13.000Z"
        },
        {
            "id": 3,
            "movie_id": 1,
            "name": "Charlie",
            "vote": 3,
            "text": "Confusing at times, but worth watching.",
            "created_at": "2024-11-29T10:40:13.000Z",
            "updated_at": "2024-11-29T10:40:13.000Z"
        }
    ]
}


function MoviePage() {
    const renderReviews =() =>{
        return movie.reviews.map(review =>{
            return (
                <MovieReview reviewProp={review} key={review.id}/>
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
