import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Item from "./components/Item";

function App() {
  let foodItems =["Vegetabls","Fruits","Milk","Salads","Smoothy","Chocolate" ]
  return (
    <>
    <h1>Healthy Food</h1>
    {/* <ErrorMessage items={foodItems} /> */}
    <FoodItems items={foodItems} />
    <Item/>
</>
    
  );
}

export default App;
