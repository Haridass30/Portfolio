import React from 'react';
import './TechStack.css';

const TechStack = () => {
  const technologies = [
    { name: 'AWS', icon: 'https://ap-south-1.graphassets.com/cmk2ae2tp2p9607pkh80t81ss/cmk2osc0m96lh07plpik6egn8', category: 'Cloud' },
    { name: 'Kubernetes', icon: 'https://ap-south-1.graphassets.com/cmk2ae2tp2p9607pkh80t81ss/cmk2osc2m964207o2w4gchs7e', category: 'Orchestration' },
    { name: 'Docker', icon: 'https://ap-south-1.graphassets.com/cmk2ae2tp2p9607pkh80t81ss/cmk2osbpy96kw07plf1zg04xw', category: 'Container' },
    { name: 'Terraform', icon: '', category: 'IaC', fallback: 'Tf' },
    { name: 'ArgoCD', icon: '', category: 'GitOps', fallback: 'Ar' },
    { name: 'Helm', icon: '', category: 'Packaging', fallback: 'He' },
    { name: 'Trivy', icon: '', category: 'Security', fallback: 'Tr' },
    { name: 'Python', icon: 'https://ap-south-1.graphassets.com/cmk2ae2tp2p9607pkh80t81ss/cmk2osc4r96lo07plsjz9c02h', category: 'Scripting' },
    { name: 'Bash', icon: '', category: 'Scripting', fallback: 'Sh' },
    { name: 'MySQL', icon: 'https://ap-south-1.graphassets.com/cmk2ae2tp2p9607pkh80t81ss/cmk2osbu796l307plqea8yf1f', category: 'Database' },
    { name: 'Redis', icon: '', category: 'Caching', fallback: 'Re' },
    { name: 'GitHub', icon: 'https://ap-south-1.graphassets.com/cmk2ae2tp2p9607pkh80t81ss/cmk2osc6w964907o2emhn92cs', category: 'CI/CD' },
    { name: 'Grafana', icon: 'https://ap-south-1.graphassets.com/cmk2ae2tp2p9607pkh80t81ss/cmk2osbs8963o07o2sa25kmpk', category: 'Monitoring' },
    { name: 'Prometheus', icon: 'https://ap-south-1.graphassets.com/cmk2ae2tp2p9607pkh80t81ss/cmk2osbw9963v07o2c6403vnd', category: 'Monitoring' },
    { name: 'Velero', icon: '', category: 'Backup & DR', fallback: 'Ve' },
    { name: 'Kubecost', icon: '', category: 'FinOps', fallback: 'Kc' },
    { name: 'Nginx', icon: 'https://ap-south-1.graphassets.com/cmk2ae2tp2p9607pkh80t81ss/cmk2osbn9963h07o2jhg19p8g', category: 'Ingress' },
    { name: 'Cloudflare', icon: '', category: 'CDN', fallback: 'Cf' },
  ];

  return (
    <section className="tech-stack-section">
      <div className="container">
        <div className="tech-stack-header">
          <span className="tech-stack-label">Technologies I Work With</span>
          <h2 className="tech-stack-title">My Tech Stack</h2>
        </div>
        <div className="tech-stack-grid">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="tech-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="tech-card-glow"></div>
              <div className="tech-card-content">
                <div className="tech-icon-container">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="tech-icon"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="tech-icon-fallback">{tech.fallback || tech.name[0]}</div>
                </div>
                <span className="tech-name">{tech.name}</span>
                <span className="tech-category">{tech.category}</span>
              </div>
              <div className="tech-card-border"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
