import React from 'react';
import Heading from './Heading'
import {Link} from 'react-router-dom'
// import Carousell from './Carousell'

const Services = () => {

    return (
        <div className="services" id="services">
            <Heading heading="What Can I Do!" title="Develop web applications" />
                <section className="skills">
                    <div className="container">
                        <div className="row text-center">
                        <div className="box col-lg-4 col-md-4 col-12 animation-services-1 animated delay-.7s" style={{"opacity": 0}}>
                            <Link className="links" href="#"><i className="fa-8x far fa-file-code"></i>
                            <h3 className="py-2" style={{"fontWeight": 550}}>Front End Development</h3>
                            <p>I develop the front end using React</p>
                            </Link>
                        </div>
                        <div className="box col-lg-4 col-md-4 col-12 animation-services-1 animated delay-.7s" style={{"opacity": 0}}>
                            <Link className="links" href="#"><i className="fa-8x fas fa-cogs"></i>
                            <h3 className="py-2" style={{"fontWeight": 550}}>Back End Development</h3>
                            <p>NodeJs(ExpressJs), MongoDb, Firebase is my back-end technology</p>
                            {/* <p>Development of back-end is the heart of websites. I am also skilled with the back-end technologies</p> */}
                            </Link>
                        </div>
                        <div className="box col-lg-4 col-md-4 col-12 animation-services-1 animated delay-.7s" style={{"opacity": 0}}>
                            <Link className="links" href="#"><i className="fa-8x fas fa-paint-brush"></i>
                            <h3 className="py-2" style={{"fontWeight": 550}}>Basic Graphics Design</h3>
                            <p>Also working with basic graphic designs.</p>
                            </Link>
                        </div> 
                        
                        </div>
                    </div>
                    {/* <Carousell /> */}
                </section>
 
                <div className="background">
                    
                </div>

        </div>

    );
}

export default Services;
