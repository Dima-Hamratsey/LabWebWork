import React, { useState } from 'react';
import './createcar.css';
import './footer.css';

const CreateCar = () => {
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [power, setPower] = useState('');
  const [maxSpeed, setMaxSpeed] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCar = { brand, model, power, maxSpeed, image };
    
    console.log('Нова машина:', newCar);
  };

  return (
    <div className="create-car-page">
      <h2>Створити нову машину</h2>
      <form onSubmit={handleSubmit} className="create-car-form">
        <label>
          Бренд:
          <input type="text" value={brand} onChange={(e) => setBrand(e.target.value)} />
        </label>
        <label>
          Модель:
          <input type="text" value={model} onChange={(e) => setModel(e.target.value)} />
        </label>
        <label>
          Потужність:
          <input type="number" value={power} onChange={(e) => setPower(e.target.value)} />
        </label>
        <label>
          Макс. швидкість:
          <input type="number" value={maxSpeed} onChange={(e) => setMaxSpeed(e.target.value)} />
        </label>
        <label>
          Фото:
          <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        </label>
        <button type="submit">Зберегти</button>
      </form>
    </div>
  );
};

export default CreateCar;
