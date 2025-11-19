import React from 'react';
import styled from 'styled-components';

const Skills = () => {
  const skillCategories = [
    {
      icon: 'fa-aws',
      iconType: 'fab',
      title: 'Cloud & DevOps',
      tag: 'Expert',
      skills: ['AWS (EC2, RDS, S3, ALB)', 'Auto Scaling, ECS, Fargate', 'Kubernetes', 'Docker', 'Nginx', 'GitHub Actions', 'CI/CD Pipelines'],
      primary: '#FF6B35',
      secondary: '#4ECDC4',
      accent: '#FFE66D',
      stampText: 'Certified'
    },
    {
      icon: 'fa-database',
      iconType: 'fas',
      title: 'Backend & Database',
      tag: 'Advanced',
      skills: ['Node.js', 'Java', 'MySQL', 'GraphQL API', 'Python', 'REST APIs'],
      primary: '#6C5CE7',
      secondary: '#00B894',
      accent: '#FDCB6E',
      stampText: 'Skilled'
    },
    {
      icon: 'fa-code',
      iconType: 'fas',
      title: 'Frontend',
      tag: 'Proficient',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap', 'WordPress'],
      primary: '#FF3E00',
      secondary: '#0984E3',
      accent: '#00E0B0',
      stampText: 'Creative'
    },
    {
      icon: 'fa-tools',
      iconType: 'fas',
      title: 'Tools & Others',
      tag: 'Versatile',
      skills: ['VS Code', 'MySQL Workbench', 'Eclipse', 'Linux (Ubuntu)', 'Windows', 'Git & GitHub'],
      primary: '#D63031',
      secondary: '#FD79A8',
      accent: '#74B9FF',
      stampText: 'Pro'
    }
  ];

  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <StyledWrapper>
          <div className="skills-grid">
            {skillCategories.map((category, index) => (
              <div key={index} className="card" data-index={index}>
                <div className="card-pattern-grid" />
                <div className="card-overlay-dots" />
                <div className="bold-pattern">
                  <svg viewBox="0 0 100 100">
                    <path strokeDasharray="15 10" strokeWidth={10} stroke="#000" fill="none" d="M0,0 L100,0 L100,100 L0,100 Z" />
                  </svg>
                </div>
                <div className="card-title-area" style={{ background: category.primary }}>
                  <span>{category.title}</span>
                  <span className="card-tag">{category.tag}</span>
                </div>
                <div className="card-body">
                  <div className="feature-grid">
                    {category.skills.map((skill, idx) => (
                      <div key={idx} className="feature-item">
                        <div className="feature-icon" style={{ background: category.secondary }}>
                          <svg viewBox="0 0 24 24">
                            <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z" />
                          </svg>
                        </div>
                        <span className="feature-text">{skill}</span>
                      </div>
                    ))}
                  </div>
                  <div className="card-actions">
                    <div className="skill-icon-display">
                      <i className={`${category.iconType} ${category.icon}`}></i>
                    </div>
                    <button className="card-button">
                      View Projects
                    </button>
                  </div>
                </div>
                <div className="dots-pattern">
                  <svg viewBox="0 0 80 40">
                    <circle fill="#000" r={3} cy={10} cx={10} />
                    <circle fill="#000" r={3} cy={10} cx={30} />
                    <circle fill="#000" r={3} cy={10} cx={50} />
                    <circle fill="#000" r={3} cy={10} cx={70} />
                    <circle fill="#000" r={3} cy={20} cx={20} />
                    <circle fill="#000" r={3} cy={20} cx={40} />
                    <circle fill="#000" r={3} cy={20} cx={60} />
                    <circle fill="#000" r={3} cy={30} cx={10} />
                    <circle fill="#000" r={3} cy={30} cx={30} />
                    <circle fill="#000" r={3} cy={30} cx={50} />
                    <circle fill="#000" r={3} cy={30} cx={70} />
                  </svg>
                </div>
                <div className="accent-shape" style={{ background: category.secondary }} />
                <div className="corner-slice" />
                <div className="stamp">
                  <span className="stamp-text">{category.stampText}</span>
                </div>
              </div>
            ))}
          </div>
        </StyledWrapper>
      </div>
    </section>
  );
};

