import { useRef } from 'react';
import jarvisImage from '../../assets/jarvis.png';
import procareImage from '../../assets/procare.png';
import './upcoming.css';

const UpcomingProjects = () => {
  const cardsRef = useRef([]);

  const handleCardClick = (index) => {
    const card = cardsRef.current[index];
    card.classList.toggle('flipped');
  };

  return (
    <section className="upcoming-projects-section">
      <div className='section-header'>
        <h1 className='upcoming-projects-heading'>Upcoming Projects</h1>
      </div>

      <div className="upcoming-projects-container">
        {/* Card 1 - AI Chatbot Assistant */}
        <div 
          className="flip-card" 
          ref={el => cardsRef.current[0] = el}
          onClick={() => handleCardClick(0)}
        >
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <div className="upcoming-project-image">
                <img 
                  src={jarvisImage} 
                  alt="AI Chatbot Assistant" 
                  className="project-card-image"
                />
                <div className="project-card-overlay">
                  <h3>AI Chatbot Assistant</h3>
                  <p>Click to learn more</p>
                </div>
              </div>
            </div>
            <div className="flip-card-back">
              <div className="back-content">
                <h3>JARVIS-like AI Assistant</h3>
                <p>
                  An advanced AI chatbot assistant inspired by Tony Stark's JARVIS from Iron Man. 
                  Features natural language processing, voice recognition, and smart home integration.
                </p>
                <div className="tech-stack">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>OpenAI API</span>
                  <span>Web Speech API</span>
                </div>
                <div className="status-badge">In Development</div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 - ProCare Property Care */}
        <div 
          className="flip-card" 
          ref={el => cardsRef.current[1] = el}
          onClick={() => handleCardClick(1)}
        >
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <div className="upcoming-project-image">
                <img 
                  src={procareImage} 
                  alt="ProCare Property Care" 
                  className="project-card-image"
                />
                <div className="project-card-overlay">
                  <h3>ProCare Property Care</h3>
                  <p>Click to learn more</p>
                </div>
              </div>
            </div>
            <div className="flip-card-back">
              <div className="back-content">
                <h3>Property Management Platform</h3>
                <p>
                  A startup platform connecting property owners with trusted caretakers. 
                  Owners can list properties and our vetted caretakers handle guest check-ins 
                  and maintenance.
                </p>
                <div className="tech-stack">
                  <span>React.js</span>
                  <span>Firebase</span>
                  <span>Stripe</span>
                  <span>Google Maps API</span>
                </div>
                <div className="status-badge">Planning Phase</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingProjects;