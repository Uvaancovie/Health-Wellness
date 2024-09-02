import React from 'react';
import './BentoCard.css';

function BentoCard({ title, description, level, lessons }) {
  return (
    <div className="bento-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className={`level-bar ${level.toLowerCase()}`}>
        <span>{level} Level</span>
      </div>
      <p className="lessons">Number of Lessons: {lessons}</p>
    </div>
  );
}

export default BentoCard;
