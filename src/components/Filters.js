import React from 'react'
import StarRatingComponent from 'react-star-rating-component';

const Filters=({toSearch,handleSearch,handleRate}) =>{
  return (
    <div>
      <StarRatingComponent 
          name="rate" 
          starCount={5}
          // value={movie.rate}
          onStarClick={(value)=> handleRate(value)}
          emptyStarColor={"white"}
        />
        <input placeholder='search' type='text' ref={toSearch}/>
        <button onClick={handleSearch}>search</button>
    </div>
  )
}

export default Filters