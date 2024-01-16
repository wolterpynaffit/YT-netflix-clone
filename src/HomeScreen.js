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
        title = 'NETFLIX ORIGIONALS'
        fetchUrl={requests.fetchNetflixOrinals}
        isLargeRow
        />
        <Row
        title = 'Trending Now'
        fetchUrl={requests.fetchTrending}
        isLargeRow
        />
        <Row
        title = 'Top Rated'
        fetchUrl={requests.fetchTopRated}
        isLargeRow
        />
        <Row
        title = 'Action Movies'
        fetchUrl={requests.fetchActionMovies}
        isLargeRow
        />
        <Row
        title = 'Comedy Movies'
        fetchUrl={requests.fetchComedyMovies}
        isLargeRow
        />
        <Row
        title = 'Horror Movies'
        fetchUrl={requests.fetchHorrorMovies}
        isLargeRow
        />
        <Row
        title = 'Romance Movies'
        fetchUrl={requests.fetchRomanceMovies}
        isLargeRow
        />
        <Row
        title = 'Documentaries'
        fetchUrl={requests.fetchDocumentaries}
        isLargeRow
        />
        
    </div>
  )
}

export default HomeScreen