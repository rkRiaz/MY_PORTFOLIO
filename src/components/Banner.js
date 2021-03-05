import React from "react"
import {a} from 'react-router-dom'




const LandingPage1 = () => {

   window.onscroll = function() {scrollFunction()};
   let scrollFunction = () => {
     if(document.documentElement.scrollTop > 200) document.querySelector("#scrollBtn").style.display="block"
     else document.querySelector("#scrollBtn").style.display="none"
  }
  
  let topHandler = () => {
    document.documentElement.scrollTop = 0
  }

  return (
    <div id="home">
      <div className='banner'>
      <i className="fa-2x fas fa-chevron-up " id="scrollBtn" onClick={topHandler}></i>
        <div className="home-nav">
          <div className="container">
            <div className="row">
                <div className="home-nav-content-1 animated fadeInLeft">
                  <a href="#home" >Home</a>
                  <a href="#about">About</a>
                  <a href="#portfolio">Portfolio</a>
                  <a href="#contact">Contact</a>
                </div>
  
                <div className="home-nav-content-2 ml-auto animated fadeInRight">
                  <h1>Ria<span>z's</span></h1>
                  <h4>Portfolio</h4>
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
    </div>
  )
}

export default LandingPage1
