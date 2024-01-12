import React from 'react';
import { useState , useEffect} from 'react';
import "./Nav.css";

function Nav() {
    const [show, handleShow] = useState(false)


    // This code snippet defines a function called transitionNavBar. It checks if the vertical scroll position of the window is greater than 100 pixels. If it is, it calls another function called handleShow with the argument true.
    const transitionNavBar = () => {
        if (window.scrollY > 100){
            handleShow(true)
            // Then the black bar will show
        }
    }

    useEffect(()=> {
        // hook that takes a function and a second argument, the code will only run when the componenet mounts
        window.addEventListener('scroll', transitionNavBar);
        // this return function serves as a 'cleanup'
        return () => window.removeEventListener('scroll', transitionNavBar) 
        // everytime we scroll we are listening to event and will listen for scroll event and trigger transitionNavBar function

    },[])

  return (
    // the interpolation below is saying: only render the navblack class if the show variable is true.
    <div className ={`nav ${show && 'nav_black'}`}>
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

