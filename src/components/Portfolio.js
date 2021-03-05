import React, { Component } from "react"
import {Link} from "react-router-dom"
import Heading from "./Heading"
import "./Portfolio.css"

export default class Portfolio extends Component {
  render() {
    return (
      <div id='portfolio'>
        <Heading heading='My Works' title='All Projects link will be available a few days later'/>
        <div className='myportfolio'>
          <div className='container'>

            <div className='grid-container'>
              <a href="https://hospital-management-9587.herokuapp.com" target="_blank" className="card grid-item" >
                <div className="card-body">
                  <h4>Hospital Management System</h4>
                  <p className="card-text">Front End</p>
                  <p className="tools"> React || Redux || Material Ui</p>
                </div>
              </a>
              <a href="https://ecommerce-demoo.herokuapp.com/" target="_blank" className="card grid-item">
                <div className="card-body">
                  <h4>Ecommerce Demo One</h4>
                  <p className="card-text">Full Stack, Admin Panel, Customer Dashboard, Interactive Responsive Design</p>
                  <p className="tools">React || Redux || Bootstrap || Node-Js (Express-js) || MongoDb</p>
                </div>
              </a>
              <a href="https://ecommerce-two.herokuapp.com/" target="_blank" className="card grid-item">
                <div className="card-body">
                  <h4>Ecommerce Demo Two</h4>
                  <p className="card-text">Full Stack, Admin Panel, Customer Dashboard, Interactive Responsive Design</p>
                  <p className="tools">React || Redux || Bootstrap || Node-Js (Express-js) || MongoDb</p>
                </div>
              </a>
              <a href="#" className="card grid-item" target="_blank">
                <div className="card-body">
                  <h4>Whatsapp Clone Firebase</h4>
                  <p className="card-text">Full Stack</p>
                  <p className="tools">Firebase || React || Context Api</p>
                </div>
              </a>
            </div>



            <Link to="#" className="d-flex justify-content-center more-btn btn btn-secondary my-3">More</Link>
        
     
        </div>
      </div>
      </div>
    )
  }
}
