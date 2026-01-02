import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: 'fa-linkedin', href: 'https://linkedin.com/in/hari-dass-25bb44345' },
    { icon: 'fa-github', href: 'https://github.com/haridass3012' },
    { icon: 'fa-envelope', href: 'mailto:haridass3014@gmail.com', type: 'fas' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="footer-logo">HG</span>
            <span className="footer-logo-dot"></span>
          </div>
          <div className="footer-social">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="footer-social-link"
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                <i className={`${link.type || 'fab'} ${link.icon}`}></i>
              </a>
            ))}
          </div>
          <div className="footer-info">
            <p className="footer-copyright">
              {currentYear} Haridass G. All rights reserved.
            </p>
            <p className="footer-credit">
              Built with React
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
