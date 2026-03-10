import './Hero.css';
import GlareHover from './GlareHover';
import TextType from './TextType';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-grid"></div>
        <div className="hero-glow"></div>
      </div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <span className="badge-dot"></span>
              Available for opportunities
            </div>
            <h1 className="hero-title">
              <span className="greeting">Hi, I'm</span>
              <span className="name">Haridass G</span>
            </h1>
            <h2 className="hero-subtitle">
              <TextType
                text={["AWS & DevOps Engineer", "Cloud Infrastructure", "Kubernetes & GitOps", "DevSecOps Pipelines"]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
                className="role-highlight"
              />
            </h2>
            <p className="hero-description">
              With nearly 2 years of hands-on production experience designing, deploying, and
              managing cloud-native infrastructure on <strong>Amazon EKS and AWS</strong>.
              Proven expertise in <strong>Kubernetes orchestration, GitOps (ArgoCD), DevSecOps CI/CD pipelines, Terraform IaC, and multi-region Disaster Recovery</strong>.
              Passionate about building <strong>resilient, scalable, secure, and cost-optimised</strong> cloud infrastructure.
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">~2</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number">25%</span>
                <span className="stat-label">EKS Cost Reduced</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number">70%</span>
                <span className="stat-label">Security Risk Cut</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number">35%</span>
                <span className="stat-label">MTTR Improved</span>
              </div>
            </div>
            <div className="hero-buttons">
              <GlareHover
                as="button"
                className="glare-btn glare-btn-primary"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                glareColor="#ffffff"
                glareOpacity={0.4}
              >
                <i className="fas fa-paper-plane"></i>
                Get In Touch
              </GlareHover>
              <GlareHover
                as="button"
                className="glare-btn glare-btn-secondary"
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                glareColor="#22c55e"
                glareOpacity={0.3}
              >
                <i className="fas fa-briefcase"></i>
                View My Work
              </GlareHover>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
