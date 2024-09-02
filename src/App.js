import React, { useEffect, useState } from 'react';
import './App.css';
import BentoCard from './BentoCard';
import Carousel from './Carousel';
import Tabs from './Tabs';
import PricingCard from './PricingCard';
import ContactForm from './ContactForm';
import CalendarComponent from './CalendarComponent';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function Home() {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [currentSlide, setCurrentSlide] = useState(0);

  const textArray = ["Transform Your Body & Mind", "Join Zayna Shah for Pilates"];
  const images = [
    "https://images.unsplash.com/photo-1604467731651-3d8b9c702b86?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1717500251664-de591354b678?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1717500252711-fe8cf2ff1085?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % textArray.length;
      const fullText = textArray[i];

      setDisplayText(isDeleting ? fullText.substring(0, displayText.length - 1) : fullText.substring(0, displayText.length + 1));

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const typingTimeout = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingTimeout);
  }, [displayText, isDeleting, loopNum, typingSpeed, textArray]);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 4000); // 4-second interval for the slideshow

    return () => clearInterval(slideInterval);
  }, [images.length]);

  return (
    <div className="App">
      <div className="banner">
        <p>Sale: £30 per season of 1 hour</p>
      </div>
      <header className="navbar">
        <div className="logo">
          ReformHer Pilates
        </div>
        <nav className="nav-links">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="menu-toggle">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="slideshow">
          {images.map((image, index) => (
            <div
              key={index}
              className={`slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          ))}
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h2 className="animated-title">
            <span>{displayText}</span>
          </h2>
          <p>Experience the transformative power of Pilates in a calm, minimalistic, and futuristic environment.</p>
          <a href="#services" className="btn">Get Started</a>
        </div>
      </section>

      <section className="about" id="about">
        <h2>About Zayna Shah</h2>
        <p>
          Zayna Shah is a passionate advocate for physical and mental well-being, with a deep commitment to helping the people of Leamington Spa through ReformHer Pilates. 
          With years of experience in the field, Zayna has honed her skills and techniques, making her a leading expert in Pilates. 
          Her journey began with a desire to make a difference in her community, focusing on empowering individuals through the art of movement.
        </p>
        <p>
          Zayna believes that Pilates is more than just exercise; it's a path to holistic health, fostering both physical strength and mental clarity. 
          Her classes are designed to accommodate people of all ages and fitness levels, ensuring that everyone can benefit from her expertise. 
          Through ReformHer Pilates, Zayna aims to create a supportive and inclusive environment where everyone can achieve their personal best.
        </p>
        <p>
          Based in the heart of Leamington Spa, Zayna is dedicated to making a positive impact in the community, one session at a time.
          Join her at ReformHer Pilates and discover the transformative power of movement.
        </p>
        <Link to="/about" className="btn about-btn">Learn More</Link>
      </section>

      <section className="classes">
        <h2>Our Classes</h2>
        <div className="bento-grid">
          <BentoCard
            title="10 Lessons a Month"
            description="Perfect for those looking to immerse themselves in the practice."
            level="Medium"
            lessons="10"
          />
          <BentoCard
            title="5 Lessons a Month"
            description="A great option for those with a busy schedule."
            level="Medium"
            lessons="5"
          />
          <BentoCard
            title="1 on 1 Lesson"
            description="Personalized attention to meet your specific needs."
            level="Easy"
            lessons="1"
          />
          <BentoCard
            title="2 People Lesson"
            description="Partner up for a challenging and rewarding experience."
            level="Hard"
            lessons="1"
          />
        </div>
      </section>

      <section className="pricing-section">
        <Tabs>
          <div title="Classes">
            <PricingCard
              title="Reformer Pilates"
              price="£125 FOR 5 CLASSES."
              description="Save £25 and commit to your fitness journey."
            />
            <PricingCard
              title="Reformer Pilates"
              price="£220 FOR 10 CLASSES."
              description="Save £80 and enjoy consistent, guided progress."
            />
          </div>
          <div title="Private">
            <PricingCard
              title="Reformer Pilates"
              price="Private Class for 2: £70."
              description="Share the experience and motivation with a friend."
            />
            <PricingCard
              title="Reformer Pilates"
              price="1-1 Private Session: £55."
              description="Get personalized attention to maximize your results."
            />
          </div>
        </Tabs>
      </section>

      <section className="carousel-section">
        <Carousel />
      </section>

      <section className="contact-section">
        <ContactForm />
        <CalendarComponent />
      </section>
    </div>
  );
}

function AboutPage() {
  return (
    <div className="about-page">
      <h1>About Zayna Shah and ReformHer Pilates</h1>
      <p>More detailed information about Zayna Shah, her background, philosophy, and how ReformHer Pilates is making an impact in Leamington Spa.</p>
      {/* Add more content about Zayna Shah and ReformHer Pilates here */}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}
