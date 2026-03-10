import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      icon: 'fa-aws',
      iconType: 'fab',
      title: 'Cloud Platform',
      level: 'Expert',
      skills: ['EC2', 'EKS', 'ECS', 'Fargate', 'ECR', 'RDS', 'S3', 'ALB', 'Route 53', 'Lambda', 'CloudWatch', 'SNS', 'IAM', 'Auto Scaling', 'VPC']
    },
    {
      icon: 'fa-dharmachakra',
      iconType: 'fas',
      title: 'Container & Orchestration',
      level: 'Expert',
      skills: ['Kubernetes (EKS)', 'Docker', 'Helm', 'ArgoCD', 'GitOps']
    },
    {
      icon: 'fa-code-branch',
      iconType: 'fas',
      title: 'CI/CD & DevSecOps',
      level: 'Expert',
      skills: ['GitHub Actions', 'ArgoCD', 'Trivy', 'Blue/Green Deployments', 'Canary Releases', 'RBAC', 'IAM Least-Privilege', 'Shift-Left Security']
    },
    {
      icon: 'fa-cubes',
      iconType: 'fas',
      title: 'Infrastructure as Code',
      level: 'Advanced',
      skills: ['Terraform']
    },
    {
      icon: 'fa-shield-alt',
      iconType: 'fas',
      title: 'Backup & DR',
      level: 'Advanced',
      skills: ['Velero', 'RDS Multi-AZ', 'S3 Cross-Region Replication', 'Route 53 Failover', 'RTO/RPO Planning']
    },
    {
      icon: 'fa-coins',
      iconType: 'fas',
      title: 'Cost Management',
      level: 'Advanced',
      skills: ['Kubecost', 'AWS Cost Explorer', 'EC2 Rightsizing', 'Resource Quotas', 'FinOps']
    },
    {
      icon: 'fa-chart-line',
      iconType: 'fas',
      title: 'Monitoring & Observability',
      level: 'Expert',
      skills: ['Prometheus', 'Grafana', 'Loki', 'CloudWatch', 'SNS Alerting']
    },
    {
      icon: 'fa-network-wired',
      iconType: 'fas',
      title: 'Networking & Security',
      level: 'Advanced',
      skills: ['VPC', 'Subnets', 'Security Groups', 'NACLs', 'Nginx Ingress', 'SSL/TLS', 'Cloudflare CDN']
    },
    {
      icon: 'fa-terminal',
      iconType: 'fas',
      title: 'Scripting & Automation',
      level: 'Advanced',
      skills: ['Bash Shell Scripting', 'Python (Boto3)', 'AWS CLI']
    },
    {
      icon: 'fa-database',
      iconType: 'fas',
      title: 'Databases & Caching',
      level: 'Advanced',
      skills: ['MySQL (RDS)', 'Redis', 'GraphQL API']
    },
    {
      icon: 'fa-code',
      iconType: 'fas',
      title: 'Frontend',
      level: 'Proficient',
      skills: ['HTML', 'CSS', 'Bootstrap', 'WordPress']
    },
    {
      icon: 'fa-tools',
      iconType: 'fas',
      title: 'Version Control & OS',
      level: 'Experienced',
      skills: ['Git', 'GitHub', 'Linux (Ubuntu)', 'Windows']
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
