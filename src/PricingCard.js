import React from 'react';
import './PricingCard.css';

function PricingCard({ title, price, description }) {
  return (
    <div className="pricing-card">
      <h3>{title}</h3>
      <p className="price">{price}</p>
      <p>{description}</p>
    </div>
  );
}

export default PricingCard;
