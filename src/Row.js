import React, { useEffect, useState } from 'react'
import axios from './axios'
import "./Row.css"

const Row = ({title, fetchUrl, isLargeRow = false}) => {
  const [movies, setMovies] = useState([])
  const base_url = "https://api.themoviedb.org/3"

  //This code snippet defines an asynchronous function called fetchData. It uses the axios library to make an HTTP GET request to a specified URL (fetchUrl). The response from the request is stored in the request variable. It then calls a function called setMovies and passes the results property of the response data as an argument. Finally, it returns the request object.

  // This is utilizing our LOCAL axios.js file to retrieve the baseURL
  useEffect(()=> {
    async function fetchData(){
      const request = await axios.get(fetchUrl);
      // we've passed in fetchUrl as a prop giving us access to "requests.fetchHorroMovies etc... " This particular object has the URL info for given category
      setMovies(request.data.results)
      return request
      
  }

  fetchData()
  },[fetchUrl])

  // console.log( movies)




  return (
    <div className = "row">
      <h2> {title}</h2>
      {movies.map((movie) => (
        console.log('displaying movie below: '),
        console.log(movie),
        console.log('displaying poster path below: '),
        console.log(movie.poster_path),
        console.log('displaying movie backdrop path below: '),
        console.log(movie.backdrop_path)
   
        
        // <img 
        // className ={`row_poster ${isLargeRow && "row_posterLarge"}`}
        // key = {movie.id}
        // src= {`${base_url}${
        //   isLargeRow ? movie.poster_path : movie.backdrop_path
        // }`} 
        // alt ='{movie.name}' 
        // />
      ))}

    </div>
  )
}

export default Row

