// Catalog.js
import React, { useContext } from 'react';
import { CarContext } from './carcontext';
import CarCard from './carcrad';
import './catalog.css';
import './button.css';
import './footer.css';


const Catalog = () => {
  const { carList, totalSpeed, handleSearch, handleSortAsc, handleSortDesc, handleTotalSpeed } = useContext(CarContext);

  return (
    <div className="catalog-page">
      <div className="controls" style={{ textAlign: 'center', marginBottom: '20px' }}>
        <button onClick={handleSortAsc}>Sort by Power (down)</button>
        <button onClick={handleSortDesc}>Sort by Power (up)</button>
        <input type="text" placeholder="Search by brand" onChange={(e) => handleSearch(e.target.value)} />
        <button onClick={handleTotalSpeed}>Count Total Speed</button>
      </div>
      <div id="total-speed-container" style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h3>Total Max Speed of Cars in Catalog: <span>{totalSpeed}</span> km/h</h3>
      </div>
      <div className="catalog-grid">
        {carList.map((car, index) => (
          <CarCard key={index} car={car} />
        ))}
      </div>
    </div>
  );
};

export default Catalog;
