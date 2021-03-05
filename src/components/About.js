import React from 'react';
import Heading from './Heading'
import {a} from 'react-router-dom'
import {ProgressBar} from 'react-bootstrap'
import myResume from '../assets/resume.png'
// import myimg from '../img/myimg.jpg'



const About = () => {
    return (
        <div  id="about">
            <Heading heading="About Me" title="Hello, I am Riaz ( MERN STACK WEB DEVELOPER )" />
            <div className="container about">
            <h4 className="text-center text-uppercase font-weight-bold mb-5">my Skill's</h4>
            <div className="row first-row">
                <div className="col-lg-6 col-md-10 animation-about-1 animated delay-.7s" style={{"opacity": 0}}>
                    <div>
                        <ProgressBar striped variant="dark" now={95} />
                        <h4 className="mb-4">HTML5</h4>
                        <ProgressBar striped variant="dark" now={90} />
                        <h4 className="mb-4">CSS3</h4>
                        <ProgressBar striped variant="dark" now={80} />
                        <h4 className="mb-4">React</h4>
                        <ProgressBar striped variant="dark" now={90} />
                        <h4 className="mb-4">React Redux</h4>
                        <ProgressBar striped variant="dark" now={80} />
                        <h4 className="mb-4">Jquery</h4>
                        <ProgressBar striped variant="dark" now={95} />
                        <h4 className="mb-4">Bootstrap</h4>
                        <ProgressBar striped variant="dark" now={80} />
                        <h4 className="mb-4">Material UI</h4>
                    </div>
                </div>
                <div className="col-lg-6 col-md-10 animation-about-1 animated delay-.7s" style={{"opacity": 0}}>
                    {/* <img className='myimg img-fluid' src={myimg} alt=""/> */}
                    <div>
                        <ProgressBar striped variant="dark" now={70} />
                        <h4 className="mb-4">JAVaSCRIPT</h4>
                        <ProgressBar striped variant="dark" now={50} />
                        <h4 className="mb-4">Node Js</h4>
                        <ProgressBar striped variant="dark" now={60} />
                        <h4 className="mb-4">Express Js</h4>
                        <ProgressBar striped variant="dark" now={70} />
                        <h4 className="mb-4">Firebase</h4>
                        <ProgressBar striped variant="dark" now={75} />
                        <h4 className="mb-4">MongoDb</h4>
                        <ProgressBar striped variant="dark" now={50} />
                        <h4 className="mb-4">REST API</h4>
                        <ProgressBar striped variant="dark" now={90} />
                        <h4 className="mb-4">Git & Github</h4>
                    </div>
                </div>
            </div>
            <div className="row second-row">
                <div className="icons animation-about-2 animated delay-.7s" style={{"opacity": 0}}>
                <a href="https://www.facebook.com/bd.riaz1"><i style={{background:"#4267b2"}} className="fa-3x fab fa-facebook-f"></i></a>
                <a href="https://github.com/rkRiaz"><i style={{background:"#2b3137"}} className="fa-3x fab fa-github"></i></a>
                {/* <a href="#"><i style={{background:"#1da1f2"}} className="fa-3x fab fa-twitter"></i></a> */}
                <a href="https://www.instagram.com/mdriaz392/"><i style={{ background: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)"}} className="fa-3x fab fa-instagram"></i></a>
                </div>
                <a href={myResume} download className="cv animation-about-2 animated delay-.7s" style={{"opacity": 0}} >Download Resume</a>
            </div>
            </div>
        </div>
    );
}
export default About;
