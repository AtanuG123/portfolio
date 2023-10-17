import React from "react";
import "./navside.css";
import { useState } from "react";
const Navside = () => {
    const [colors,setcolors] = useState(true);
    const changecolor=()=>{
        const a = document.getElementsByTagName("p")
        const b = document.getElementsByClassName("backcontent")
        const c = document.getElementById("skilldiv")
        const d = document.getElementById("skilldiv2")
        const list = document.getElementsByClassName("back")
      if (colors===true){
        // console.log("hii")
        for(var i =0;i<list.length;i++){
            list[i].style.backgroundColor="white";
          
        }
        for(var i =0;i<b.length;i++){
            b[i].style.color= "#f3f3f3";
          
        }
        for(var i =0;i<a.length;i++){
            a[i].style.color= "black";
            // a[i].style.backgroundColor="white";
        }
        c.style.backgroundColor="white";
        d.style.backgroundColor="white";
        setcolors(false);
    }
    else{
        
        for(var i =0;i<list.length;i++){
            list[i].style.backgroundColor="black";
        }
        for(var i =0;i<b.length;i++){
            b[i].style.color= "black";
          
        }
        for(var i =0;i<a.length;i++){
            a[i].style.color= "white";
            // a[i].style.backgroundColor="black";
        }
        c.style.backgroundColor="black";
        d.style.backgroundColor="black";
        setcolors(true);

      }
    }
    return (
        <div className=" sidenav" id="green">
            <div className="logoandname">
                <div className="logosidebar">
                    <img
                        src={require('./profile.jpg')}
                        alt="logo"
                    />
                </div>
                <h4>Atanu Ghosh</h4>
                
            </div>
            <div>
                <ul className="sidenav-ul">
                    {/* <li><p style={{cursor:"pointer"}} 
                    onClick={changecolor}
                    >change</p></li> */}
                    <li><a href="#welcome_home">Home</a></li>
                    <li><a href="#about">About Me</a></li>
                    <li><a href="#myskills">My skills</a></li>
                    
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contacts">Contact</a></li>
                </ul>
            </div>
            <div className="socialmedia">
                <a target="_blank" href="https://github.com/AtanuG123"><i className="fa-brands fa-github"></i></a>
                <a target="_blank"  href="https://m.facebook.com/profile.php?id=100069554030565"> <i className="fa-brands fa-facebook-f"></i></a>
                <a target="_blank" href="https://www.linkedin.com/mwlite/in/atanu-ghosh-528588232"><i class="fa-brands fa-linkedin"></i></a>
                <a target="_blank" href="#"><i className="fa-brands fa-square-instagram"></i></a>
            </div>
        </div>
    )
}

export default Navside;