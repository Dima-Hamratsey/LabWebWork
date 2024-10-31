import React, { useState } from 'react';
import './main.css';
import speedImage from './assets/speed.jpg';
import luxuryImage from './assets/luxury.jpg';
import exclusivityImage from './assets/excluisivity.jpg';
import './footer.css';

const Main = () => {
  const [showMore, setShowMore] = useState(false);

  const handleViewMore = () => {
    setShowMore(!showMore);
  };

  return (
    <main className="main-page">
      <section className="hero-section">
        <h1 className="main-title animate-title">Welcome to Elite Cars</h1>
        <p className="main-description">
          Discover the most exclusive selection of high-end luxury cars, tailored to bring you speed, style, and elegance. 
          Elite Cars is not just a showroom — it’s an experience.
        </p>
        <p className="main-highlight animate-highlight">
          <strong>Our Promise:</strong> Every vehicle in our collection is handpicked for its power, precision, and prestige.
          Experience the thrill of high-performance engines and exquisite designs that turn heads wherever you go.
        </p>
        <p className="main-description">
          <strong>Only at Elite Cars:</strong> We provide personalized consultations, VIP test drives, and an unforgettable journey
          from selection to purchase. Join the Elite and redefine what it means to drive.
        </p>
        <div className="highlights">
          <div className="highlight-item">
            <img src={speedImage} alt="Speed" className="highlight-image" />
            <h3>Unmatched Speed</h3>
            <p>Feel the adrenaline of supercars designed for maximum velocity.</p>
          </div>
          <div className="highlight-item">
            <img src={luxuryImage} alt="Luxury" className="highlight-image" />
            <h3>Ultimate Luxury</h3>
            <p>Indulge in top-notch interiors crafted for comfort and style.</p>
          </div>
          <div className="highlight-item">
            <img src={exclusivityImage} alt="Exclusivity" className="highlight-image" />
            <h3>Exclusivity</h3>
            <p>Join a community of elite car enthusiasts and enjoy exclusive perks.</p>
          </div>
        </div>
        <div className="button-container">
          <button onClick={handleViewMore} className="view-more-button">
            {showMore ? 'Show Less' : 'View More'}
          </button>
          <a href="/catalog" className="explore-button">Explore Our Collection</a>
        </div>
        {showMore && (
          <div className="extra-info">
            <p>Elite Cars goes beyond offering luxury vehicles. We bring you an unparalleled experience with our exclusive selection, personal consultations, and tailored test drives to help you find your dream car.</p>
            <p>Our team of experts is dedicated to ensuring that every aspect of your journey with us meets the highest standards.</p>
          </div>
        )}
      </section>
    </main>
  );
};

export default Main;
