import './Projects.css';

const Projects = () => {
  const projects = [
    {
      icon: 'fa-shopping-cart',
      title: 'eCommerce Website Infrastructure',
      tags: ['Node.js', 'AWS', 'Kubernetes', 'Docker'],
      description: 'Scaled production workloads with EC2, ALB, RDS (MySQL), S3, Redis, Cloudflare CDN.',
      features: [
        'Automated deployments using GitHub Actions, ECS Fargate, and Kubernetes',
        'Configured Nginx for secure reverse proxy, SSL, and load balancing',
        'Centralized monitoring with Prometheus, Grafana, Loki, CloudWatch, Kibana',
        'Reduced operational overhead and AWS cost significantly'
      ],
      metrics: [
        { value: '99.9%', label: 'Uptime' },
        { value: '40%', label: 'Cost Reduced' }
      ]
    },
    {
      icon: 'fa-bell',
      title: 'Order Automation & Alerting',
      tags: ['Python', 'AWS Lambda', 'MySQL', 'AWS'],
      description: 'Built automation workflows using Python and AWS Lambda to track events: cancellations, payment failures, refunds.',
      features: [
        'Developed Python scripts with AWS Lambda for serverless automation',
        'Integrated MySQL database for order tracking and event logging',
        'Sent real-time alert notifications with order & customer details',
        'Generated daily automated reports for management'
      ],
      metrics: [
        { value: '60%', label: 'Faster Response' },
        { value: '100+', label: 'Daily Alerts' }
      ]
    },
    {
      icon: 'fa-comments',
      title: 'CPaaS Platform',
      tags: ['AWS SES', 'AWS SNS', 'Node.js', 'API'],
      description: 'Built a Communications Platform as a Service (CPaaS) using AWS services for messaging and notifications.',
      features: [
        'Integrated AWS SES for transactional and marketing emails',
        'Implemented AWS SNS for push notifications and SMS delivery',
        'Built scalable API endpoints for communication services',
        'Designed fault-tolerant architecture with high availability'
      ],
      metrics: [
        { value: '10K+', label: 'Messages/Day' },
        { value: '99%', label: 'Delivery Rate' }
      ]
    },
    {
      icon: 'fa-store',
      title: 'Headless eCommerce Website',
      tags: ['Remix', 'React', 'Node.js', 'Tailwind'],
      description: 'Created a modern eCommerce website using headless architecture with Vendure as backend.',
      features: [
        'Built responsive frontend with Remix and React framework',
        'Styled with Tailwind CSS for modern UI/UX design',
        'Integrated Vendure headless eCommerce backend',
        'Implemented server-side rendering for optimal performance'
      ],
      metrics: [
        { value: '2s', label: 'Load Time' },
        { value: '95+', label: 'Performance Score' }
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
