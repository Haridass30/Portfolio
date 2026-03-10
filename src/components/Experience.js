import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'AWS & DevOps Engineer',
      company: 'AVSECOMHUB',
      location: 'Tamil Nadu, India',
      period: 'April 2023 – Present',
      type: 'Full-time',
      responsibilities: [
        { text: 'Led end-to-end migration of production Vendure eCommerce platform from', highlight: 'Amazon ECS to EKS', suffix: '; designed Blue/Green deployment via ArgoCD + GitHub Actions, reducing rollback time from 20 min to under 2 min with zero downtime' },
        { text: 'Engineered', highlight: 'DevSecOps CI/CD pipeline integrating Trivy container image scanning', suffix: ' — critical and high CVEs auto-block deployments, reducing container security risk by ~70%' },
        { text: 'Provisioned and managed all AWS and EKS infrastructure using', highlight: 'Terraform IaC with modular configurations', suffix: ' across dev, staging, and production; enforced IAM least-privilege and Kubernetes RBAC' },
        { text: 'Architected', highlight: 'multi-region active-passive Disaster Recovery', suffix: ' using RDS Multi-AZ, S3 cross-region replication, and Route 53 automated DNS failover — RTO < 30 min, RPO < 15 min' },
        { text: 'Implemented', highlight: 'Kubecost for per-namespace cost visibility', suffix: ' across EKS clusters; rightsized CPU/memory requests, achieving ~25% reduction in EKS spend' },
        { text: 'Deployed full-stack observability:', highlight: 'Prometheus, Grafana, Loki, CloudWatch', suffix: ' with custom alerting, reducing MTTR by ~35%; integrated Redis caching to cut DB load by ~50%' },
        { text: 'Configured', highlight: 'VPC networking, Security Groups, NACLs, SSL/TLS via Nginx Ingress', suffix: ', and Cloudflare CDN for secure, highly available connectivity' },
        { text: 'Automated workflows using', highlight: 'Bash scripts and Python (Boto3)', suffix: ' — S3 lifecycle management, EC2 Auto Scaling, SNS alerting, and health checks' },
        { text: 'Managed', highlight: 'Docker containerisation of microservices', suffix: ', maintained Helm charts, and administered Linux (Ubuntu) servers' }
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
