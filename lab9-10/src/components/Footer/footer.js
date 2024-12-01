import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2024 Elite Cars. All rights reserved.</p>
      <div className="social-icons">
        <a href="#"><img src="/assets/facebook.png" alt="Facebook" /></a>
        <a href="https://www.instagram.com/dmytro_hamratsey?igshid=Yjd6Yjdhb2xvdTB3&utm_source=qr">
          <img src="/assets/instagram.png" alt="Instagram" />
        </a>
        <a href="#"><img src="/assets/twitter.png" alt="Twitter" /></a>
      </div>
    </footer>
  );
};

export default Footer;
