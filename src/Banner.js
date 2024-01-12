import React from 'react'
import "./Banner.css"

function Banner() {
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
            <button classname = "banner_button">My List</button>
          </div>
          <h1 className = "banner_description"> This is the description </h1>
        </div>

  
    </header>
  )
}

export default Banner