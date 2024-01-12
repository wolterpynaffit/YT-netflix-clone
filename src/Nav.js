import React from 'react';
import "./Nav.css";

function Nav() {
    const [show, handleShow] = useState(false)


    // This code snippet defines a function called transitionNavBar. It checks if the vertical scroll position of the window is greater than 100 pixels. If it is, it calls another function called handleShow with the argument true.
    const transitionNavBar = () => {
        if (window.scrollY > 100){
            handleShow(true)
        }
    }
  return (
    <div className ="nav nav_black">
        <div className="nav_contents">
            <img 
            className="nav_logo"
            src="/assets/Netflix_Logo.png" alt=""
            />
            <img 
            className="nav_avatar"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt=""
            />
        </div>
    </div>
  )
}

export default Nav

