import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const personal = {
  name: 'Anirudh Battu',
  title: 'Software Engineer',
  tagline: 'AI Enthusiast · Problem Solver',
  email: 'anirudhbattu009@gmail.com',
  github: 'https://github.com/anirudh1007-ai',
  linkedin: 'https://www.linkedin.com/in/battu-anirudh-7b652a375/',
  resume: '/anirudh-resume.pdf',
  location: 'Hyderabad, India',
  available: true,
};

const skills = [
  { category: 'Programming Languages', icon: '{}', items: ['Java', 'Python', 'JavaScript', 'C', 'SQL'] },
  { category: 'Frontend', icon: '</>', items: ['HTML', 'CSS', 'React.js'] },
  { category: 'Backend', icon: 'API', items: ['Node.js', 'Express.js', 'Spring Boot'] },
  { category: 'Databases', icon: 'DB', items: ['MySQL', 'MongoDB'] },
  { category: 'Tools & Platforms', icon: '⚙', items: ['Git', 'GitHub', 'Docker', 'AWS', 'Azure', 'Linux'] },
  { category: 'Core Concepts', icon: 'CS', items: ['DSA', 'OOP', 'DBMS', 'Operating Systems'] },
];

const projects = [
  {
    name: 'Smart Appointment & Queue Management System',
    stack: ['Java', 'Spring Boot', 'MySQL', 'React'],
    description: 'Full-stack hospital management system with role-based dashboards for patients, doctors, and admins.',
    bullets: [
      'Built REST APIs with Spring Boot and MySQL for appointment booking, token generation, and real-time queue management.',
      'Implemented role-based dashboards with appointment status tracking and full CRUD operations.',
    ],
    github: 'https://github.com/anirudh1007-ai/hosipatal-management',
    live: '#',
  },
  {
    name: 'AI-Driven Customer Feedback Analyzer',
    stack: ['FastAPI', 'React', 'PostgreSQL', 'Docker'],
    description: 'AI platform for customer feedback analysis with sentiment, emotion, and topic clustering.',
    bullets: [
      'Developed FastAPI backend with pgvector embeddings, Redis, and Celery for scalable async processing.',
      'Built a React dashboard for real-time visualization of sentiment and emotion trends.',
    ],
    github: 'https://github.com/anirudh1007-ai/ai-driven-feedback-analyser',
    live: '#',
  },
  {
    name: 'DropBeam — Cross-Platform File Transfer',
    stack: ['React Native', 'Tauri', 'TCP'],
    description: 'Custom TCP-based file transfer system with chunked streaming and encryption.',
    bullets: [
      'Built offline device pairing and USB-based communication for internet-free cross-platform file sharing.',
      'Implemented chunked streaming with strong encryption and no dependency on traditional web protocols.',
    ],
    github: '#',
    live: '#',
  },
];

const education = [
  {
    school: 'Anurag University',
    degree: 'B.Tech in Computer Science and Engineering',
    year: '2023 – 2027',
    score: 'CGPA: 7.00 / 10',
    location: 'Hyderabad, Telangana',
  },
  {
    school: 'Sri Chaitanya Junior College',
    degree: 'Intermediate — MPC',
    year: '2021 – 2023',
    score: '90.7%',
    location: 'Hyderabad, Telangana',
  },
];

const certifications = [
  { name: 'Database and SQL', issuer: 'Infosys Springboard', file: '/certificates/learn-ai-gen-ai-basics.pdf' },
  { name: 'ICT Certificate', issuer: 'Anurag University', file: '/certificates/ict-certificate.pdf' },
  { name: 'JavaScript Essentials 1', issuer: 'Cisco Networking Academy', file: '/certificates/javascript-essentials-1.pdf' },
  { name: 'Microsoft Azure AI Essentials', issuer: 'Microsoft and LinkedIn', file: '/certificates/microsoft-azure-ai-essentials.pdf' },
  { name: 'Machine Learning', issuer: 'NPTEL', file: '/certificates/nptel-machine-learning.pdf' },
  { name: 'Network Technician Career Path', issuer: 'Cisco Networking Academy', file: '/certificates/network-technician-career-path.pdf' },
  { name: 'Operating Systems Basics', issuer: 'Cisco Networking Academy', file: '/certificates/operating-systems-basics.pdf' },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const links = ['About', 'Skills', 'Projects', 'Contact'];

  return (
    <header className="nav">
      <a href="#home" className="logo" onClick={() => setOpen(false)}>
        Anirudh Battu
      </a>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
        <span />
        <span />
        <span />
      </button>
      <nav className={open ? 'nav-links open' : 'nav-links'}>
        {links.map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)}>
            {link}
          </a>
        ))}
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero">
      <p className="eyebrow">{personal.title}</p>
      <h1>{personal.name}</h1>
      <p className="hero-statement">Building software that scales and ships.</p>
      <p className="hero-copy">{personal.tagline}</p>
      <div className="hero-actions">
        <a className="button primary" href={personal.github} target="_blank" rel="noreferrer">
          View GitHub
        </a>
        <a className="button secondary" href={personal.resume} target="_blank" rel="noreferrer">
          Download Resume
        </a>
      </div>
    </section>
  );
}

