import React, { useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Services from './components/Services/Services'
import MyWork from './components/MyWork/MyWork'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true,     // only animate once
    });
  }, []);
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Services/>
      <MyWork/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
