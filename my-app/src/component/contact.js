import "./contact.css";
// import Alert from alert
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingSpinner from "./Loader";
const Contact = () => {
    const [isloading, setisloading] = useState(false);
    const form = useRef();
    const madesubmit = () => {
        toast.success("message sent succesfully", {
          autoClose: 1500,
          theme: "colored",
        });
    }
    const notfound = () => {
        toast.info("Error occurred", {
          autoClose: 1500,
          theme: "colored",
          position:"top-right"
        });
      };

  
    const sendEmail = (e) => {
        setisloading(true);
        e.preventDefault();
        
        emailjs.sendForm('service_f0lo43n', 'template_685t76p', form.current, '58oZ9ibqxclPO-LFI')
        .then((result) => {
            
            
            setisloading(false);
            document.getElementById("floatingInput").value=null;
            document.getElementById("email").value=null;
            document.getElementById("floatingTextarea2").value=null;
            madesubmit();
                
            },
                (error) => {
                    setisloading(false);
                    notfound();

                }
            );
    };
    return (
        <>
            <div className="back" id="contacts" >
               
                <div className="content" id="newcontact">

                    <div className="heading1">
                        <h3 >Get In Touch</h3>
                    </div>
                    <div className="contact">

                        <form className="forfrom" ref={form} onSubmit={sendEmail}>
                            <div className="input">
                                <input required type="text"  placeholder="Name" className="form-control1" name="user_name" id="floatingInput" />
                            </div>

                            <div className="input">
                                <input required type="email"  placeholder="Email" className="form-control1" name="user_email" id="email" />
                            </div>

                            <div className="input">
                                <textarea required className="form-control1" placeholder="Leave a comment here" name="message" id="floatingTextarea2" ></textarea>
                            </div>


                            <div className="sendbutton">
                                <div style={{display:"flex"}}>

                                <button type="email" className=" sendbtn" value="send"  > Submit </button>
                                {isloading ? <LoadingSpinner /> : null}
                                {/* <LoadingSpinner/> */}
                                </div>
                            </div>
                        </form>
                        <div>
                            <div>
                                <h5>Address</h5>
                                <p>Ghoshpara, Rajendrapur , Naihati , North 24 PGS, 743166</p>
                            </div>
                            <div>
                                <h5>Email</h5>
                                <p>atanu2004ghosh@gmail.com</p>
                            </div>
                            <div>
                                <h5>Phone</h5>
                                <p>+91 7439252297</p>
                            </div>
                        </div>
                    </div>

                    <div style={{ marginTop: "15px" }}>
                        @2023 All rights are reserved
                    </div>

                    {/* <span><a className="uparrow" href='#welcome_home' ><i class="fa-solid fa-angle-up"></i></a></span> */}

                </div>
            </div>
            <ToastContainer/>
        </>
    )
}
export default Contact;