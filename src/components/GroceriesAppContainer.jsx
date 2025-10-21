//handle all states and functions
//will import the data from products.js
//and pass to inventory component

// by brynn landry
import { useState } from "react";
import products from "../data/products.js";
import ProductsContainer from "./ProductsContainer";
import CartContainer from "./CartContainer.jsx";

export default function GroceriesApp() {
  const [productQuanity, setProductQuantity] = useState(
    products.map((product) => ({
      ...product,
      quantity: 0, //the quantity is always zero as the data is different in this project
    }))
  );

  //cart state with empty array 
  const [cart,setcart] = useState([]);



  const handleOnChangePrice = (productId, e) => {
    const newProductQuantity = productQuanity.map((product) => {
      if (product.id === productId) {
        return { ...product, currentPrice: e.target.value };
      }
      return product;
    });
    setProductQuantity(newProductQuantity);
    return;
  };

  const handleAddQuanity = (productId, mode) => {
    //you forgot mode here as a parameter. Will be needed later in the cart
    const newProductQuantity = productQuanity.map((product) => {
      if (product.id === productId) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });
    setProductQuantity(newProductQuantity);
    return;
  };

  const handleremoveQuanity = (productId, mode) => {
    //you forgot mode here as a parameter. Will be needed later in the cart
    const newProductQuantity = productQuanity.map((product) => {
      if (product.id === productId && product.quantity > 0) {
        return { ...product, quantity: product.quantity - 1 };
      }
      return product;
    });
    setProductQuantity(newProductQuantity);
    return;
  };

  //adding product to cart
 const handleAddToCart = (productToAdd) => {
    //1. click button and add to cart if product is not there
    //2. if product is there, quantity will go up 
    //3. if user adds to cart but quantity is zero, send alert
    const currentProduct = product.find((prod) => prod.id === productToAdd.id)
      //to check if it in in cart
    const productInCart = cart.find((product) => product.id === productToAdd.id) 
    if(productToAdd === 0){
        alert("Please add quantity before adding to cart!");
        return;
    }
 
    if(!productInCart){
        setcart((prevCart) => {
            return [...prevCart, 
                {...currentProduct,
                    quantity: productToAdd
                }]
        })
    }
 };

  return (
    
    <div className="groceriesAppContainer">
        <div>
            <ProductsContainer
            products={productQuanity}
            handleAddQuanity={handleAddQuanity}
            handleremoveQuanity={handleremoveQuanity}
            //handleOnChangePrice={handleOnChangePrice}
            setProductQuantity={setProductQuantity}
            handleAddToCart = {handleAddToCart}
            />    
      </div>
      <div>
        <h3>Cart</h3>
        <CartContainer cart={cart}/>
      </div>
    </div>
  );
}
