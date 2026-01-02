import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      icon: 'fa-aws',
      iconType: 'fab',
      title: 'Cloud & DevOps',
      level: 'Expert',
      skills: ['AWS (EC2, RDS, S3, ALB)', 'Auto Scaling, ECS, Fargate', 'Kubernetes', 'Docker', 'Nginx', 'GitHub Actions', 'CI/CD Pipelines', 'Grafana', 'Prometheus', 'Loki']
    },
    {
      icon: 'fa-database',
      iconType: 'fas',
      title: 'Backend & Database',
      level: 'Advanced',
      skills: ['Node.js', 'Java', 'MySQL', 'GraphQL API', 'Python', 'REST APIs']
    },
    {
      icon: 'fa-code',
      iconType: 'fas',
      title: 'Frontend',
      level: 'Proficient',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap', 'WordPress']
    },
    {
      icon: 'fa-tools',
      iconType: 'fas',
      title: 'Tools & Platforms',
      level: 'Experienced',
      skills: ['VS Code', 'MySQL Workbench', 'Eclipse', 'Linux (Ubuntu)', 'Windows', 'Git & GitHub']
    }
  ];

  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-card">
              <div className="skill-card-header">
                <div className="skill-icon-wrapper">
                  <i className={`${category.iconType} ${category.icon}`}></i>
                </div>
                <div className="skill-header-content">
                  <h3 className="skill-title">{category.title}</h3>
                  <span className="skill-level">{category.level}</span>
                </div>
              </div>
              <div className="skill-card-body">
                <div className="skill-tags">
                  {category.skills.map((skill, idx) => (
                    <span key={idx} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
