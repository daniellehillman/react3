// import React, {useState} from 'react'
// import axios from 'axios'

// const App = () => {

//     const [gifState, setGifState] = useState({
//       gif: '',
//       image: ''
    
//     })

//     gifState.handleInputChange = event => {
//         event.preventDefault()
//         setGifState({...gifState, [event.target.name]: event.target.value})
//         // console.log(gifState)
//     }

//     gifState.handleSubmitClick = event => {
//         event.preventDefault()
//         // setMovieState({ ...movieState, title: movieState.title, plot: movieState.plot, poster: movieState.poster})
//         axios.get(`https://api.giphy.com/v1/gifs/search?q=${gifState.gif}&api_key=0E0ghVQdiqggRcoSoPiZAixFKPxb92XR&limit=5`)
//         .then(({ data })=> {
//             console.log(data)
//             // setGifState({ ...gifState, gif: data.data[0].source })
//             setGifState({ ...gifState, image: data.data[0].original.url })
        
//         })
//     }

// return (

//     <>
//    <form>
//     <h1>Enter Your Information</h1>
//     <label htmlFor="title">Gif: </label>
//     <input type="text" 
//     name= "gif" 
//     value= {gifState.gif}
//     onChange= {gifState.handleInputChange}/>
//     <button onClick={gifState.handleSubmitClick}> Submit</button>
//     <hr/>
//     <img src={gifState.image} alt="hi"></img>
//     </form>
//     </>
// )



// }
// export default App


// --------------

// importing useState and useEffect from react 
import React, { useState, useEffect } from 'react'
import GifContext from './utils/GifContext'
// connecting form or card 
import Form from './components/Form'
import Card from './components/Card'
import axios from 'axios'


const App = () => {

  const [gifState, setGifState] = useState({
    search: '',
    gif: {}
  })

//   function that updates the value of search and assigning to that name
  gifState.handleInputChange = event => {
    setGifState({ ...gifState, [event.target.name]: event.target.value })
  }


  gifState.handleSearchGIPHY = event => {
    event.preventDefault()
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=so6QOTNdmWKPObKhaL11EhE7gGtpiiqG&q=${gifState.search}&limit=20&rating=g`)
      .then(({ data }) => {
        let gif = data.data[Math.floor(Math.random() * data.data.length)]
        setGifState({ ...gifState, gif })
      })
  }

  useEffect(() => {
    axios.get('https://api.giphy.com/v1/gifs/search?api_key=so6QOTNdmWKPObKhaL11EhE7gGtpiiqG&q=cats&limit=20&rating=g')
      .then(({ data }) => {
        let gif = data.data[Math.floor(Math.random() * data.data.length)]
        setGifState({ ...gifState, gif })
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <>
      <h1>GIPHY App</h1>
      <GifContext.provider value = {gifState}>


      <Form
        search={gifState.search}
        handleInputChange={gifState.handleInputChange}
        handleSearchGIPHY={gifState.handleSearchGIPHY} />
      {
        gifState.gif.title ? <Card gif={gifState.gif} /> : null
      }
      </GifContext.provider>
    </>
  )
}

export default App