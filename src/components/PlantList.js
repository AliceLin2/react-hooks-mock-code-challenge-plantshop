import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantList, searchTerm}) {
  const filterPlantList = plantList.filter((plant)=>{
    return plant.name.toLowerCase().includes(searchTerm)
  })
  return (
    <ul className="cards">{filterPlantList.map((plant)=><PlantCard key={plant.id} plant={plant}/>)}</ul>
  );
}

export default PlantList;
