import React, { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState("")
  console.log(plants)

  const filterPlants = plants.filter((plants) => {
    console.log(plants.name)
    console.log(search)
    return plants.name.toLowerCase().includes(search.toLowerCase())

  })

  // console.log(handleAddPlant)
  return (
    <main>
      <NewPlantForm plants={plants} setPlants={setPlants} />
      <Search plants={plants} setPlants={setPlants} setSearch={setSearch} />
      <PlantList plants={filterPlants} setPlants={setPlants} />
    </main>
  );
}

export default PlantPage;
