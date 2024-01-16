import React from 'react'

const Row = ({title, fetchUrl, isLargeRow}) => {
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

