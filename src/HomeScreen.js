import React from 'react'
import "./HomeScreen.css";
import Nav from "./Nav"
import Banner from './Banner';
import Row from './Row';
import requests from './app/Requests';


function HomeScreen() {
  // console.log("this is a TEST:" + requests.fetchTrending)

  return (
    <div className = "homeScreen">
        {/* Nav */}
        <Nav/>
        {/* Banner */}
        <Banner/>
        {/* Row */}
        <Row
        title = 'NETFLIX ORIGINALS'
        fetchUrl={requests.fetchNetflixOriginals}
        // ERROR: there was a spelling error with originals, which was preventing movies to be mapped correctly. 
        
        isLargeRow
        />
        <Row
        title = 'Trending Now'
        fetchUrl={requests.fetchTrending}
       
        />
        <Row
        title = 'Top Rated'
        fetchUrl={requests.fetchTopRated}
       
        />
        <Row
        title = 'Action Movies'
        fetchUrl={requests.fetchActionMovies}
       
        />
        <Row
        title = 'Comedy Movies'
        fetchUrl={requests.fetchComedyMovies}
       
        />
        <Row
        title = 'Horror Movies'
        fetchUrl={requests.fetchHorrorMovies}
       
        />
        <Row
        title = 'Romance Movies'
        fetchUrl={requests.fetchRomanceMovies}

        />
        <Row
        title = 'Documentaries'
        fetchUrl={requests.fetchDocumentaries}
        />
        
    </div>
  )
}

export default HomeScreen