import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({movies})=> {
  return (
    <div style={{display:'flex', gap:50, marginLeft:'60px'}} >
        {
            movies.map((el)=><MovieCard key={el.id} movie={el}/>)
        }
    </div>
  )
}

export default MovieList