import "./myproject.css";
const Myprojects = () => {
    return (
        <div className="back" id="projects">
            <hr></hr>
            <div className="content">
                <div >
                    <h3 className="backcontent">PROJECTS</h3>
                </div>
                <div className=" heading1" id="projecthead">
                    <h3 >My Projects</h3>
                </div>
                <div className="projects">

                    <div className="project1" >
                        <img src={require('../images/projectphoto1.png')} className="projectphoto" alt="..." />
                        <div className="descriptionproject">
                            <div>
                                <a href="https://justshopy.vercel.app/" className="readmore"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                                <a href="https://justshopy.vercel.app/" className="readmore"><i className="fa-brands fa-github"></i></a>

                            </div>
                            <p style={{margin:"7px"}}>Ecommerce site</p>
                        </div>

                    </div>
                    <div className="project2" >
                        <img src={require('../images/myprojectphoto1.jpg')} className="projectphoto" alt="..." />
                        <div className="descriptionproject">
                         <div>
                                <a href="https://atanug123.github.io/restaurantbyatanu.github.io/" target="_blank" className="readmore"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                                <a href="https://github.com/AtanuG123/restaurantbyatanu.github.io" className="readmore" target="_blank"><i className="fa-brands fa-github"></i></a>

                            </div>
                            <p style={{margin:"7px"}}>Frontent Website</p>
                            </div>

                    </div>
                    <div className="project1" >
                        <img src={require('../images/myprojectphoto1.jpg')} className="projectphoto" alt="..." />
                        <div className="descriptionproject">
                        <div>
                                <a href="https://atanug123.github.io/restaurantbyatanu.github.io/" target="_blank" className="readmore"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                                <a href="https://github.com/AtanuG123/restaurantbyatanu.github.io" className="readmore" target="_blank"><i className="fa-brands fa-github"></i></a>

                            </div>
                            <p style={{margin:"7px"}}>Frontent Website</p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}
export default Myprojects;