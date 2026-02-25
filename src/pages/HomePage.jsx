//mi importo axios
import axios from "axios"
//mi importo useState e useEffect
import { useState, useEffect, use } from "react"

//mi importo la movie card per visualizzare la lista di film
import MovieCard from "../components/MovieCard"

//endpoint di AXIOS
const endpoint = "http://localhost:3000/api/movies";

function HomePage() {
    //imposto la mia variabile di stato 
    const [movies, setMovies] = useState([]);

    //funzione per gestire chiamata alla rotta index di BE
    const fetchMovies = () =>{
        axios.get(endpoint)
        .then(res=>{setMovies(res.data);})
        .catch(err =>{
            console.log(err);
        })
    }
    //funzione rendering listato
    const renderMovies = () => {
        return movies.map(movie => {
            return (
                <div className="col" key={movie.id}>
                    <MovieCard movieProp={movie} />
                </div>
            )
        })
    }
    //richiamo la funzione di fetch
    useEffect(fetchMovies,[]);
    return (
        <>

            <h2><i> Your purrfect meowies community</i></h2>
            <div>
                <div className="row row-cols-3 mt-4">
                    {renderMovies()}
                </div>
            </div>
        </>
    )
}

export default HomePage
