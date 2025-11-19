import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-item">
          <div className="education-icon">
            <i className="fas fa-graduation-cap"></i>
          </div>
          <div className="education-content">
            <h3 className="education-degree">Bachelor of Computer Applications (BCA)</h3>
            <p className="education-institution">Arulmigu Palani Andavar College of Arts & Culture</p>
            <p className="education-period">2019–2022</p>
            <p className="education-percentage"><strong>Percentage:</strong> 79%</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

