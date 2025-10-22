//handle all states and functions
//will import the data from products.js
//and pass to inventory component

// by brynn landry
import { useState } from "react";
import products from "../data/products.js";
import ProductsContainer from "./ProductsContainer";
import CartContainer from "./CartContainer.jsx";
import NavBar from "./NavBar.jsx";

export default function GroceriesApp() {
   
  const [productQuantity, setProductQuantity] = useState(
    products.map((product) => ({
      ...product,
      quantity:0, 
    }))
  );


  const [cart, setcart] = useState([]);


  const handleAddQuanity = (productId, mode) => {
    if (mode === "cart") {
    const newCart = cart.map((item) => {
      if (item.id === productId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setcart(newCart);
  } else {
    const newProductQuantity = productQuantity.map((product) => {
      if (product.id === productId) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });
    setProductQuantity(newProductQuantity);
  }
};

  const handleremoveQuanity = (productId, mode) => {
    if (mode === "cart") {
    const updatedCart = cart.map((item) =>
      item.id === productId && item.quantity > 0
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setcart(updatedCart);
  } else {
    const updatedProducts = productQuantity.map((product) =>
      product.id === productId && product.quantity > 0
        ? { ...product, quantity: product.quantity - 1 }
        : product
    );
    setProductQuantity(updatedProducts);
  }
};

 
  const handleAddToCart = (productToAdd) => {
    const currentProduct = productQuantity.find((prod) => prod.id === productToAdd.id);
    const productInCart = cart.find(
      (product) => product.id === productToAdd.id
    );
    if (productToAdd.quantity === 0) {
      alert("Please add quantity before adding to cart!");
      return;
    }

    if (!productInCart) {
      setcart((prevCart) => {
        return [
          ...prevCart,
          { ...currentProduct, quantity: productToAdd.quantity },
        ];
      });
    }
  };

  const handleRemoveFromCart = (cartItem) =>{
    const filteredCart = cart.filter((item) => item.id !== cartItem.id);
    setcart(filteredCart);
 }

 const handleRemoveAll = () =>{
    setcart([]);
 };

  return (
   
    <div >
        <div className="NavDiv">
            <NavBar cart ={cart}/>
        </div>
        <div className="GroceriesApp-Container">
            <div>
                <ProductsContainer
                    products={productQuantity}
                    handleAddQuanity={handleAddQuanity}
                    handleremoveQuanity={handleremoveQuanity}
                    setProductQuantity={setProductQuantity}
                    handleAddToCart={handleAddToCart}
                />
            </div>
            <div>
                <h3>Cart</h3>
                <p>{cart.length === 0 && "Cart is empty!"}</p>
                <CartContainer cart={cart} 
                    handleRemoveFromCart={handleRemoveFromCart}
                    handleAddQuanity={handleAddQuanity}
                    handleremoveQuanity={handleremoveQuanity}
                    handleRemoveAll = {handleRemoveAll}
                />
            </div>
        </div>
    </div>
  );
}
