import React, { useState, useContext } from 'react';
import { CarContext } from './carcontext';

import './editcar.css';


const EditCar = () => {
  const { cars, updateCar } = useContext(CarContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCar, setSelectedCar] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleSearch = () => {
    const foundCars = cars.filter(car => car.brand.toLowerCase().includes(searchTerm.toLowerCase()));
    if (foundCars.length > 0) {
      setSelectedCar(foundCars[0]); 
    } else {
      alert("Car not found!");
      setSelectedCar(null);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedCar(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdate = () => {
    if (selectedCar) {
      updateCar(selectedCar);
      setIsEditing(false);
      alert("Car updated successfully!");
    }
  };

  return (
    <div className="edit-car-page">
      <h1 className="edit-title">Edit Your Car</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter car name to search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <button onClick={handleSearch} className="search-btn">Search</button>
      </div>

      {selectedCar && (
        <div className={`edit-modal ${isEditing ? 'show' : ''}`}>
          <div className="modal-content">
            <h2 className="modal-title">Editing: {selectedCar.brand} {selectedCar.model}</h2>
            <label>Brand:</label>
            <input
              type="text"
              name="brand"
              value={selectedCar.brand}
              onChange={handleInputChange}
              className="modal-input"
            />
            <label>Model:</label>
            <input
              type="text"
              name="model"
              value={selectedCar.model}
              onChange={handleInputChange}
              className="modal-input"
            />
            <label>Power:</label>
            <input
              type="number"
              name="power"
              value={selectedCar.power}
              onChange={handleInputChange}
              className="modal-input"
            />
            <label>Max Speed:</label>
            <input
              type="number"
              name="maxSpeed"
              value={selectedCar.maxSpeed}
              onChange={handleInputChange}
              className="modal-input"
            />
            <label>Photo:</label>
            <input
              type="file"
              name="photo"
              className="modal-input"
            />
            <div className="modal-buttons">
              <button onClick={() => setIsEditing(false)} className="cancel-btn">Cancel</button>
              <button onClick={handleUpdate} className="save-btn">Save Changes</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditCar;
