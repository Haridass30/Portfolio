import React from 'react';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      title: 'Java Fullstack (J2EE)',
      provider: 'Yuva Sakthi Academy'
    },
    {
      title: 'Git & GitHub',
      provider: 'Udemy'
    }
  ];

  return (
    <section id="certifications" className="section section-alt">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="certification-card">
              <i className="fas fa-certificate"></i>
              <h3>{cert.title}</h3>
              <p>{cert.provider}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

