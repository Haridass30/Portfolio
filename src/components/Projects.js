import './Projects.css';

const Projects = () => {
  const projects = [
    {
      icon: 'fa-ship',
      title: 'Vendure eCommerce – EKS Migration, GitOps & DevSecOps Pipeline',
      tags: ['EKS', 'ArgoCD', 'GitHub Actions', 'Terraform', 'Helm', 'Docker', 'ECR', 'Trivy', 'Velero', 'Kubecost'],
      description: 'Containerised and migrated full eCommerce stack to EKS with Helm-managed deployments; ArgoCD continuously syncs cluster state from Git — fully automated GitOps with auditability.',
      features: [
        'Blue/Green deployment pipeline shifts production traffic after health-check validation; failed releases auto-rollback in under 2 minutes with zero downtime',
        'Trivy scans every Docker image in CI — high and critical CVEs block promotion to production ECR, enforcing shift-left DevSecOps',
        'Velero performs daily scheduled backups of EKS workloads and PVs to S3; full cluster disaster restore tested within 30 minutes',
        'Kubecost dashboards provide real-time per-service cost visibility — eliminated ~25% wasted EKS spend through rightsizing',
        'Full observability with Prometheus, Grafana, Loki, and Cloudflare CDN + Nginx Ingress for secure connectivity'
      ],
      metrics: [
        { value: '<2min', label: 'Rollback Time' },
        { value: '70%', label: 'Security Risk Cut' },
        { value: '25%', label: 'Cost Reduced' }
      ]
    },
    {
      icon: 'fa-globe',
      title: 'Multi-Region Disaster Recovery Architecture on AWS',
      tags: ['Terraform', 'Route 53', 'RDS Multi-AZ', 'S3 Replication', 'EKS', 'Velero', 'CloudWatch', 'SNS'],
      description: 'Designed active-passive DR strategy across two AWS regions; Route 53 health checks trigger automatic DNS failover with zero manual intervention during a regional outage.',
      features: [
        'RDS cross-region read replica auto-promotes to primary during failover; S3 cross-region replication guarantees object-level data consistency',
        'Entire DR infrastructure codified in Terraform with reusable modules — any AWS region provisioned from scratch in under 15 minutes',
        'CloudWatch Alarms and SNS notifications provide real-time DR event visibility and on-call alerting',
        'Velero manages scheduled EKS cluster and PV backups to S3 for full disaster recovery'
      ],
      metrics: [
        { value: '<30min', label: 'RTO' },
        { value: '<15min', label: 'RPO' },
        { value: '15min', label: 'Region Provision' }
      ]
    }
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <article key={index} className="project-card">
              <div className="project-header">
                <div className="project-icon">
                  <i className={`fas ${project.icon}`}></i>
                </div>
                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <ul className="project-features">
                  {project.features.map((feature, idx) => (
                    <li key={idx}>
                      <i className="fas fa-check-circle"></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="project-footer">
                <div className="project-metrics">
                  {project.metrics.map((metric, idx) => (
                    <div key={idx} className="metric">
                      <span className="metric-value">{metric.value}</span>
                      <span className="metric-label">{metric.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
