
import React, { createContext, useState } from 'react';
import { cars } from './car_stock';

export const CarContext = createContext();

export const CarProvider = ({ children }) => {
  const [carList, setCarList] = useState(cars);
  const [totalSpeed, setTotalSpeed] = useState(0);

  const handleSearch = (searchTerm) => {
    const filteredCars = cars.filter(car => car.brand.toLowerCase().includes(searchTerm.toLowerCase()));
    setCarList(filteredCars);
  };

  const handleSortAsc = () => {
    const sortedCars = [...carList].sort((a, b) => a.power - b.power);
    setCarList(sortedCars);
  };

  const handleSortDesc = () => {
    const sortedCars = [...carList].sort((a, b) => b.power - a.power);
    setCarList(sortedCars);
  };

  const handleTotalSpeed = () => {
    const total = carList.reduce((sum, car) => sum + car.maxSpeed, 0);
    setTotalSpeed(total);
  };

  return (
    <CarContext.Provider
      value={{
        carList,
        totalSpeed,
        handleSearch,
        handleSortAsc,
        handleSortDesc,
        handleTotalSpeed
      }}
    >
      {children}
    </CarContext.Provider>
  );
};
