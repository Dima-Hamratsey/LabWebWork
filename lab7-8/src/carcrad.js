import React from 'react';
import './carcrad.css';

const CarCard = ({ car }) => {
  return (
    <div className="car-card">
      <img src={car.image} alt={`${car.brand} ${car.model}`} />
      <div className="car-info">
        <p><strong>Марка:</strong> {car.brand}</p>
        <p><strong>Модель:</strong> {car.model}</p>
        <p><strong>Потужність:</strong> {car.power} hp</p>
        <p><strong>Макс. швидкість:</strong> {car.maxSpeed} км/год</p>
      </div>
    </div>
  );
};

export default CarCard;
