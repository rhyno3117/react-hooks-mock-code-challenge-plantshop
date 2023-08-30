import React, { useState } from "react";

function PlantCard({ plant }) {
  const [markPlant, setMarkPlant] = useState(true)
  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {markPlant ? (
        <button onClick={() => setMarkPlant(!markPlant)} className="primary">In Stock</button>
      ) : (
        <button onClick={() => setMarkPlant(!markPlant)}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
