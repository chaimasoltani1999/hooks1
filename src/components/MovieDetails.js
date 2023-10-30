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
      <p>Description: {Movie.description}</p>
      <p>Rating: {Movie.rating}</p>
      <iframe width="560" height="315" src={Movie.trailerLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      
      
      <Link to="/">Go Back</Link>
    </div>
  )
}

export default MovieDetails