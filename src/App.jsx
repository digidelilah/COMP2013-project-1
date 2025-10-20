import "./App.css";
import ProductsContainer from "./components/ProductsContainer";
import products from "./data/products";

function App() {
  return <>{
   
    <ProductsContainer products={products}/>
  }</>;
}

export default App;
