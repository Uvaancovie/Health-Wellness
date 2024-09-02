import React, { useState, useEffect } from 'react';
import './Carousel.css';

const facts = [
  "Improved Core Strength: It targets the core muscles, enhancing overall stability and strength.",
  "Increased Flexibility: The exercises stretch and lengthen muscles, improving flexibility.",
  "Better Posture: Reformer Pilates promotes proper alignment, leading to better posture.",
  "Enhanced Balance: It improves coordination and balance through controlled movements.",
  "Low-Impact Exercise: It's gentle on the joints, making it suitable for various fitness levels.",
  "Rehabilitation: Effective for injury recovery and physical therapy."
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % facts.length);
    }, 3000); // Change fact every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      <p>{facts[currentIndex]}</p>
    </div>
  );
};

export default Carousel;
