import { useState, useEffect } from 'react';
import "./../styles/Hero.css";
import profilePic from "../assets/professional.jpg";

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const fullText = "I'm a technology professional passionate about building intuitive and efficient software solutions. Welcome to my portfolio!";
  const typingSpeed = 15; // Faster typing in milliseconds

  // Title fade-up animation
  useEffect(() => {
    const timer = setTimeout(() => setShowTitle(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Typewriter effect
  useEffect(() => {
    if (!showTitle) return;
    
    const startTyping = setTimeout(() => {
      if (displayedText.length < fullText.length) {
        // Add multiple characters at once for much faster typing
        const charsToAdd = Math.min(1, fullText.length - displayedText.length);
        const timeout = setTimeout(() => {
          setDisplayedText(fullText.slice(0, displayedText.length + charsToAdd));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        setIsTypingComplete(true);
      }
    }, 800); // Reduced delay

    return () => clearTimeout(startTyping);
  }, [displayedText, fullText, showTitle]);

  // Mouse tracking for glow effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Smooth scroll to next section
  const scrollToNext = () => {
    const nextSection = document.querySelector('#about') || 
                      document.querySelector('section:nth-child(2)') ||
                      document.querySelector('.about');
    
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      {/* Interactive background glow that follows mouse */}
      <div 
        className="mouse-glow" 
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
      ></div>

      <div className="hero-container">
        <div className="hero-text">
          <h1 className={`hero-title ${showTitle ? 'fade-up' : ''}`}>
            KYLE PILON
          </h1>
          <p className="hero-description">
            {displayedText}
            <span className={`cursor ${isTypingComplete ? 'fade-out' : ''}`}>|</span>
          </p>
        </div>
        
        <div className="hero-image">
          <div className="image-container">
            <img src={profilePic} alt="Kyle Pilon" />
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator" onClick={scrollToNext}>
        <div className="scroll-chevron">
          <span></span>
          <span></span>
        </div>
        <span className="scroll-text">Scroll down to see my work!</span>
      </div>
    </section>
  );
};

export default Hero;