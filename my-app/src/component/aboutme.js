import "./aboutme.css";
const Aboutme = () => {
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('Atanu Ghosh Resume.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Atanu Ghosh Resume.pdf';
                alink.click();
            })
        })
    }
    return (
        <div className="back" id="about">
            <div className="content" id="aboutid">


                <div className="heading1">

                    <h3>About me</h3>
                </div>
                <div className="description">
                    <div className="description_details">
                        <h3>I'm <span>Atanu Ghosh</span> , a CSE Student</h3>
                        <p>
                         
                            I am a final-year student at the B. P. Poddar Institute of Management and Technology, pursuing B Tech. degree in CSE.
                            I have knowledge of C, python & Java . I also familer to web developement , can implement frontend and backend using React ,Nodejs and other frameworks.</p>
                        <div className="personaldetails">
                            <div>

                                <div>
                                    <i class="fa-regular fa-envelope"></i>
                                    <h6 >atanu2004ghosh@gmail.com</h6>
                                </div>
                                <div>
                                    <i class="fa-solid fa-phone"></i>
                                    <h6>+91 7439252297</h6>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <i class="fa-regular fa-calendar"></i>
                                    <h6>Born on 31 Mar,2004</h6>
                                </div>
                                <div>
                                    <i class="fa-solid fa-house"></i>
                                    <h6>Naihati ,WB ,743166</h6>
                                </div>
                            </div>
                            <div className="skill">
                                <div>
                                    <h4>Skill:</h4>
                                    <div>

                                    <img src={require('../images/java.png')} alt="java" />
                                    <img src={require('../images/python.png')} alt="pyhton" />
                                    {/* <img src={require('../images/c.png')} alt="c" /> */}
                                    <img src={require('../images/html.png')} alt="HTML" />
                                    <img src={require('../images/css.png')} alt="CSS" />
                                    <img src={require('../images/js.png')} alt="JS" />
                                    <img src={require('../images/react.png')} alt="Reactjs" />
                                    <img src={require('../images/nodejs.png')} alt="Nodejs" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div>

                                    <a onClick={onButtonClick} target="_blank"><button class="button-59" role="button">
                                        Resume<i class="fa-solid fa-download" ></i></button> </a>
                                </div>
                            </div>
                        </div>

                        {/* <div><a onClick={onButtonClick} target="_blank"><button class="button-71" role="button">Download CV</button> </a></div> */}
                    </div>
                    <div className="education">
                        <div className="educationheading">
                            <i class="fa-solid fa-graduation-cap"></i>
                            <h3>Education</h3>
                        </div>
                        <div>
                            <i class="fa-solid fa-circle"></i>
                            <div>
                                <h5>B. P. poddar Institute Of Management And Technology</h5>
                                <p>Bachelor of Technology</p>
                                <h6>2021 - 2025</h6>
                            </div>
                        </div>
                        <div>
                            <i class="fa-solid fa-circle"></i>
                            <div>

                                <h5>Naihati Mahendra High School</h5>
                                <p>Higher Secondary</p>
                                <h6>2019 - 2021</h6>
                            </div>
                        </div>
                        <div>
                            <i class="fa-solid fa-circle"></i>
                            <div>

                                <h5>Naihati Mahendra High School</h5>
                                <p>Secondary</p>
                                <h6>2019</h6>
                            </div>
                        </div>


                    </div>
                </div>
            </div>


        </div>
    )
}
export default Aboutme;