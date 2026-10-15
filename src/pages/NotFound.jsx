import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
     <div className="not-found">
      <h2>Page not found</h2>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" className="home-link">Go back to Home</Link>
     </div>
  );
}
