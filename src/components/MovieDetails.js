import React from 'react'
import { Link, useParams } from 'react-router-dom';



const MovieDetails = ({ movies }) => {
    const param = useParams();
    const {id}=param
 

    
    const Movie = movies.find((movie) => movie.title === id);
    console.log(Movie)

   
    
  return (
    <div>
      <h2>{Movie.title}</h2>
      <p>Description: {movies.description}</p>
      <p>Rating: {movies.rating}</p>
      
      
      <Link to="/">Go Back</Link>
    </div>
  )
}

export default MovieDetails