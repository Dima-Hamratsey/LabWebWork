import React, { useState } from 'react';
import './main.css';
import '../Footer/footer.css'; 


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
            <img src={`${process.env.PUBLIC_URL}/assets/speed.jpg`} alt="Speed" className="highlight-image" />
            <h3>Unmatched Speed</h3>
            <p>Feel the adrenaline of supercars designed for maximum velocity.</p>
          </div>
          <div className="highlight-item">
            <img src={`${process.env.PUBLIC_URL}/assets/luxury.jpg`} alt="Luxury" className="highlight-image" />
            <h3>Ultimate Luxury</h3>
            <p>Indulge in top-notch interiors crafted for comfort and style.</p>
          </div>
          <div className="highlight-item">
            <img src={`${process.env.PUBLIC_URL}/assets/excluisivity.jpg`} alt="Exclusivity" className="highlight-image" />
            <h3>Exclusivity</h3>
            <p>Own unique models that are rare and prestigious.</p>
          </div>
        </div>
        <button className="view-more-btn" onClick={handleViewMore}>
          {showMore ? 'View Less' : 'View More'}
        </button>
        {showMore && (
          <div className="extra-info">
            <h2>Why Choose Elite Cars?</h2>
            <p>
              At Elite Cars, we believe in providing our customers with an unparalleled experience. Our cars are not just about
              speed and luxury; they are about the status, comfort, and quality that you deserve. With exclusive models from 
              world-renowned brands, our selection stands out in performance and class.
            </p>
            <p>
              From the moment you step into our showroom, our team is dedicated to providing exceptional service, guiding you
              through every detail to ensure you find the car that matches your lifestyle. Join the elite family and elevate
              your driving experience.
            </p>
          </div>
        )}
      </section>
    </main>
  );
};

export default Main;