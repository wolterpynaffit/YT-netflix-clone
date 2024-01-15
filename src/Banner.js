import React, {useState, useEffect} from 'react'
import "./Banner.css"
import axios from './axios';
import requests from './app/Requests';

function Banner() {

  const [movie, setMovie]= useState([]);

// This is going to fetch the movie information
// This code snippet defines an asynchronous function called fetchData. It uses the axios library to make an HTTP GET request to the fetchNetflixOriginals endpoint. The response data is stored in the request variable. Then, it selects a random movie from the response data and sets it using the setMovie function. Finally, it returns the request object.
  useEffect(()=> {
    async function fetchData(){
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      )
      return request;
    }
    fetchData()
  },[]) // empty dependency so that this code is only fired when the banner component mounts 
  console.log(movie)
  console.log('BACKDROP_PATH:' + movie.backdrop_path)
  console.log('FIRST_AIR_DATE: ' +  movie.first_air_date)
  console.log('MOVIE_NAME:' + movie.name)
  function truncate(string, n){
    // below is a ternary operator that checks to see if the length of the string is greater than 'n'. If the condition is true the first code snippit will run, adding an ellipses to the end of the string. Otherwise the second code snippit will run, which returns the full length of the string itself. 
    return string?.length > n ? string.substring(0, n-1) + '...' : string
    // adding a questionmark (optional) because it string might not be present-- when an api call is made there might be a point when a string is undefined, so this is syntax is meant as a safegaurd to protect you from any potential errors. 

  }
  return (
    <header className = "banner"
     style={{
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      // ensures the image remains central vertically and horizontally 
      backgroundImage:`url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`
      // the interpolation is movie(optionial)
    }}
    >
        <div className="banner_contents">
          <h1 className="banner_title"> {movie?.title || movie?.name || movie?.original_name}</h1>
          <div className="banner_buttons">
            <button className = "banner_button">Play</button>
            <button className = "banner_button">My List</button>
          </div>

          <h1 className = "banner_description"> {truncate(movie?.overview, 250)} </h1>


        </div>
        <div className = "banner--fadeBottom"/>

  
    </header>
  )
}

export default Banner