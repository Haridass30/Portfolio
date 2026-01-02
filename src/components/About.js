import React from 'react';
import './About.css';

const About = () => {
  const highlights = [
    { icon: 'fa-cloud', title: 'Cloud Architecture', desc: 'AWS Infrastructure & Services' },
    { icon: 'fa-cogs', title: 'DevOps', desc: 'CI/CD & Automation' },
    { icon: 'fa-shield-alt', title: 'Security', desc: 'Best Practices & Compliance' },
    { icon: 'fa-chart-line', title: 'Monitoring', desc: 'Observability & Alerting' }
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-main">
            <div className="about-text-content">
              <p className="about-intro">
                I'm a passionate <strong>Cloud Infrastructure & DevOps Engineer</strong> dedicated to building
                robust, scalable, and efficient cloud solutions.
              </p>
              <p className="about-description">
                My objective is to leverage my expertise in <strong>AWS, DevOps, Cloud Infrastructure, CI/CD, and Observability</strong> to
                build scalable, secure, and high-performing systems — while contributing to organizational growth
                through automation and cloud optimization.
              </p>
              <div className="about-highlights">
                {highlights.map((item, index) => (
                  <div key={index} className="highlight-item">
                    <div className="highlight-icon">
                      <i className={`fas ${item.icon}`}></i>
                    </div>
                    <div className="highlight-content">
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="about-contact-card">
              <h3>Let's Connect</h3>
              <div className="contact-info">
                <a href="tel:8525876381" className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="contact-details">
                    <span className="contact-label">Phone</span>
                    <span className="contact-value">8525876381</span>
                  </div>
                </a>
                <a href="mailto:haridass3014@gmail.com" className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="contact-details">
                    <span className="contact-label">Email</span>
                    <span className="contact-value">haridass3014@gmail.com</span>
                  </div>
                </a>
                <a href="https://linkedin.com/in/hari-dass-25bb44345" target="_blank" rel="noopener noreferrer" className="contact-item">
                  <div className="contact-icon">
                    <i className="fab fa-linkedin"></i>
                  </div>
                  <div className="contact-details">
                    <span className="contact-label">LinkedIn</span>
                    <span className="contact-value">Connect with me</span>
                  </div>
                </a>
                <a href="https://github.com/haridass3012" target="_blank" rel="noopener noreferrer" className="contact-item">
                  <div className="contact-icon">
                    <i className="fab fa-github"></i>
                  </div>
                  <div className="contact-details">
                    <span className="contact-label">GitHub</span>
                    <span className="contact-value">View my projects</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
