import React from 'react'
import { Link } from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';

const  MovieCard = ({movie})=> {
  return (
    <div>

<Link to={`/movie/${movie.title}`}>
        <img src={movie.img} alt="" style={{ width: '18rem' }}/>
        <div>{movie.title}</div>
        <div>{movie.description}</div>
        <StarRatingComponent 
          name="rate" 
          starCount={5}
          value={movie.rate}
        //   onStarClick={this.onStarClick.bind(this)}
        />
         </Link>
    </div>
  )
}

export default MovieCard