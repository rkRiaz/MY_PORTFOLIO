import React from 'react';
import Heading from './Heading'
import {a} from 'react-router-dom'
// import {Form} from 'react-bootstrap'
import myimg from '../img/myimg.jpg'

const Contact = () => {
    return (
        <>
        <div id="contact">
             <Heading heading="Contact Me" title="Feel free to contact with me" />
             {/* <div className="contactt">
                <div className="container">
                    <h3 className="text-center text-white" style={{"fontWeight": 700}}>Submit your talking</h3>
                    <Form className="animation-conatct-1 animated delay-.7s" style={{"opacity": 0}}>
                        <Form.Group className="my-4" controlId="formGroupPassword">
                            <Form.Control type="text" placeholder="Your Name" />
                        </Form.Group>
                        <Form.Group className="my-4" controlId="formGroupEmail">
                            <Form.Control type="email" placeholder="Your Email" />
                        </Form.Group>
                        <Form.Group className="my-4" controlId="exampleForm.ControlTextarea1">
                            <Form.Control placeholder="Enter Your Message" as="textarea" rows="10" />
                        </Form.Group>
                        <div className="contact-btn">Send Message</div>
                    </Form>
                </div>
            </div>  */}
            {/* google map */}
            <iframe title="title" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1293.88606586118!2d91.18162716828037!3d23.472637500269684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37547f2d32f8e5c5%3A0xd133a2d34a6a3031!2zMjPCsDI4JzIyLjciTiA5McKwMTAnNTMuOSJF!5e0!3m2!1sen!2sbd!4v1605105762858!5m2!1sen!2sbd" width="100%" height="450" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            {/* google map */}
            <div className="footer text-white">
                <div className="container">
                   <a href="#home"><div className="top-arrow-icon"><i className="fa-2x fas fa-chevron-up"></i></div></a> 
                    <div className="row">
                        <div className="text-center m-auto animation-conatct-2 animated delay-.7s" style={{"opacity": 0}}>
                            <a href="https://www.facebook.com/bd.riaz1" className="text-decoration-none">
                            <img src={myimg} alt="" className="footerimg"/>
                            <h4>Rohoul Kuddus Riaz</h4>
                            </a>
                        </div>
                        <div className="footer-social m-auto mt-5 animation-conatct-3 animated delay-.7s" style={{"opacity": 0}}>
                            <h4>Contact</h4>
                            <p>
                                <li><span>Address: </span> 0299-00/Rahmat Vhaban, Islampur, Judge-Court Road, Cumilla, Bangladesh</li>
                                <li><span>Email: </span> mdriaz9587@gmail.com </li>
                                <li><span>Phone: </span> +880-1684-680383 </li>
                            </p>
                            <div className="nav-icons">
                                <a href="https://www.facebook.com/bd.riaz1"><i className="fab fa-facebook"></i></a>
                                <a href="https://github.com/rkRiaz"><i className="fab fa-github"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="https://www.instagram.com/mdriaz392/"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>


    <div className="footer-end animation-conatct-4 animated delay-.7s" style={{"opacity": 0}}>
            <p>Riaz's Website &copy; 2020 || All rights reserved <br/>
            <a href="https://www.facebook.com/bd.riaz1">Developer Information</a></p> 
    </div>
    </>
    );
}

export default Contact;
