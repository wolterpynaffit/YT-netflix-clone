import React from 'react'
import "./Banner.css"

function Banner() {
  function truncate(string, n){
    // below is a ternary operator that checks to see if the length of the string is greater than 'n'. If the condition is true the first code snippit will run, adding an ellipses to the end of the string. Otherwise the second code snippit will run, which returns the full length of the string itself. 
    return string?.length > n ? string.substring(0, n-1) + '...' : return string
    // adding a questionmark (optional) because it string might not be present-- when an api call is made there might be a point when a string is undefined, so this is syntax is meant as a safegaurd to protect you from any potential errors. 

  }
  return (
    <header className = "banner" style={{
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      // ensures the image remains central vertically and horizontally 
      backgroundImage:`url('https://wallpapercave.com/dwp2x/wp8741227.jpg')`}}>
        <div className="banner_contents">
          <h1 className="banner_title">
            Movie Name
          </h1>
          <div className="banner_buttons">
            <button className = "banner_button">Play</button>
            <button className = "banner_button">My List</button>
          </div>
          <h1 className = "banner_description"> This is the description </h1>
        </div>
        <div className = "banner--fadeBottom"/>

  
    </header>
  )
}

export default Banner