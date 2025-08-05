import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import resume_pdf from '../../assets/Muhammad-Fadli_Resume.pdf';


const Hero = () => {
  return (
    <div id='home' className='hero' data-aos="fade-up">
      <img src={profile_img} alt="" />
      <div className="hero-content">
        <span>Hello!</span>
        <h1><span>I'm Fadli,</span> an instrumentation physics graduate </h1>
        <p>I enjoy doing a wide range of stuff from building smart systems with machine learning and IoT to manim animations. Feel free to contact me! </p>
        <div className="hero-action">
          <AnchorLink className='anchor-link' offset={50} href='#contact'><div className="hero-connect">Connect with me</div></AnchorLink>
          <a href={resume_pdf} target='_blank' rel='noopener noreferrer'><div className="hero-resume">My resume</div></a>
        </div>
      </div>
    </div>
  )
}

export default Hero
