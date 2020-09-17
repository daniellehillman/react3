import React, {useState} from 'react'

const App = () => {

    const [movieState, setMovieState] = useState({
      movie: '',
      plot: '',
      poster: ''
    })

    movieState.handleInputChange = event => {
        event.preventDefault()
        setMovieState({...movieState, [event.target.name]: event.target.value})
        console.log(movieState)
    }

    movieState.handleSubmitClick = () => {
        event.preventDefault()
        // setMovieState({ ...movieState, title: movieState.title, plot: movieState.plot, poster: movieState.poster})
    
    }

return (

    <>
   <form>
    <h1>Enter Your Information</h1>
    <label htmlFor="title">Title: </label>
    <input type="text" 
    name= "title" 
    value= {movieState.title}
    onChange= {movieState.handleInputChange}/>
    <hr/>
    <label htmlFor="">Plot: </label>
    <input type="text" name= "plot"
    value= {movieState.plot}
    onChange= {movieState.handleInputChange}/>
    <hr/>
    <label htmlFor="">Poster Link: </label>
    <input type="text" name= "poster"
    value= {movieState.poster}
    onChange= {movieState.handleInputChange}/>
    <br></br>
    <button onClick={movieState.handleSubmitClick}> Submit</button>
    <hr/>
    </form>
    </>
)



}
export default App
