import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchCarDetails, addToCart } from '../../utils/api';
import './item.css';

const Item = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState(null);
  const [selectedConfig, setSelectedConfig] = useState('Базова');
  const [selectedCount, setSelectedCount] = useState(1);

  useEffect(() => {
    const loadCarDetails = async () => {
      try {
        const data = await fetchCarDetails(id);
        setCar(data);
      } catch (error) {
        console.error('Помилка отримання даних автомобіля:', error);
      }
    };

    loadCarDetails();
  }, [id]);

  const handleAddToCart = async () => {
    try {
      await addToCart({
        id: car.id,
        configuration: selectedConfig,
        count: selectedCount,
      });
      alert('Машина додана до кошика!');
    } catch (error) {
      console.error('Помилка додавання до кошика:', error);
    }
  };

  if (!car) {
    return <div>Машина не знайдена</div>;
  }

  return (
    <div className="car-details-page">
      <h2>{car.brand} {car.model}</h2>
      <img src={`http://localhost:5007${car.image}`} alt={car.model} />
      <p>Потужність: {car.power} hp</p>
      <p>Макс. швидкість: {car.maxSpeed} км/год</p>

      <div className="select-field">
        <label>Комплектація:</label>
        <select value={selectedConfig} onChange={(e) => setSelectedConfig(e.target.value)}>
          <option value="Базова">Базова</option>
          <option value="Комфорт">Комфорт</option>
          <option value="Спорт">Спорт</option>
          <option value="Люкс">Люкс</option>
        </select>
      </div>

      <div className="select-field">
        <label>Кількість:</label>
        <select value={selectedCount} onChange={(e) => setSelectedCount(Number(e.target.value))}>
          {Array.from({ length: 20 }, (_, i) => i + 1).map(count => (
            <option key={count} value={count}>{count}</option>
          ))}
        </select>
      </div>

      <div className="button-group">
        <button className="add-to-cart" onClick={handleAddToCart}>Додати до кошика</button>
        <button className="go-back" onClick={() => navigate(-1)}>Назад</button>
      </div>
    </div>
  );
};

export default Item;
