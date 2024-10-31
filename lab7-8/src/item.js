import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ItemContext } from './itemcontext';

const Item = () => {
  const { id } = useParams();
  const { items } = useContext(ItemContext);
  const item = items.find((item) => item.id === parseInt(id));

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <div>
      <h2>{item.brand} {item.model}</h2>
      <p>Power: {item.power} hp</p>
      <p>Max Speed: {item.maxSpeed} km/h</p>
      {/* Відображення додаткової інформації про елемент */}
    </div>
  );
};

export default Item;
