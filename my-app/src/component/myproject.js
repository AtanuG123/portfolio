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
                            <h3>Justshopy</h3>
                            <div  className="skill">
                                <h6>Made with : </h6>
                                <img src={require('../images/html.png')} alt="HTML" />
                                    <img src={require('../images/css.png')} alt="CSS" />
                                    {/* <img src={require('../images/js.png')} alt="JS" /> */}
                                    <img src={require('../images/react.png')} alt="Reactjs" />
                                    <img src={require('../images/nodejs.png')} alt="Nodejs" />
                            </div>
                            <p>
                                Justshopy is a Ecommerce shopping website . In which user can create account , search product , add product to cart and many more . It's build using React as frontend , Nodejs as backend and MongoDB for database. 
                            </p>
                            <div>

                            <a href="https://justshopy.vercel.app/" className="readmore"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                            <a href="https://github.com/AtanuG123/Justshopy" className="readmore"><i className="fa-brands fa-github"></i></a>
                            </div>
                        </div>
                        <img src={require('../images/projectphoto11.jpg')} className="projectphoto" alt="..." />


                    </div>
                    <div className="project1" >
                        <div>
                            <h3>Calculator</h3>
                            <div  className="skill">
                                <h6>Made with : </h6>
                                <img src={require('../images/html.png')} alt="HTML" />
                                    <img src={require('../images/css.png')} alt="CSS" />
                                    <img src={require('../images/js.png')} alt="JS" />
                                    
                                    
                            </div>
                            <p>
                                Scientific calculator that can perform many scitific operation . It's totally created using HTML ,CSS and JavaScript.
                            </p>
                            <div>

                            <a href="https://atanug123.github.io/calculaterandtimer/" className="readmore"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                            <a href="https://github.com/AtanuG123/calculaterandtimer" className="readmore"><i className="fa-brands fa-github"></i></a>
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