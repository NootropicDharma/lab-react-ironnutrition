import './App.css';
import comida from "./foods.json"
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';


function App() {


  return (
    <div className="App">
      <AddFoodForm></AddFoodForm>
        <div className="foods">
          {
          comida.map(foodie=>{
            console.log("aqui esta",foodie)
            return <FoodBox key={foodie._id} datos={foodie}/>
          })
          }
        </div>
    </div>
  );
}

export default App;
