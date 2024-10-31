import React from 'react';
import facebook from './assets/facebook.png';
import instagram from './assets/instagram.png';
import twitter from './assets/twiter.png';

const Footer = () => {
  return (
    <footer>
      <p>© 2024 Elite Cars. All rights reserved.</p>
      <div className="social-icons">
        <a href="#"><img src={facebook} alt="Facebook" /></a>
        <a href="https://www.instagram.com/dmytro_hamratsey?igsh=Yjd6Yjdhb2xvdTB3&utm_source=qr">
          <img src={instagram} alt="Instagram" />
        </a>
        <a href="#"><img src={twitter} alt="Twitter" /></a>
      </div>
    </footer>
  );
};

export default Footer;
