import './About.css';
import GlareHover from './GlareHover';

const About = () => {
  const highlights = [
    { icon: 'fa-cloud', title: 'Cloud & EKS', desc: 'AWS Infrastructure & Kubernetes Orchestration' },
    { icon: 'fa-cogs', title: 'GitOps & IaC', desc: 'ArgoCD, Terraform, Helm Charts' },
    { icon: 'fa-shield-alt', title: 'DevSecOps', desc: 'Trivy CVE Scanning & Shift-Left Security' },
    { icon: 'fa-chart-line', title: 'Observability', desc: 'Prometheus, Grafana, Loki, CloudWatch' },
    { icon: 'fa-server', title: 'Disaster Recovery', desc: 'Multi-Region DR, Velero Backups' },
    { icon: 'fa-coins', title: 'FinOps', desc: 'Kubecost, Rightsizing & Cost Optimization' }
  ];

  const contactItems = [
    { icon: 'fa-phone', type: 'fas', label: 'Phone', value: '+91 8525876381', href: 'tel:+918525876381' },
    { icon: 'fa-envelope', type: 'fas', label: 'Email', value: 'haridass3014@gmail.com', href: 'mailto:haridass3014@gmail.com' },
    { icon: 'fa-linkedin', type: 'fab', label: 'LinkedIn', value: 'Connect with me', href: 'https://linkedin.com/in/hari-dass-25bb44345' },
    { icon: 'fa-github', type: 'fab', label: 'GitHub', value: 'View my projects', href: 'https://github.com/haridass30' }
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-main">
            <div className="about-text-content">
              <p className="about-intro">
                I'm an <strong>AWS & DevOps Engineer</strong> with nearly 2 years of hands-on production experience
                designing, deploying, and managing cloud-native infrastructure on Amazon EKS and AWS.
              </p>
              <p className="about-description">
                Proven expertise in <strong>Kubernetes orchestration, GitOps workflows (ArgoCD),
                DevSecOps CI/CD pipelines (GitHub Actions + Trivy), Terraform IaC, and multi-region
                Disaster Recovery architecture</strong>. Skilled in IAM, RBAC, VPC networking, Bash scripting,
                Python (Boto3) automation, and Linux administration. Passionate about building resilient,
                scalable, secure, and cost-optimised cloud infrastructure.
              </p>
              <div className="about-highlights">
                {highlights.map((item, index) => (
                  <div key={index} className="highlight-item">
                    <div className="highlight-icon">
                      <i className={`fas ${item.icon}`}></i>
                    </div>
                    <div className="highlight-content">
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="about-contact-card">
              <h3>Let's Connect</h3>
              <div className="contact-info">
                {contactItems.map((item, index) => (
                  <GlareHover
                    key={index}
                    as="a"
                    href={item.href}
                    className="glare-contact-item"
                    glareColor="#22c55e"
                    glareOpacity={0.25}
                    borderRadius="10px"
                    borderColor="rgba(34, 197, 94, 0.3)"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      padding: '14px',
                      background: 'rgba(10, 10, 10, 0.8)',
                      color: '#ffffff',
                      textDecoration: 'none',
                      width: '100%'
                    }}
                  >
                    <div className="contact-icon">
                      <i className={`${item.type} ${item.icon}`}></i>
                    </div>
                    <div className="contact-details">
                      <span className="contact-label">{item.label}</span>
                      <span className="contact-value">{item.value}</span>
                    </div>
                  </GlareHover>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
