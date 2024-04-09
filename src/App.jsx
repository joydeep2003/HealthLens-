import './App.css';
import React from "react";
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Testimonials from './Components/Testimonial';
import Footer from './Components/Footer';

// import Carousel from './Components/Carousel';

function App() {
  return (
      <div className="w-full h-screen bg-no-repeat bg-cover" style={{ backgroundColor: 'rgb(11 7 41)' }}>
      <Navbar/>
      <Hero/>
      <About/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}

export default App;