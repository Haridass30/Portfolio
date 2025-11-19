import React from 'react';
import './Contact.css';

const Contact = () => {
  const contactLinks = [
    { icon: 'fa-envelope', text: 'Email', href: 'mailto:haridass3014@gmail.com' },
    { icon: 'fa-phone', text: 'Call', href: 'tel:8525876381' },
    { icon: 'fa-linkedin', type: 'fab', text: 'LinkedIn', href: 'https://linkedin.com/in/hari-dass-25bb44345' },
    { icon: 'fa-github', type: 'fab', text: 'GitHub', href: 'https://github.com/haridass3012' }
  ];

  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <p className="contact-description">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about cloud infrastructure and DevOps!
          </p>
          <div className="contact-links">
            {contactLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.href} 
                className="contact-link"
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                <i className={`${link.type || 'fas'} ${link.icon}`}></i>
                <span>{link.text}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

