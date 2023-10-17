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
            <hr></hr>
            <div className="content">
                <div >
                    <h3 className="backcontent">CONTACTS</h3>
                </div>
                <div className="heading1">
                    <h3 >Get In Touch</h3>
                </div>

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

                    <button type="email" className="btn btn-info btn-lg sendbtn" value="send" > send massage </button>

                </form>


                <div style={{ marginTop: "15px" }}>
                    @2023 All rights are reserved
                </div>


            </div>
        </div>
    )
}
export default Contact;