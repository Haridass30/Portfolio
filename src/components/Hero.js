import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-grid"></div>
        <div className="hero-glow"></div>
      </div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <span className="badge-dot"></span>
              Available for opportunities
            </div>
            <h1 className="hero-title">
              <span className="greeting">Hi, I'm</span>
              <span className="name">Haridass G</span>
            </h1>
            <h2 className="hero-subtitle">
              <span className="role-highlight">Cloud Infrastructure</span> & <span className="role-highlight">DevOps Engineer</span>
            </h2>
            <p className="hero-description">
              With 1.3+ years of hands-on experience designing, deploying, and scaling cloud-based systems.
              I specialize in <strong>AWS, DevOps automations, CI/CD, Kubernetes, Docker, monitoring, and performance optimization</strong>.
              I build <strong>scalable, secure, and highly available</strong> infrastructures that deliver strong performance and cost efficiency.
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">1.3+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">Projects Deployed</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number">99.9%</span>
                <span className="stat-label">Uptime Achieved</span>
              </div>
            </div>
            <div className="hero-buttons">
              <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                      className="btn btn-primary">
                <i className="fas fa-paper-plane"></i>
                Get In Touch
              </button>
              <button onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                      className="btn btn-secondary">
                <i className="fas fa-briefcase"></i>
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
