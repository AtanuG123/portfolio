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
                    <h3 >My creative Projects</h3>
                </div>
                <div className="projects">

                    <div className="project1" >
                        <img src={require('./projectphoto1.png')} className="projectphoto" alt="..." />
                        <div className="descriptionproject">
                            <p className="">Ecommerce site</p>
                            <p className="">This is full stack Ecommerce website, where MongoDB used as database</p>
                            <a href="https://justshopy.vercel.app/" className="readmore">view project</a>
                        </div>

                    </div>
                    <div className="project2" >
                        <img src={require('./myprojectphoto1.jpg')} className="projectphoto" alt="..." />
                        <div className="descriptionproject">
                            <p className="">Frontent Website</p>
                            <p className="">this is a basic website made by html and css , nothing more than that</p>
                            <a href="https://atanug123.github.io/restaurantbyatanu.github.io/" target="_blank" className="readmore">view project</a>
                        </div>
                        
                        
                    </div>
                    <div className="project1" >
                        <img src={require('./myprojectphoto1.jpg')} className="projectphoto" alt="..." />
                        <div className="descriptionproject">
                            <p className="">.........</p> 
                            <p className="">porject in Process</p>
                            <a href="/" className="readmore">view project</a>
                        </div>
                        
                    </div>
                </div>
               
            </div>
        </div>
    )
}
export default Myprojects;