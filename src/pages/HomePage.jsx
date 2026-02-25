//mi importo la movie card per visualizzare la lista di film
import MovieCard from "../components/MovieCard"
function HomePage() {


    return (
        <>
            <h1 className="text-danger mb-2">BOOVIES</h1>
            <h2><i> Your purrfect meowies community</i></h2>
            <div>
                <p className="row row-cols-3 mt-4">
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                </p>
            </div>
        </>
    )
}

export default HomePage
