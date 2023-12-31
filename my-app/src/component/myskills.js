import "./myskills.css"
const Myskills = () => {
    return (
        <div className="back" id="myskills" >
            <hr></hr>
            <div className="content">
            <div >
                    <h3 className="backcontent">SKILLS</h3>
                </div>
                <div className="heading1">
                    <h3>My skills </h3>
                </div>
                <div className="skillmain" id="idskillmain">

                    <div id="skilldiv" >
                        <div className="laptopicon"><i className="fa-solid fa-laptop"></i>
                        </div>
                        <div>
                            <h3 className="skillmain_content_head">
                                Web designing
                            </h3>
                            <p>
                                I am passoniate to designing website using HTML,CSS,JS .
                                I have also knowledge of React.js
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, soluta? Fuga dignissimos placeat aperiam qui eveniet ullam eos vitae earum minima omnis, ipsam natus ex magnam. In voluptas harum voluptate aspernatur.
                            </p>
                            {/* <h6>2 projects</h6> */}
                        </div>
                    </div>
                    <div id="skilldiv2">
                        <div className="laptopicon"><i class="fa-solid fa-code"></i>
                        </div>
                        <div>
                            <h3 className="skillmain_content_head">
                                Programmimg
                            </h3>
                            <p>
                                I love coding ,problem solving. I have also Knowlwdge of Python,Now learning java.
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius,  placeat aperiam qui eveniet ullam eos vitae earum minima omnis, ipsam natus ex magnam. In voluptas harum voluptate aspernatur. Animi dignissimos possimus atque!
                            </p>
                            {/* <h6>2 * at Codechef</h6> */}
                        </div>
                    </div>

                </div>
                <div className="knowledgelogo">
                    <div>
                        <div className="logoandprogress">
                            <div className="forimg">
                                <img src={require('../images/python.png')} alt="logo" /><p>Python</p>
                            </div>
                            <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"style={{width:" 90%",margin:"18px 16px"}} >
                                <div class="progress-bar progress-bar" style={{width:" 70%",fontSize:"18px",backgroundColor:"#1d8383"}}>70%</div>
                            </div>
                        </div>
                        <div className="logoandprogress">
                            <div className="forimg">
                                <img src={require('../images/java.png')} alt="logo" /><p>java</p>
                            </div>
                            <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"style={{width:" 90%",margin:"18px 16px"}} >
                                <div class="progress-bar progress-bar" style={{width:" 30%",fontSize:"18px",backgroundColor:"#1d8383"}}>30%</div>
                            </div>
                        </div>
                        <div className="logoandprogress">
                            <div className="forimg">
                                <img src={require('../images/c.png')} alt="logo" /><p>C</p>
                            </div>
                            <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"style={{width:" 90%",margin:"18px 16px"}} >
                                <div class="progress-bar progress-bar" style={{width:" 60%",fontSize:"18px",backgroundColor:"#1d8383"}}>60%</div>
                            </div>
                        </div>
                        <div className="logoandprogress">
                            <div className="forimg">
                                <img src={require('../images/html.png')} alt="logo" /><p>HTML</p>
                            </div>
                            <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"style={{width:" 90%",margin:"18px 16px"}} >
                                <div class="progress-bar progress-bar" style={{width:" 75%",fontSize:"18px",backgroundColor:"#1d8383"}}>75%</div>
                            </div>
                        </div>

                    </div>
                    <div>
                        <div className="logoandprogress">
                            <div className="forimg">
                                <img src={require('../images/css.png')} alt="logo" /><p>CSS</p>
                            </div>
                            <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"style={{width:" 90%",margin:"18px 16px"}} >
                                <div class="progress-bar progress-bar" style={{width:" 80%",fontSize:"18px",backgroundColor:"#1d8383"}}>80%</div>
                            </div>
                        </div>
                        <div className="logoandprogress">
                            <div className="forimg">
                                <img src={require('../images/js.png')} alt="logo" /><p>Javascript</p>
                            </div>
                            <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"style={{width:" 90%",margin:"18px 16px"}} >
                                <div class="progress-bar progress-bar" style={{width:" 40%",fontSize:"18px",backgroundColor:"#1d8383"}}>40%</div>
                            </div>
                        </div>
                        <div className="logoandprogress">
                            <div className="forimg">
                                <img src={require('../images/react.png')} alt="logo" /><p>Reactjs</p>
                            </div>
                            <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"style={{width:" 90%",margin:"18px 16px"}} >
                                <div class="progress-bar progress-bar" style={{width:" 45%",fontSize:"18px",backgroundColor:"#1d8383"}}>45%</div>
                            </div>
                        </div>
                        <div className="logoandprogress">
                            <div className="forimg">
                                <img src={require('../images/nodejs.png')} alt="logo" /><p>Nodejs</p>
                            </div>
                            <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"style={{width:" 90%",margin:"18px 16px"}} >
                                <div class="progress-bar progress-bar" style={{width:" 45%",fontSize:"18px",backgroundColor:"#1d8383"}}>40%</div>
                            </div>
                        </div>
                        {/* <div><img src={require('./profile.jpg')} alt="logo" /></div> */}

                    </div>
                </div>
          
            </div>
        </div>
    )
}
export default Myskills; 