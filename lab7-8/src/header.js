import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/catalog">Catalog</Link></li>
          <li><Link to="/create">Create Car</Link></li>
          <li><Link to="/edit">Edit Car</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
