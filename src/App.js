import './App.css';
import alimentos from "./foods.json"
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import { useState } from 'react';
import {Input,Button} from "antd"


function App() {
  const [foods, setFoods] = useState(alimentos)
  const [updatedFoods, setUpdatedFoods] = useState(alimentos)
  const [show, setShow] = useState(false)
  

  

  //get the new food from form 

  function updateComida (nuevaComida) {
    
    
    const copia = [...foods, nuevaComida] 

    setFoods(copia)
    setUpdatedFoods(copia)
    
  }
  

 


 //para filtrar datos podemos usar forEach, filter, map

 function filtrarDatos(event){
  
  const texto = event.target.value

  if(event.target.value){
  const datos = updatedFoods.filter(comida => comida.name.includes(texto))
    setUpdatedFoods(datos)
  }else if(!event.target.value){
    setUpdatedFoods(foods)
  }

  // const nuevoArreglo = []
  // // foods.forEach(comida=>{
  // //   if(comida.name.includes(texto)){
  // //     nuevoArreglo.push(comida)
  // //   }
  // // })
 }

 function eliminarComida (event){
  

  const arry = foods.filter(comida =>{
   
       return comida.name !== event
    
  })
  
  setUpdatedFoods(arry)
  setFoods(arry)
   

 }

 function mostrarForm(){
  //this is called toggle below 
      setShow(!show)
  }


  return (
    <div className="App">


    
       {show && <AddFoodForm updateComida={updateComida}></AddFoodForm>}
      <Button onClick={mostrarForm}>{show? "HideForm" : "Showform"}</Button>
      
        <Input onChange={filtrarDatos}/>
        <div className="foods">
          {

            updatedFoods.map(foodie=>{
          
            return <FoodBox key={foodie._id} datos={foodie} eliminarComida={eliminarComida}/>
          })

          }
        </div>

        {foods.length === 0 && <h1>Ops! No More Content</h1>} 
    </div>
  );
}

export default App;
