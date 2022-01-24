import React, {useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plantList, setPlantList] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(()=>{
    fetch("http://localhost:6001/plants")
    .then(r=>r.json())
    .then(data=>setPlantList(data))
  },[])

  return (
    <main>
      <NewPlantForm plantList={plantList} onAddNewPlant={setPlantList}/>
      <Search searchTerm={searchTerm} onSearch={setSearchTerm}/>
      <PlantList searchTerm={searchTerm} plantList={plantList}/>
    </main>
  );
}

export default PlantPage;
