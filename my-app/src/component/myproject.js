import "./myproject.css";
const Myprojects = () => {
    return (
        <div className="back" id="projects">

            <div className="content">

                <div className=" heading1" id="projecthead">
                    <h3 >My Projects</h3>
                </div>
                <div className="projects">

                    <div className="project1" >
                        <div>
                            <h4>Justshopy</h4>
                            <div  className="skill">
                                <h6>Made with : </h6>
                                <img src={require('../images/html.png')} alt="HTML" />
                                    <img src={require('../images/css.png')} alt="CSS" />
                                    {/* <img src={require('../images/js.png')} alt="JS" /> */}
                                    <img src={require('../images/react.png')} alt="Reactjs" />
                                    <img src={require('../images/nodejs.png')} alt="Nodejs" />
                            </div>
                            <p>
                                Reverse Job board for companies looking to hire developers in Australia. Filter by experience, location and keyboards. Companies can pay a monthly fee to be able to message developers on the site and view their information.
                            </p>
                            <div>

                            <a href="https://justshopy.vercel.app/" className="readmore"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                            <a href="https://justshopy.vercel.app/" className="readmore"><i className="fa-brands fa-github"></i></a>
                            </div>
                        </div>
                        <img src={require('../images/projectphoto1.png')} className="projectphoto" alt="..." />


                    </div>
                    <div className="project1" >
                        <div>
                            <h4>Calculator</h4>
                            <div  className="skill">
                                <h6>Made with : </h6>
                                <img src={require('../images/html.png')} alt="HTML" />
                                    <img src={require('../images/css.png')} alt="CSS" />
                                    <img src={require('../images/js.png')} alt="JS" />
                                    
                                    
                            </div>
                            <p>
                                Reverse Job board for companies looking to hire developers in Australia. Filter by experience, location and keyboards. Companies can pay a monthly fee to be able to message developers on the site and view their information.
                            </p>
                            <div>

                            <a href="https://justshopy.vercel.app/" className="readmore"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                            <a href="https://justshopy.vercel.app/" className="readmore"><i className="fa-brands fa-github"></i></a>
                            </div>
                        </div>
                        <img src={require('../images/calculator.png')} className="projectphoto" alt="..." />



                    </div>
                    {/* <div className="project1" >
                        <img src={require('../images/myprojectphoto1.jpg')} className="projectphoto" alt="..." />
                        <div className="descriptionproject">
                        <div>
                                <a href="https://atanug123.github.io/restaurantbyatanu.github.io/" target="_blank" className="readmore"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                                <a href="https://github.com/AtanuG123/restaurantbyatanu.github.io" className="readmore" target="_blank"><i className="fa-brands fa-github"></i></a>

                            </div>
                            <p style={{margin:"7px"}}>Frontent Website</p>
                        </div> */}

                    {/* </div> */}
                </div>

            </div>
        </div>
    )
}
export default Myprojects;