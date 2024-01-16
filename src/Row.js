import React, { useEffect, useState } from 'react'
import axios from './axios'

const Row = ({title, fetchUrl, isLargeRow = false}) => {
  const [movies, setMovies] = useState([])

  //This code snippet defines an asynchronous function called fetchData. It uses the axios library to make an HTTP GET request to a specified URL (fetchUrl). The response from the request is stored in the request variable. It then calls a function called setMovies and passes the results property of the response data as an argument. Finally, it returns the request object.
  useEffect(()=> {
    async function fetchData(){
      const request = await axios.get(fetchUrl);
      // we've passed in fetchUrl as a prop giving us access to "requests.fetchHorroMovies etc... " This particular object has the URL info for given category
      setMovies(request.data.results)
      return request
      
  }

  },[fetchUrl])



  console.log("TEST TITLE:" + title)
  //returns category title
  console.log("TEST FETCHURL: " + fetchUrl) // returns url with apikey
  console.log("TEST ISLARGEROW: " + isLargeRow) // returns TRUE
  return (
    <div className = "row">
      <h2> {title}</h2>
      {/* {movies.map((movie =>  movie.title)} */}
    </div>
  )
}

export default Row

