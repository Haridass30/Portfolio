import React from 'react';
import './Education.css';

const Education = () => {
  const education = {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Arulmigu Palani Andavar College of Arts & Culture',
    period: '2019 - 2022',
    score: '79%',
    highlights: ['Computer Science Fundamentals', 'Database Management', 'Web Development', 'Programming Languages']
  };

  const certifications = [
    {
      title: 'Java Fullstack (J2EE)',
      provider: 'Yuva Sakthi Academy',
      icon: 'fa-java',
      iconType: 'fab'
    },
    {
      title: 'Git & GitHub',
      provider: 'Udemy',
      icon: 'fa-git-alt',
      iconType: 'fab'
    }
  ];

  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="section-title">Education & Certifications</h2>

        <div className="education-grid">
          <div className="education-card">
            <div className="education-card-header">
              <div className="education-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <span className="education-badge">{education.score}</span>
            </div>
            <div className="education-card-body">
              <h3 className="education-degree">{education.degree}</h3>
              <p className="education-institution">
                <i className="fas fa-university"></i>
                {education.institution}
              </p>
              <p className="education-period">
                <i className="fas fa-calendar-alt"></i>
                {education.period}
              </p>
              <div className="education-highlights">
                {education.highlights.map((item, index) => (
                  <span key={index} className="highlight-tag">{item}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="certifications-wrapper">
            <h3 className="certifications-title">
              <i className="fas fa-certificate"></i>
              Certifications
            </h3>
            <div className="certifications-list">
              {certifications.map((cert, index) => (
                <div key={index} className="certification-item">
                  <div className="cert-icon">
                    <i className={`${cert.iconType} ${cert.icon}`}></i>
                  </div>
                  <div className="cert-content">
                    <h4 className="cert-title">{cert.title}</h4>
                    <p className="cert-provider">{cert.provider}</p>
                  </div>
                  <div className="cert-badge">
                    <i className="fas fa-check-circle"></i>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
