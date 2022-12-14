import React from 'react'
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { themeContext } from '../../Context';
import { useContext } from 'react';
import './Contact.css'

const Contact = () => {

    const them = useContext(themeContext);
    const darkMode = them.state.darkMode;

    const form = useRef();

    const [done, setdone] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_t0wb3vj', 'template_ov6trts', form.current, 'RHlKtZyeJURJ-uGwZ')
            .then((result) => {
                console.log(result.text);
                setdone(true)
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="contact-form">
            <div className="c-left">
                <div className="awesome">
                    <span style={{ color: darkMode ? 'white' : '' }} >Get in touch</span>
                    <span>Contact me</span>
                    <div className="blur s-blur" style={{ background: "#ABF1FF94" }}></div>
                </div>
            </div>
            <div className="c-right">
                <from ref={form} onSubmit={sendEmail}>
                    <input type="text" name="use_name" className="user" placeholder="Name" />
                    <input type="email" name="use_email" className="user" placeholder="Email" />
                    <textarea name="massage" className="user" placeholder="Message"></textarea>
                    {/* <button className="button c-button">Send</button> */}
                    <input type="submit" value="Send" className="button" />
                    <span>{done && "thanks for contactin me!"}</span>
                    <div
                        className="blur c-blur"
                        style={{ background: "var(--purple )" }}
                    ></div>
                </from>
            </div>
        </div>
    )
}

export default Contact
