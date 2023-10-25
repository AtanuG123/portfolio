import "./aboutme.css";
const Aboutme = () => {
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
        <div className="back" id="about">
            <div className="content" id="aboutid">

                <div >
                    <h3 className="backcontent">ABOUT ME</h3>
                </div>
                <div className="heading1">
                    <h3>Know me more</h3>
                </div>
                <div className="description">
                    <div  className="description_details">
                        <h3>I'm <span>Atanu Ghosh</span> , a CSE Student</h3>
                        <p>Currently I'm persuring B tech degreee in computer science and engineering from B.P. Poddar institute of management and Technology,Kolkata. I have knowledge of C, python & Java.I also familer to web developement , can implement frontend and backend using React ,Nodejs and other frameworks.  </p>
                        <div className="personaldetails">
                            <div>
                                <p>Email : </p>
                                <a>atanu2004ghosh@gmail.com</a>
                            </div>
                            <div>
                                <p>Mob no : </p>
                                <a>7439252247</a>
                            </div>
                        </div>
                        <div><a onClick={onButtonClick} target="_blank"> <button> Download CV</button> </a></div>
                    </div>
                    <div className="aboutimg">
                        <img src={require("../images/myimg.jpg")}></img>
                        </div>
                </div>
            </div>
            {/* <span><a className="uparrow" href='#welcome_home' ><i class="fa-solid fa-angle-up"></i></a></span> */}

        </div>
    )
}
export default Aboutme;