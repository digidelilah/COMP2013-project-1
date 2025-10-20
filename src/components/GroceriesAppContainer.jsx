//handle all states and functions 
//will import the data from products.js 
//and pass to inventory component

// by brynn landry 
import { useState } from "react";
import products from "../data/products.js";
import ProductsContainer from "./ProductsContainer";

export default function GroceriesApp()
{

    const [productQuanity, setProductQuantity] = useState(
        products.map((product) => ({
            ...product,
            quantity: product.quantity || 0,
            price: product.price,
        }))
    );    

   const handleOnChangePrice = (productId,e) => {
        const newProductQuantity = productQuanity.map((product) => {
            if (product.id === productId) {
                return {...product, currentPrice: e.target.value};
            }
            return product;
        });
        setProductQuantity(newProductQuantity);
        return;
    };
    
    const handleAddQuanity = (productId) => {
        const newProductQuantity = productQuanity.map((product) => {
            if (product.id === productId) {
                return {...product, quantity: product.quantity + 1};
            }
            return product;
        });
        setProductQuantity(newProductQuantity);
        return;
    };

    const handleremoveQuanity = (productId) => {
        const newProductQuantity = productQuanity.map((product) => {
            if (product.id === productId && product.quantity > 0) {
                return {...product, quantity: product.quantity - 1};
            }
            return product;
        });
        setProductQuantity(newProductQuantity);
        return;
    };


    return (
        <div className="groceriesAppContainer">
            <ProductsContainer 
                products={productQuanity} 
                handleAddQuanity={handleAddQuanity}
                handleremoveQuanity={handleremoveQuanity}
                //handleOnChangePrice={handleOnChangePrice}
                setProductQuantity={setProductQuantity} 
            />
        </div>
    );
}
