import './Contact.css';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import candy from'../../assets/candy1.svg'
import iconlinked from '../../assets/iconlinked.png'

const Contact = () =>{
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_eqvoikh', 'template_z6rcspd', form.current, 'R0laHzufbWjKs_NxS' )
            .then(() => {
                console.log('SUCCESS!');
                e.target.reset();
                alert('Email Sent!');
            }
                , (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <>
            <section id="contactpage">
                <div id="contact">
                    <h1 className="contactTitle">Contact Me</h1>
                    <span className="contactDesc">Please file out the form below to discuss any work </span>
                    <form className="contactForm" ref={form} onSubmit={sendEmail} >
                        <input type="text" className="Name" placeholder="Your Name" name='your_name' />
                        <input type="email" className="Email" placeholder="Your Email" name='your_email' />
                        <textarea className="msg" name="message" rows="5" placeholder="Your Message" ></textarea>
                        <button type="Submit" value="Send" className="submitBtn">Submit</button>
                        <div className="links">
                            <a className="folllow" target="_blank" href="https://www.linkedin.com/in/rahaf-hamoda-925352258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                                <img src={candy} className="candy" /> <p>Follow me</p>  <img src={iconlinked} alt="linked" className="link" />
                            </a>
                         </div>
                    </form>
                </div>
            </section>
        </>
    );
}
export default Contact;