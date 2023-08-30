import React, { useState, useEffect } from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, setPlants }) {

  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then(r => r.json())
      .then(data => setPlants(data))
  }, [])
  // console.log(plants)

  const plantsCards = plants.map((plant) => {
    return <PlantCard key={plant.id} plant={plant} />
  })

  return (
    <ul className="cards">
      {plantsCards}
    </ul>

  );
}

export default PlantList;
