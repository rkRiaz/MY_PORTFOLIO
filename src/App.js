import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css'
import 'waypoints/src/waypoint'
import Banner from './components/Banner'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

function App() {
  return (
      <div>
        <Banner />
        <About />
        <Portfolio />
        <Services />
        <Contact />
      </div>
  );
}

export default App;
