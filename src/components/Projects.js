import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      number: '01',
      title: 'Vendure eCommerce',
      subtitle: 'Node.js • AWS • Kubernetes',
      description: 'Scaled production workloads with EC2, ALB, RDS (MySQL), S3, Redis, Cloudflare CDN.',
      features: [
        'Automated deployments using GitHub Actions, ECS Fargate, and Kubernetes',
        'Configured Nginx for secure reverse proxy, SSL, and load balancing',
        'Centralized monitoring with Prometheus, Grafana, Loki, CloudWatch, Kibana',
        'Reduced operational overhead and AWS cost significantly'
      ]
    },
    {
      number: '02',
      title: 'Order Automation & Alerting',
      subtitle: 'Automation • Monitoring • Alerts',
      description: 'Built automation workflows to track events: cancellations, payment failures, refunds.',
      features: [
        'Sent real-time alert notifications with order & customer details',
        'Generated daily automated reports for management',
        'Improved incident resolution time through proactive monitoring'
      ]
    }
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-number">{project.number}</div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
                <p className="project-description">{project.description}</p>
                <ul className="project-features">
                  {project.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

