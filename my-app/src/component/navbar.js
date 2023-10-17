import { useState } from "react";
import "./navber.css";
import { a } from "react-router-dom";

const Navber = () => {
  const [colors,setcolors] = useState(true);
  const changecolor=()=>{
    if (colors===true){
      document.getElementsByClassName("back").style.backgroundColor="white";
    }
  }

  return (
    <div id="navber">
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
        <div className="container-fluid" >
          <a className="navbar-brand" href="/"><img className="navberlogo" src={require('./profile.jpg')}alt="logo"></img></a>
          <a className="navbar-brand" href="/">Atanu Ghosh</a>
          {/* <a className="navbar-brand" onClick={()=>changecolor}>change</a> */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="nav navbar-nav">
              <li className="nav-item"><a className="nav-link active" href="#welcome_home">Home</a></li>
              <li className="nav-item"><a className="nav-link active" href="#about">About me</a></li>
              <li className="nav-item"><a className="nav-link active" href="#myskills">My skills</a></li>
              <li className="nav-item"><a className="nav-link active" href="#projects">MY Projects</a></li>
              <li className="nav-item"><a className="nav-link active" href="#contacts">Contact</a></li>
              {/* <li className="nav-item"><a className="nav-link active" href="/technology">Technology</a></li> */}
            </ul>

          </div>
        </div>
      </nav>
    </div>
  )
}
export default Navber;
