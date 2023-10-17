import "./home.css";
import Navside from "./navside";
import Welcomehome from "./welcome_home";
import Aboutme from "./aboutme";
import Myskills from "./myskills";
import Contact from "./contact";
import Myprojects from "./myproject";
import Navber from "./navbar";


export default function Home(){
    
    
    return (
        <div className="home">
            <div >
                <Navside/>
                <Navber/>
            </div>
            <div className="main" >
                <Welcomehome/>
                <Aboutme/>
                <Myskills/>
                <Myprojects/>
                <Contact/>
            </div>
        </div>
    )
}



