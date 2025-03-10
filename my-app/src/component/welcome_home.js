import React from "react";
import "./welcome_home.css";
import { useNavigate } from "react-router-dom";
import { useTypewriter, Cursor } from "react-simple-typewriter"
const Welcomehome = () => {
    let navigate = useNavigate();
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

                    <p> I am a aspiring final year Computer Science and Engineering student seeking to leverage academic knowledge and technical skills in innovative projects, and gain hands-on experience in the tech industry. </p>
                </div>
                <div>
                    <div>
                        <a href="https://github.com/AtanuG123"><button class="button-71"  role="button"><i class="fa-brands fa-github"></i>Github</button></a>
                        <a href="https://www.linkedin.com/in/atanug123/"><button class="button-71" role="button"><i class="fa-brands fa-linkedin"></i>Linkedin</button></a>
                    </div>
                </div>
                <div className="movingcursor">
                    <a href="#about" ><i className="fa-solid fa-chevron-down"></i></a>
                </div>
                
            </div>
        </div>
    )
}
export default Welcomehome;