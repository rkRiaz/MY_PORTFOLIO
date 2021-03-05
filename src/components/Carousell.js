import React from 'react';
import {Carousel} from 'react-bootstrap'

const Carousell = () => {




    return (
        <div className="my-5 animation-services-1 animated delay-.7s" style={{"opacity": 0}}>
                    <h3 className="text-center font-weight-bold" style={{"color": "#353535"}}>Testimonial</h3> 
                     <Carousel>
                        <Carousel.Item>   
                            <div className="testimonial">                               
                                <p className="quote"> He is newbie in this sector. But he is so attentve in his work.</p>
                                <p className="client-name mb-5">Khairul Islam, ComputerPoint</p>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="testimonial">                               
                                <p className="quote"> He is newbie in this sector. But he is so attentve in his work.</p>
                                <p className="client-name mb-5">Khairul Islam, ComputerPoint</p>
                            </div>
                        
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="testimonial">              
                                <p className="quote"> He is newbie in this sector. But he is so attentve in his work.</p>
                                <p className="client-name mb-5">Khairul Islam, ComputerPoint</p>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                    
        </div>
    );
}

export default Carousell;
