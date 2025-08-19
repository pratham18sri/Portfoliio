import { Link } from 'react-router-dom';
import Background from '../src/Components/Background/Background';
import Welcome from '../src/Components/Welcome/Welcome';
import Coonect from './Components/Connect/connect';
import './App.css';
import logo from './assets/logo.png';
import myphoto from './assets/myphoto.png';
import react from './assets/react.svg';
import javascript from './assets/javascript.png';
import nodejs from './assets/nodejs.jpg';
import mongodb from './assets/mongodb.png';
import gsapi from './assets/gsap.png';
import git from './assets/git.png';
import github from './assets/github.png';
import express from './assets/express.png';
import figma from './assets/figma.png';
import vscode from './assets/vscode.jpg';
import html from './assets/html.jpg';
import css from './assets/css.png';
import jwt from './assets/jwt.png';
import java from './assets/java.png';
import firebase from './assets/firebase.png';
import { useEffect, useRef } from 'react';
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import UpcomingProjects from './Components/upcoming/upcoming';

function App() {
  gsap.registerPlugin(ScrollTrigger);
  
  // Refs for animations
  const nameref = useRef(null);
  const paragraphRef = useRef(null);

  // Name animation
  useEffect(() => {
    gsap.fromTo(nameref.current,
      { x: -100, opacity: 0 },
      { 
        x: 0,
        opacity: 1,
        duration: 4,
        delay: 1,
        ease: "power2.out"
      }
    );
  }, []);

  // Paragraph animation
  useEffect(() => {
    gsap.fromTo(
      paragraphRef.current,
      {
        y: 50,
        opacity: 0,
        filter: 'blur(4px)',
      },
      {
        y: 0,
        opacity: 1,
        filter: 'blur(0px)',
        duration: 3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: paragraphRef.current,
          start: 'top 60%',
        },
      }
    );
  }, []);

  // Projects heading animation
  gsap.fromTo(".projects-heading", {
    backgroundSize: "0% 4px",
    opacity: 0,
  }, {
    backgroundSize: "100% 4px",
    opacity: 1,
    duration: 1.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".projects-heading",
      start: "top 80%",
    }
  });


  const demoItems = [
    { 
      link: 'https://www.linkedin.com/in/pratham-srivastav-8104bb2b8/?trk=public-profile-join-page', 
      text: 'Linkedin', 
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png' 
    },
    { 
      link: 'https://github.com/pratham18sri', 
      text: 'Github', 
      image: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' 
    },
    { 
      link: 'https://leetcode.com/u/pratham_sri/', 
      text: 'Leetcode', 
      image: 'https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png' 
    },
    { 
      link: 'https://www.instagram.com/honey__srivastav__?igsh=MWo5azcxMDIwMTFyZA==', 
      text: 'Instagram', 
      image: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg' 
    }
  ];

  return (
    <>
      <div className='background'>
        <Background />

        {/* Hero Section */}
        <section className='hero-section'>
          <div className="welcome">
            <Welcome/>
          </div>
          <div className="intro">
            <span ref={nameref} className='name'>
              I'm Pratham <br></br>Srivastav
            </span>
            <span className="logo">
              <img src={logo} alt="Logo" />
            </span>
          </div>
        </section>

        {/* About Section */}
        <section className="about-section">
          <div className="photo-container">
            <div className="photo">
              <img src={myphoto} alt="Pratham" />
            </div>
          </div>
          <div className="about-me">
            <h1>About me</h1>
            <p ref={paragraphRef}>
              I am Pratham Srivastav — a dedicated and curious full-stack developer with a strong passion
              for turning ideas into real-world digital experiences. I specialize in building responsive,
              scalable, and user-centric web applications using modern technologies like React, Node.js,
              Express, and MongoDB.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="skills-section">
          <div className="skills-container">
            <div className="top-skills">
              <h1>Top Skills</h1>
              <div className="main-skills">
                <div className="skill-card"><img src={react} alt="React" className="skill-logo" /></div>
                <div className="skill-card"><img src={javascript} alt="JavaScript" className="skill-logo" /></div>
                <div className="skill-card"><img src={nodejs} alt="Node.js" className="skill-logo" /></div>
                <div className="skill-card"><img src={mongodb} alt="MongoDB" className="skill-logo" /></div>
              </div>
            </div>

            <div className="All-skills">
              <h2>Other Skills</h2>
              <div className="skills-grid">
                <div className="skill-item"><img src={react} alt="React" className="skill-icon" /></div>
                <div className="skill-item"><img src={firebase} alt="React" className="skill-icon" /></div>
                <div className="skill-item"><img src={html} alt="HTML" className="skill-icon" /></div>
                <div className="skill-item"><img src={css} alt="CSS" className="skill-icon" /></div>
                <div className="skill-item"><img src={javascript} alt="JavaScript" className="skill-icon" /></div>
                <div className="skill-item"><img src={nodejs} alt="Node.js" className="skill-icon" /></div>
                <div className="skill-item"><img src={express} alt="Express" className="skill-icon" /></div>
                <div className="skill-item"><img src={mongodb} alt="MongoDB" className="skill-icon" /></div>
                <div className="skill-item"><img src={java} alt="Java" className="skill-icon" /></div>
                <div className="skill-item"><img src={git} alt="Git" className="skill-icon" /></div>
                <div className="skill-item"><img src={github} alt="GitHub" className="skill-icon" /></div>
                <div className="skill-item"><img src={figma} alt="Figma" className="skill-icon" /></div>
                <div className="skill-item"><img src={gsapi} alt="GSAP" className="skill-icon" /></div>
                <div className="skill-item"><img src={vscode} alt="VS Code" className="skill-icon" /></div>
                <div className="skill-item"><img src={jwt} alt="JWT" className="skill-icon" /></div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="projects-section">
          <div className='section-header'>
            <h1 className='projects-heading'>Projects</h1>
          </div>

          <div className='project-container'>
            {/* Veda Project Card */}
            <div className="project-card">
              <div className="project-image image4">
                <div className="project-overlay">
                  <h3>Veda Platform</h3>
                  <p>
                    Veda is a modern web platform built with React, offering interactive features and a responsive user experience.
                  </p>
                </div>
              </div>
              <div className="project-details">
                <p className="project-description">
                  Veda is a responsive web application that showcases modern development practices with React. It features a clean UI, smooth animations, and efficient state management. The platform provides users with an intuitive interface for content interaction and management, deployed on Render for reliable performance.
                </p>
                <div className='project-link'>
                  <Link to="https://veda-2-0.onrender.com" target="_blank" rel="noopener noreferrer">
                    <button className="cta-button">
                      <span>Visit Website</span>
                      <svg width="15px" height="10px" viewBox="0 0 13 10">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            {/* End of Veda Project Card */}

            <div className="project-card">
              <div className="project-image image1">
                <div className="project-overlay">
                  <h3>Pasto Application</h3>
                  <p>
                    Pasto is a secure paste manager app built with React and JavaScript. It allows users to save, copy, edit, and delete text snippets.
                  </p>
                </div>
              </div>
              <div className="project-details">
                <p className="project-description">
                  Pasto is a secure and user-friendly paste management app built using React and JavaScript. It enables users to save, edit, copy, and delete text snippets easily. With authentication powered by Clerk, users can securely manage their pastes anytime, making it ideal for quick notes or code snippets.
                </p>
                <div className='project-link'>
                  <Link to="https://pratham-pasto-application.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <button className="cta-button">
                      <span>Visit Website</span>
                      <svg width="15px" height="10px" viewBox="0 0 13 10">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image image2">
                <div className="project-overlay">
                  <h3>CryptoPlace Application</h3>
                  <p>
                    CryptoPlace is a cryptocurrency marketplace web application that provides real-time data and insights.
                  </p>
                </div>
              </div>
              <div className="project-details">
                <p className="project-description">
                  CryptoPlace is a modern cryptocurrency marketplace web app that offers real-time data, price trends, and detailed information about various cryptocurrencies. Using API integration, it provides users with accurate insights, market rankings, and analytics to help them track, compare, and make informed decisions about crypto investments in a user-friendly interface.
                </p>
                <div className='project-link'>
                  <Link to="https://cryptoplace-kappa-orcin.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <button className="cta-button">
                      <span>Visit Website</span>
                      <svg width="15px" height="10px" viewBox="0 0 13 10">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image image3">
                <div className="project-overlay">
                  <h3>Golf-yard Website</h3>
                  <p>
                    I created a dynamic Golf Yard website using HTML, CSS, JavaScript, and GSAP.
                  </p>
                </div>
              </div>
              <div className="project-details">
                <p className="project-description">
                  I developed a visually engaging Golf Yard website for a client using HTML, CSS, JavaScript, and GSAP. The site features smooth scroll animations, an elegant layout, and responsive design to showcase golf courses, services, and events. It offers users an immersive and interactive browsing experience, optimized for all devices.
                </p>
                <div className='project-link'>
                  <Link to="https://golf-website-amber.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <button className="cta-button">
                      <span>Visit Website</span>
                      <svg width="15px" height="10px" viewBox="0 0 13 10">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Connect Section */}
        <h1 className='coonect-headig'>Connect with me</h1>
        <div style={{ height: '400px', position: 'relative' }}>
          <Coonect items={demoItems} />
        </div>

        {/* Fun Facts Section */}
        <section className="fun-facts-section">
          <div className="section-header">
            <h1 className="projects-heading">Beyond Code</h1>
          </div>
          <div className="facts-container">
            <div className="fact-card">
              <div className="fact-icon">📚</div>
              <h3>Continuous Learner</h3>
              <p>Spend 10+ hours/week exploring new tech and frameworks</p>
            </div>
            
            <div className="fact-card">
              <div className="fact-icon">🌱</div>
              <h3>Plant Parent</h3>
              <p>Growing 12+ indoor plants including a fiddle leaf fig</p>
            </div>
            
            <div className="fact-card">
              <div className="fact-icon">✈️</div>
              <h3>Travel Enthusiast</h3>
              <p>Visited 5 countries - next goal: Japan!</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section">
          <div className="contact-container">
            <div className="contact-header">
              <h2 className="contact-title">Get in Touch</h2>
              <p className="contact-subtitle">
                Have a question or want to work together? Send me a message.
              </p>
            </div>
            
            <form className="contact-form">
              <div className="form-group">
                <input type="text" className="form-input" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" className="form-input" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <textarea className="form-textarea" placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </section>
      </div>
    </>
  )
}

export default App;