function About() {
  const facts = [
    ['University', 'Anurag University'],
    ['Degree', 'B.Tech CSE'],
    ['Location', personal.location],
    ['Email', personal.email],
  ];

  return (
    <Section id="about" eyebrow="About" title="Full-stack engineering with an AI edge.">
      <div className="about-grid">
        <div className="prose">
          <p>
            I’m Anirudh Battu, a software engineering student focused on building useful,
            production-minded applications across full-stack systems and AI workflows.
          </p>
          <p>
            My work spans React interfaces, Java and Spring Boot APIs, FastAPI services,
            relational databases, vector search, and cloud deployment fundamentals.
          </p>
          <p>
            I enjoy turning fuzzy requirements into clear products, especially when the
            solution needs equal parts system design, clean UI, and practical automation.
          </p>
        </div>
        <div className="facts">
          {facts.map(([label, value]) => (
            <div key={label} className="fact">
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Technical Skills">
      <div className="card-grid">
        {skills.map((group) => (
          <article className="card" key={group.category}>
            <div className="skill-title">
              <span>{group.icon}</span>
              <h3>{group.category}</h3>
            </div>
            <div className="tags">
              {group.items.map((item) => (
                <span className="tag" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="Selected work with practical engineering depth.">
      <div className="project-list">
        {projects.map((project) => (
          <article className="project-card" key={project.name}>
            <div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
            <div className="tags">
              {project.stack.map((item) => (
                <span className="tag" key={item}>
                  {item}
                </span>
              ))}
            </div>
            <ul>
              {project.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
            <div className="project-actions">
              <a href={project.github}>GitHub</a>
              <a href={project.live}>Live Demo</a>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Academic foundation.">
      <div className="timeline">
        {education.map((item) => (
          <article className="timeline-row" key={item.school}>
            <div>
              <h3>{item.school}</h3>
              <p>{item.degree}</p>
              <span>{item.location}</span>
            </div>
            <div className="timeline-meta">
              <strong>{item.year}</strong>
              <span>{item.score}</span>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Certifications() {
  return (
    <Section id="certifications" eyebrow="Certifications" title="Continuous learning signals.">
      <div className="cert-grid">
        {certifications.map((cert) => (
          <a className="cert" key={cert.name} href={cert.file} target="_blank" rel="noreferrer">
            <span className="dot" />
            <div>
              <strong>{cert.name}</strong>
              <p>{cert.issuer}</p>
            </div>
            <span className="view-cert">View PDF</span>
          </a>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  const links = [
    ['Email', `mailto:${personal.email}`, personal.email],
    ['GitHub', personal.github, 'github.com/anirudh1007-ai'],
    ['LinkedIn', personal.linkedin, 'linkedin.com/in/battu-anirudh-7b652a375'],
    ['Resume', personal.resume, 'Download PDF'],
  ];

  return (
    <Section id="contact" eyebrow="Contact" title="Let’s build something useful.">
      <div className="contact-grid">
        <p>
          I’m currently open to full-time software engineering opportunities, internships,
          and collaborative projects involving full-stack development or applied AI.
        </p>
        <div className="contact-links">
          {links.map(([label, href, text]) => (
            <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
              <span>{label}</span>
              <strong>{text}</strong>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="section">
      <div className="section-heading">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {children}
    </section>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <footer>
        <p>© 2026 Anirudh Battu</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
