import React, {useState} from "react";

function NewPlantForm({plantList, onAddNewPlant}) {
  const [formData, setFormData] = useState({
    name:"",
    image:"",
    price:""
  })
  function handleSubmit(e){
    e.preventDefault()
    fetch("http://localhost:6001/plants",{
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(r=>r.json())
    .then(data=>{    
      const newPlant = [
      ...plantList,
      data
      ]
    onAddNewPlant(newPlant)
    })
  }
  function handleChange(e){
    if(e.target.name==="price"){
      setFormData({
        ...formData,
        [e.target.name]: parseFloat(e.target.value)
      })
    }else{
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      })
    }
  }
  
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={formData.name} onChange={handleChange}/>
        <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange}/>
        <input type="number" name="price" step="0.01" placeholder="Price" value={formData.price} onChange={handleChange}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
