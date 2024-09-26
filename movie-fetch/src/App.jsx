import { useState,useEffect } from 'react'
//import our components
import MovieDisplay from './components/MovieDisplay'
import Form from './components/Form'
import './App.css'

function App() {
  //const [apiKey, setApiKey] = useState("b06b46b0");
   
    // State to hold movie data
    const[movie , setMovie ] =useState(null);
   // const[movie, setMovie]=useState[[1]]
// function to get movies
const API_KEY = "b06b46b0"
    const getMovie = async(searchTerm) => {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${API_KEY}&t=${searchTerm}`
      );
            //1. Fetch the Data(Parse JSON response into a JavaScript object)
      const data = await response.json();
      // set Response to state
            //2. Convert the data to json

             //3. Save the retrieve data to state (Set the Movie state to the received data)
      setMovie(data)
      
    }
// Function to request movies and save them to state
useEffect(()=>{
  getMovie("Superbad")
},[])

  return (
    <>
      <Form movieSearch={getMovie}/>

       <MovieDisplay movie={movie} /> 
    
    </>
  )}
  

export default App