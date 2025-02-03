import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div>
      <header>
        <h1>Houseplant Store</h1>
        <p>Your one-stop shop for beautiful houseplants</p>
        <Link to="/products">
          <button>Get Started</button>
        </Link>
      </header>
      <section>
        <img src="background-image-url.jpg" alt="Houseplants" style={{ width: '100%' }} />
      </section>
    </div>
  );
};

export default LandingPage;