const StyledWrapper = styled.div`
  margin-top: 2rem;

  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2.5rem;
    padding: 1rem;
  }

  .card {
    --text: #050505;
    --bg: #ffffff;
    --shadow-color: #000000;
    --pattern-color: #cfcfcf;

    position: relative;
    background: var(--bg);
    border: 0.35em solid var(--text);
    border-radius: 0.6em;
    box-shadow:
      0.7em 0.7em 0 var(--shadow-color),
      inset 0 0 0 0.15em rgba(0, 0, 0, 0.05);
    transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    overflow: hidden;
    font-family: ui-sans-serif, system-ui, sans-serif;
    transform-origin: center;
  }

  .card:hover {
    transform: translate(-0.4em, -0.4em) scale(1.02);
    box-shadow: 1em 1em 0 var(--shadow-color);
  }

  .card:hover .card-pattern-grid,
  .card:hover .card-overlay-dots {
    opacity: 1;
  }

  .card:active {
    transform: translate(0.1em, 0.1em) scale(0.98);
    box-shadow: 0.5em 0.5em 0 var(--shadow-color);
  }

  .card::before {
    content: "";
    position: absolute;
    top: -1em;
    right: -1em;
    width: 4em;
    height: 4em;
    background: var(--pattern-color);
    transform: rotate(45deg);
    z-index: 1;
  }

  .card::after {
    content: "★";
    position: absolute;
    top: 0.4em;
    right: 0.4em;
    color: var(--text);
    font-size: 1.2em;
    font-weight: bold;
    z-index: 2;
  }

  .card-pattern-grid {
    position: absolute;
    inset: 0;
    background-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.05) 1px,
        transparent 1px
      ),
      linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
    background-size: 0.5em 0.5em;
    pointer-events: none;
    opacity: 0.5;
    transition: opacity 0.4s ease;
    z-index: 1;
  }

  .card-overlay-dots {
    position: absolute;
    inset: 0;
    background-image: radial-gradient(var(--pattern-color) 1px, transparent 1px);
    background-size: 1em 1em;
    background-position: -0.5em -0.5em;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: 1;
  }

  .bold-pattern {
    position: absolute;
    top: 0;
    right: 0;
    width: 6em;
    height: 6em;
    opacity: 0.15;
    pointer-events: none;
    z-index: 1;
  }

  .card-title-area {
    position: relative;
    padding: 1.4em;
    color: var(--bg);
    font-weight: 800;
    font-size: 1.2em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 0.35em solid var(--text);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    z-index: 2;
    overflow: hidden;
  }

  .card-title-area::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: repeating-linear-gradient(
      45deg,
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.1) 0.5em,
      transparent 0.5em,
      transparent 1em
    );
    pointer-events: none;
    opacity: 0.3;
  }

  .card-tag {
    background: var(--bg);
    color: var(--text);
    font-size: 0.6em;
    font-weight: 800;
    padding: 0.4em 0.8em;
    border: 0.15em solid var(--text);
    border-radius: 0.3em;
    box-shadow: 0.2em 0.2em 0 var(--shadow-color);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    transform: rotate(3deg);
    transition: all 0.3s ease;
  }

  .card:hover .card-tag {
    transform: rotate(-2deg) scale(1.1);
    box-shadow: 0.25em 0.25em 0 var(--shadow-color);
  }

  .card-body {
    position: relative;
    padding: 1.5em;
    z-index: 2;
  }

  .feature-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0.8em;
    margin-bottom: 1.5em;
  }

  .feature-item {
    display: flex;
    align-items: center;
    gap: 0.6em;
    transition: transform 0.2s ease;
  }

  .feature-item:hover {
    transform: translateX(0.3em);
  }

  .feature-icon {
    width: 1.4em;
    height: 1.4em;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    border: 0.12em solid var(--text);
    border-radius: 0.3em;
    box-shadow: 0.2em 0.2em 0 rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease;
  }

  .feature-item:hover .feature-icon {
    transform: rotate(-5deg);
  }

  .feature-icon svg {
    width: 0.9em;
    height: 0.9em;
    fill: var(--bg);
  }

  .feature-text {
    font-size: 0.85em;
    font-weight: 600;
    color: var(--text);
  }

  .card-actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.5em;
    padding-top: 1.2em;
    border-top: 0.15em dashed rgba(0, 0, 0, 0.15);
    position: relative;
  }

  .card-actions::before {
    content: "✂";
    position: absolute;
    top: -0.8em;
    left: 50%;
    transform: translateX(-50%) rotate(90deg);
    background: var(--bg);
    padding: 0 0.5em;
    font-size: 1em;
    color: rgba(0, 0, 0, 0.4);
  }

  .skill-icon-display {
    width: 2.5em;
    height: 2.5em;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--text);
    border: 0.15em solid var(--text);
    border-radius: 0.3em;
    box-shadow: 0.3em 0.3em 0 rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
  }

  .skill-icon-display i {
    font-size: 1.3em;
    color: var(--bg);
  }

  .card-button {
    background: #fbca1f;
    font-family: inherit;
    padding: 0.6em 1.3em;
    font-weight: 900;
    font-size: 18px;
    border: 3px solid black;
    border-radius: 0.4em;
    box-shadow: 0.1em 0.1em;
    cursor: pointer;
  }

  .card-button:hover {
    transform: translate(-0.05em, -0.05em);
    box-shadow: 0.15em 0.15em;
  }

  .card-button:active {
    transform: translate(0.05em, 0.05em);
    box-shadow: 0.05em 0.05em;
  }

  .dots-pattern {
    position: absolute;
    bottom: 2em;
    left: -2em;
    width: 8em;
    height: 4em;
    opacity: 0.3;
    transform: rotate(-10deg);
    pointer-events: none;
    z-index: 1;
  }

  .accent-shape {
    position: absolute;
    width: 2.5em;
    height: 2.5em;
    border: 0.15em solid var(--text);
    border-radius: 0.3em;
    transform: rotate(45deg);
    bottom: -1.2em;
    right: 2em;
    z-index: 0;
    transition: transform 0.3s ease;
  }

  .card:hover .accent-shape {
    transform: rotate(55deg) scale(1.1);
  }

  .stamp {
    position: absolute;
    bottom: 1.5em;
    left: 1.5em;
    width: 4em;
    height: 4em;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0.15em solid rgba(0, 0, 0, 0.3);
    border-radius: 50%;
    transform: rotate(-15deg);
    opacity: 0.2;
    z-index: 1;
  }

  .stamp-text {
    font-size: 0.6em;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .corner-slice {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 1.5em;
    height: 1.5em;
    background: var(--bg);
    border-right: 0.25em solid var(--text);
    border-top: 0.25em solid var(--text);
    border-radius: 0 0.5em 0 0;
    z-index: 1;
  }

  @media (max-width: 768px) {
    .skills-grid {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .card {
      max-width: 400px;
      margin: 0 auto;
    }

    .feature-text {
      font-size: 0.8em;
    }
  }

  @media (max-width: 480px) {
    .card-title-area {
      font-size: 1em;
      padding: 1.2em;
    }

    .feature-grid {
      gap: 0.6em;
    }

    .card-button {
      font-size: 0.75em;
      padding: 0.6em 1em;
    }
  }
`;

export default Skills;

