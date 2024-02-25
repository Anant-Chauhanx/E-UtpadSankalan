import React from 'react';
import { Link } from 'react-router-dom';
import './TextNavbar.css';

const FactBar = () => {
  return (
    <section className="TextNavbar">
      <div className="fact-content overflow-hidden">
        <p>Did you know? E-waste is the worlds fastest-growing trash stream. Recycle your electronics responsibly!</p>
      </div>
      <div className="learn-more">
        <Link className="learn-more-link" to="/faq">Learn More</Link>
      </div>
    </section>
  );
};
 
export default FactBar;