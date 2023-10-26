import React, { useState } from 'react'
import data from './Data/Data'
import MovieList from './components/MovieList'
import Add from './components/Add'
import { useRef } from 'react'
import Filters from './components/Filters'


function App() {

  const [movies,setMovies]= useState(data)
  const [newmovie, setNewMovie] = useState([])
  const [search,setSearch]=useState("")
  const [rating,setRating] =useState(1)

  const myTitle = useRef()
  const myImg = useRef()
  const myDescription =useRef()
  const myRate =useRef()
  const toSearch=useRef()

   const handleRate = (rating) => {
      setRating(rating)
    }
  const handleSearch =() =>{
    setSearch(toSearch.current.value)
  }
  const handleAdd = ()=> {
    setNewMovie({
      title:myTitle.current.value,
      img: myImg.current.value,
      description:myDescription.current.value,
      rate: myRate.current.value

    }) 
    setMovies([...movies, ...newmovie])
    }
   

  return (
    <div className="App">
      <header className="App-header">
      
        <Filters handleSearch={handleSearch} toSearch={toSearch} handleRate={handleRate}/>
        <Add myTitle={myTitle} myImg={myImg} myDescription={myDescription} myRate={myRate} handleAdd={handleAdd}/>
        <MovieList movies={[...movies,...newmovie].filter(movie =>movie.title.toLowerCase().trim().includes(search.toLowerCase().trim()) && movie.rate >= rating)}/>
      </header>

    </div>
  )
  }
  

export default App