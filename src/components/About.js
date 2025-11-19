import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate Cloud Infrastructure & DevOps Engineer with expertise in building and maintaining 
              scalable cloud solutions. My objective is to leverage my expertise in <strong>AWS, DevOps, Cloud Infra, CI/CD, and Observability</strong> 
              to build scalable, secure, and high-performing systems — while contributing to organizational growth 
              through automation and cloud optimization.
            </p>
            <div className="contact-info">
              <a href="tel:8525876381" className="contact-item">
                <i className="fas fa-phone"></i>
                <span>8525876381</span>
              </a>
              <a href="mailto:haridass3014@gmail.com" className="contact-item">
                <i className="fas fa-envelope"></i>
                <span>haridass3014@gmail.com</span>
              </a>
              <a href="https://linkedin.com/in/hari-dass-25bb44345" target="_blank" rel="noopener noreferrer" className="contact-item">
                <i className="fab fa-linkedin"></i>
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/haridass3012" target="_blank" rel="noopener noreferrer" className="contact-item">
                <i className="fab fa-github"></i>
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

