// import {BrowserRouter,Switch,Route,NavLink} from ReactRouterDOM;
import { NavLink } from "react-router-dom";
import React from "react";
import "./newnav.css";
//Pages

const Newnav=()=> {
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('CV.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'CV.pdf';
            alink.click();
        })
    })
}
  return (
    <header>
    <h1 class="logo">AG</h1>
    <input type="checkbox" id="nav-toggle" class="nav-toggle"/>
    <label for="nav-toggle" class="nav-hamburger">
      <span></span>
    </label>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#projects">Project</a></li>
        <li><a href="#newcontact">Contact</a></li>
      </ul>
    </nav>
  </header>
  );
}
export default Newnav;