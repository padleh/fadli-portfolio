import React, { useState } from 'react';
import './MyWork.css';
import mywork_data from '../../assets/mywork_data';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const MyWork = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const totalProjects = mywork_data.length;

  const nextProject = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % totalProjects);
  };

  const prevProject = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + totalProjects) % totalProjects);
  };

  const { w_name, w_time, w_role, w_desc, w_link, w_cont, w_img } = mywork_data[currentIndex];

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      position: 'relative'
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    })
  };

  return (
    <div id="work" className="mywork" data-aos="fade-up">
      <div className="mywork-title">
        <h1>My Work</h1>
      </div>

      <div className="work-container">
        <div className="work-footer">
          <button onClick={prevProject}><FaArrowLeft /></button>
          <span>{currentIndex + 1} / {totalProjects}</span>
          <button onClick={nextProject}><FaArrowRight /></button>
        </div>

        <div className="work-slider-wrapper">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4 }}
              className="work-slide"
            >
              <div className="work-header">
                <h2>{w_name}</h2>
                <span className="work-time">{w_time}</span>
              </div>

              <div className="work-content">
                <div className="work-images">
                  {w_img.map((img, index) => (
                    <img key={index} src={img} alt={`Project Visual ${index + 1}`} />
                  ))}
                </div>

                <div className="work-info">
                  <span>Role:</span>
                  <div className="work-role">{w_role}</div>

                  <span>Project Description:</span>
                  <div className="work-desc">{w_desc}</div>

                  <span>My Contributions:</span>
                  <div className="work-cont">
                    <ol>
                      {w_cont.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ol>
                  </div>

                  <a className="work-viewproject" href={w_link} target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default MyWork;