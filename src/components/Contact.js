import './Contact.css';
import GlareHover from './GlareHover';

const Contact = () => {
  const contactMethods = [
    {
      icon: 'fa-envelope',
      type: 'fas',
      title: 'Email',
      value: 'haridass3014@gmail.com',
      href: 'mailto:haridass3014@gmail.com',
      description: 'Send me an email'
    },
    {
      icon: 'fa-phone',
      type: 'fas',
      title: 'Phone',
      value: '+91 8525876381',
      href: 'tel:8525876381',
      description: 'Give me a call'
    },
    {
      icon: 'fa-linkedin',
      type: 'fab',
      title: 'LinkedIn',
      value: 'Connect with me',
      href: 'https://linkedin.com/in/hari-dass-25bb44345',
      description: 'Professional network'
    },
    {
      icon: 'fa-github',
      type: 'fab',
      title: 'GitHub',
      value: 'View my code',
      href: 'https://github.com/haridass30',
      description: 'Check my repositories'
    }
  ];

  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-header">
            <h2 className="section-title">Get In Touch</h2>
            <p className="contact-description">
              I'm always open to discussing new opportunities, interesting projects,
              or just having a chat about cloud infrastructure and DevOps.
              Let's build something amazing together!
            </p>
          </div>
          <div className="contact-grid">
            {contactMethods.map((method, index) => (
              <GlareHover
                key={index}
                as="a"
                href={method.href}
                className="glare-contact-card"
                glareColor="#15803d"
                glareOpacity={0.3}
                borderRadius="14px"
                borderColor="var(--glass-border)"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem',
                  padding: '24px',
                  background: 'var(--glass-bg)',
                  backdropFilter: 'blur(20px)',
                  textDecoration: 'none',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: 'var(--glass-shadow)'
                }}
              >
                <div className="contact-card-icon">
                  <i className={`${method.type} ${method.icon}`}></i>
                </div>
                <div className="contact-card-content">
                  <h3 className="contact-card-title">{method.title}</h3>
                  <p className="contact-card-value">{method.value}</p>
                  <span className="contact-card-desc">{method.description}</span>
                </div>
                <div className="contact-card-arrow">
                  <i className="fas fa-arrow-right"></i>
                </div>
              </GlareHover>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
