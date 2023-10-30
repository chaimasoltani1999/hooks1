import React, { useState } from 'react'
import data from './Data/Data'
import MovieList from './components/MovieList'
import Add from './components/Add'
import { useRef } from 'react'
import Filters from './components/Filters'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, Navbar } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom'
import MovieDetails from './components/MovieDetails'

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
    setNewMovie([{
      title:myTitle.current.value,
      img: myImg.current.value,
      description:myDescription.current.value,
      rate: myRate.current.value

    }]) 
    setMovies([...movies, ...newmovie])

    }

  return (
   
    <div className="App">
    <Navbar bg="danger" variant="dark">
          <Container className="justify-content-start text-xl">
            <Navbar.Brand className="sizetext" href="#home">
              Netflix
            </Navbar.Brand>
          </Container>
        </Navbar>
      
      
       

  <Routes>
    <Route path="/" element={<>
      <Filters handleSearch={handleSearch} toSearch={toSearch} handleRate={handleRate}/>
        <Add myTitle={myTitle} myImg={myImg} myDescription={myDescription} myRate={myRate} handleAdd={handleAdd}/>
        <MovieList movies={[...movies, ...newmovie].filter(movie =>movie.title.toLowerCase().trim().includes(search.toLowerCase().trim()) && movie.rate >= rating)}/></>}></Route>
   
    <Route path="/movie/:id" element={<MovieDetails movies={[...movies, ...newmovie]} />}/>
   
  </Routes>
    </div>
    
  )
}
  
  

export default App