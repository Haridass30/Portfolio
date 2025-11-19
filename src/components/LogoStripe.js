import React from 'react';
import './LogoStripe.css';

const LogoStripe = () => {
  // Add your logo file names here
  const logos = [
    { name: 'AWS', file: 'aws.png', alt: 'AWS Logo' },
    { name: 'Docker', file: 'docker.png', alt: 'Docker Logo' },
    { name: 'Kubernetes', file: 'kubernetes.png', alt: 'Kubernetes Logo' },
    { name: 'Node.js', file: 'nodejs.png', alt: 'Node.js Logo' },
    { name: 'Python', file: 'python.png', alt: 'Python Logo' },
    { name: 'Java', file: 'java.png', alt: 'Java Logo' },
    { name: 'MySQL', file: 'mysql.png', alt: 'MySQL Logo' },
    { name: 'GitHub', file: 'github.png', alt: 'GitHub Logo' },
    { name: 'Linux', file: 'linux.png', alt: 'Linux Logo' },
    { name: 'Redis', file: 'redis.png', alt: 'Redis Logo' },
    { name: 'Nginx', file: 'nginx.png', alt: 'Nginx Logo' },
    { name: 'Grafana', file: 'grafana.png', alt: 'Grafana Logo' },
  ];

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <div className="logo-stripe-wrapper">
      <div className="logo-stripe-container">
        <div className="logo-stripe">
          {duplicatedLogos.map((logo, index) => (
            <div key={index} className="logo-item">
              <img
                src={`/logos/${logo.file}`}
                alt={logo.alt}
                onError={(e) => {
                  // Fallback if image not found - show text
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="logo-fallback">{logo.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoStripe;

