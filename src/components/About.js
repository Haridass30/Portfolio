import './About.css';
import GlareHover from './GlareHover';

const About = () => {
  const highlights = [
    { icon: 'fa-cloud', title: 'Cloud Architecture', desc: 'AWS Infrastructure & Services' },
    { icon: 'fa-cogs', title: 'DevOps', desc: 'CI/CD & Automation' },
    { icon: 'fa-shield-alt', title: 'Security', desc: 'Best Practices & Compliance' },
    { icon: 'fa-chart-line', title: 'Monitoring', desc: 'Observability & Alerting' }
  ];

  const contactItems = [
    { icon: 'fa-phone', type: 'fas', label: 'Phone', value: '8525876381', href: 'tel:8525876381' },
    { icon: 'fa-envelope', type: 'fas', label: 'Email', value: 'haridass3014@gmail.com', href: 'mailto:haridass3014@gmail.com' },
    { icon: 'fa-linkedin', type: 'fab', label: 'LinkedIn', value: 'Connect with me', href: 'https://linkedin.com/in/hari-dass-25bb44345' },
    { icon: 'fa-github', type: 'fab', label: 'GitHub', value: 'View my projects', href: 'https://github.com/haridass3012' }
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-main">
            <div className="about-text-content">
              <p className="about-intro">
                I'm a passionate <strong>Cloud Infrastructure & DevOps Engineer</strong> dedicated to building
                robust, scalable, and efficient cloud solutions.
              </p>
              <p className="about-description">
                My objective is to leverage my expertise in <strong>AWS, DevOps, Cloud Infrastructure, CI/CD, and Observability</strong> to
                build scalable, secure, and high-performing systems — while contributing to organizational growth
                through automation and cloud optimization.
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
                    glareColor="#8b5cf6"
                    glareOpacity={0.25}
                    borderRadius="10px"
                    borderColor="transparent"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      padding: '14px',
                      background: 'rgba(12, 12, 24, 0.5)',
                      color: 'var(--text-secondary)',
                      textDecoration: 'none'
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
