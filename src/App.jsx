import "./App.css";
import GroceriesApp from "./components/GroceriesAppContainer";
import NavBar from "./components/NavBar";
import ProductsContainer from "./components/ProductsContainer";
import products from "./data/products";

function App() {
  return <>
    <NavBar/>
    <GroceriesApp products={products}/>
    //<ProductsContainer products={products}/>
  </>;
}

export default App;
