import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'AWS & DevOps Engineer',
      company: 'AVSECOMHUB',
      location: 'India',
      period: 'May 2024 – Present',
      type: 'Full-time',
      responsibilities: [
        { text: 'Provisioned and managed AWS resources:', highlight: 'EC2, RDS, S3, ALB, Auto Scaling, EKS, ECS, Fargate' },
        { text: 'Designed and maintained', highlight: 'CI/CD pipelines with GitHub Actions & Docker', suffix: 'enabling zero-downtime deployments' },
        { text: 'Implemented', highlight: 'Redis caching', suffix: 'to reduce DB load and improve response time' },
        { text: 'Improved global performance using', highlight: 'Cloudflare CDN' },
        { text: 'Built observability stack:', highlight: 'CloudWatch, Prometheus, Grafana, Loki, Kibana' },
        { text: 'Reduced AWS costs through rightsizing and continuous optimization' },
        { text: 'Designed & optimized', highlight: 'MySQL databases', suffix: 'for performance and scalability' }
      ]
    }
  ];

  return (
    <section id="experience" className="section section-alt">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="experience-timeline-dot">
                <div className="dot-inner"></div>
              </div>
              <div className="experience-content">
                <div className="experience-header">
                  <div className="experience-title-section">
                    <h3 className="experience-title">{exp.title}</h3>
                    <div className="experience-meta">
                      <span className="experience-company">
                        <i className="fas fa-building"></i>
                        {exp.company}
                      </span>
                      <span className="experience-location">
                        <i className="fas fa-map-marker-alt"></i>
                        {exp.location}
                      </span>
                    </div>
                  </div>
                  <div className="experience-badges">
                    <span className="experience-type">{exp.type}</span>
                    <span className="experience-date">
                      <i className="fas fa-calendar-alt"></i>
                      {exp.period}
                    </span>
                  </div>
                </div>
                <div className="experience-body">
                  <ul className="experience-list">
                    {exp.responsibilities.map((item, idx) => (
                      <li key={idx}>
                        <span className="list-icon">
                          <i className="fas fa-check"></i>
                        </span>
                        <span className="list-text">
                          {item.text} {item.highlight && <strong>{item.highlight}</strong>}{item.suffix && ` ${item.suffix}`}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
