import "./App.css";
import GroceriesApp from "./components/GroceriesAppContainer";
import ProductsContainer from "./components/ProductsContainer";
import products from "./data/products";

function App() {
  return <>{
    <GroceriesApp products={products} />
  }</>;
}

export default App;
