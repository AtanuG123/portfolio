import React from "react";
import "./welcome_home.css";
// import Aboutme from "./aboutme";
import { useTypewriter, Cursor } from "react-simple-typewriter"
const Welcomehome = () => {
    const [text] = useTypewriter({
        words: ["  Atanu Ghosh.", ' a Programmer.', ' a Web developer.'],
        loop: 0,
        typeSpeed: 100,
        deleteSpeed: 80,
        delaySpeed: 2000
    })

    return (
        <div className="back1" id="welcome_home" >
            <div className="content" id="welcontent">

                <div className="logosidebar">
                <img
                        src={require('../images/profile.jpg')}
                        alt="logo"
                    />
                </div>
                <div>
                    <h2>
                        I'm
                        <span className="typewri">
                            {text}
                        </span>
                        <Cursor />
                    </h2>
                </div>
                <div>

                    <h6>I specialize in crafting intuitive websites with cutting-edge technology,
                        delivering dynamic and engaging user experiences.</h6>
                </div>
                <div>

                    <div>


                        <button class="button-71" role="button"><i class="fa-brands fa-github"></i>Github</button>





                        <button class="button-71" role="button"><i class="fa-brands fa-linkedin"></i>Linkedin</button>
                    </div>
                </div>
                <div className="movingcursor">
                    <a href='#about' ><i className="fa-solid fa-chevron-down"></i></a>
                </div>
                <div>
                </div>
            </div>
        </div>
    )
}
export default Welcomehome;