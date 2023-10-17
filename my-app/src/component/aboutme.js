import "./aboutme.css";
const Aboutme = () => {
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('Doc5.pdf').then(response => {
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
                    </div>
                    <div className="cvpart">
                       
                        <div> <p id="email">Email : atanu31ghosh@gmail.com</p></div>
                        <div><p>Age : 20</p></div>
                        <div><p>From : Kolkata , West Bengal</p> </div>
                        <div><a onClick={onButtonClick} target="_blank"> <button> Download CV</button> </a></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Aboutme;