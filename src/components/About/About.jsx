import React from 'react'
import './About.css'
import profile_img from '../../assets/about_profile.svg'

const About = () => {
  return (
    <div id='about' className='about' data-aos="fade-up">
      <div className="about-title">
        <h1>About me</h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>My name is Muhammad Fadli, and I'm a physics graduate concentrated in instrumentation. I enjoy working on impactful projects especially those that benefit society, ranging from AI-based solutions to hardware-integrated systems. Challenging myself by working on new things is the best way for me to learn new things</p>
            <p>Over the past few years, I have done projects involving Python, MATLAB, C/C++, SQL, and deep learning frameworks like TensorFlow and PyTorch, along with practical skills in Arduino and LabVIEW. I also did some projects using manim for math animations </p>
          </div>
        </div>
      </div>
      {/* <div className="about-achievements">
        <div className="about-achievement">
          <h1>10+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>90+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div> */}
    </div>
  )
}

export default About
