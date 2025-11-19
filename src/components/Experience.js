import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="section section-alt">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-item">
          <div className="experience-header">
            <h3 className="experience-title">AWS & DevOps Engineer</h3>
            <span className="experience-company">Hashtag Billing Solution</span>
            <span className="experience-date">May 2024 – Present</span>
          </div>
          <div className="experience-content">
            <ul className="experience-list">
              <li>Provisioned and managed AWS resources: <strong>EC2, RDS, S3 (images & logs), ALB, Auto Scaling, EKS, ECS, Fargate</strong>.</li>
              <li>Designed and maintained <strong>CI/CD pipelines with GitHub Actions & Docker</strong> enabling zero-downtime deployments.</li>
              <li>Implemented <strong>Redis caching</strong> to reduce DB load and improve response time.</li>
              <li>Improved global performance using <strong>Cloudflare CDN</strong>.</li>
              <li>Built observability stack: <strong>CloudWatch, Prometheus, Grafana, Loki, Kibana</strong>.</li>
              <li>Reduced AWS costs through rightsizing and continuous optimization.</li>
              <li>Designed & optimized <strong>MySQL databases</strong> for performance and scalability.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

