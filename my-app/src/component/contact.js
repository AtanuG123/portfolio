import "./contact.css";
// import Alert from alert
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Alert from "./alert";
import Alert1 from "./alert";
const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_f0lo43n', 'template_685t76p', form.current, 'qfQvmS9EbFjUvemNh')
            .then((result) => {
                console.log(result.text);
                // <Alert1/>
                alert("Your message has been sent");
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className="back" id="contacts" >
            
            <div className="content" id="newcontact">
                
                <div className="heading1">
                    <h3 >Get In Touch</h3>
                </div>
                <div className="contact">

                <form className="forfrom" ref={form} onSubmit={sendEmail}>
                    <div className="input">
                        <input required type="text" placeholder="Name" className="form-control1" name="user_name" id="floatingInput" />
                    </div>

                    <div className="input">
                        <input required type="email" placeholder="Email" className="form-control1" name="user_email" id="email" />
                    </div>

                    <div className="input">
                        <textarea required className="form-control1" placeholder="Leave a comment here" name="message" id="floatingTextarea2" ></textarea>
                    </div>

                    <div className="sendbutton">
                        
                    <button type="email" className=" sendbtn" value="send" > Submit </button>
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

                <span><a className="uparrow" href='#welcome_home' ><i class="fa-solid fa-angle-up"></i></a></span>

            </div>
        </div>
    )
}
export default Contact;