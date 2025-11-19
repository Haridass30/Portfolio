import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="greeting">Hi, I'm</span>
              <span className="name">Haridass G</span>
            </h1>
            <h2 className="hero-subtitle">Cloud Infrastructure & DevOps Engineer</h2>
            <p className="hero-description">
              With 1.3+ years of hands-on experience designing, deploying, and scaling cloud-based systems. 
              I specialize in <strong>AWS, DevOps automations, CI/CD, Kubernetes, Docker, monitoring, and performance optimization</strong>.
              I build <strong>scalable, secure, and highly available</strong> infrastructures that deliver strong performance and cost efficiency.
            </p>
            <div className="hero-buttons">
              <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} 
                      className="btn btn-primary">
                Get In Touch
              </button>
              <button onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })} 
                      className="btn btn-secondary">
                View My Work
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

