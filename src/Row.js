import React, { useEffect, useState } from 'react'
import axios from './axios'
import "./Row.css"

const Row = ({title, fetchUrl, isLargeRow = false}) => {
  const [movies, setMovies] = useState([]);
  // we are setting state for movies so that we can display the movies this will hold all the movies and allow us to display them 
  const base_url = "https://api.themoviedb.org/3"


  //This code snippet defines an asynchronous function called fetchData. It uses the axios library to make an HTTP GET request to a specified URL (fetchUrl). The response from the request is stored in the request variable. It then calls a function called setMovies and passes the results property of the response data as an argument. Finally, it returns the request object.

  // This is utilizing our LOCAL axios.js file to retrieve the baseURL
  // useEffect(()=> {
  //   async function fetchData(){
  //     const request = await axios.get(fetchUrl);
  //     // we've passed in fetchUrl as a prop giving us access to "requests.fetchHorrorMovies etc... " This particular object has the URL info for given category
  //     setMovies(request.data.results)
  //     return request
      
  // }

  // fetchData()
  // },[fetchUrl])

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(fetchUrl);
        console.log(request.data.results);  // Log the data to check if it's received
        setMovies(request.data.results);
        return request;
      } catch (error) {
        console.error("Error fetching data:", error);
        console.log("Response data: ", error.response.data);
        console.log("Response status:", error.response.status);
        console.log("respose headers:", error.response.headers)
      }
    }
  
    fetchData();
  }, [fetchUrl]);

  // console.log( movies)
  // console.log('this is FETCHURL:' , base_url + fetchUrl)

  const API_KEY = 'faecfa97c656fff3de6165e36d71d11c';

  const imageURL = `${base_url}'/u3ySnWqSjM3jedYgJZTR7RWRDDm.jpg?api_key=${API_KEY}`;

  console.log('-------------------')
  console.log(imageURL)
  console.log('-------------------')





  return (
    <div className = "row">
      <h2> {title}</h2>
      <img src= {fetchUrl} alt={title}/>
      {/* {movies.map(movie  => ( 
        <img src = {`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path
        }`} alt= {movie.name}/>
      ))} */}
      {movies.length > 0 ? (
      movies.map((movie) => (
        <img
          key={movie.id}
          src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
          alt={movie.name}
        />
      ))
    ) : (
      <p>No movies available</p>
    )}

    </div>
  )
}

export default Row

