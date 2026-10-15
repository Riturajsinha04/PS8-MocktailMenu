import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home-hero">
      <div className="hero-content">
        <h1>Welcome to Mocktail Menu</h1>
        <p>Discover our refreshing collection of delicious non-alcoholic drinks crafted for everyone.</p>
        <Link to="/drinks" className="hero-btn">See menu</Link>
      </div>
    </div>
  );
}
