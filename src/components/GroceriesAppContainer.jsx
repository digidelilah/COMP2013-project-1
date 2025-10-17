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
        products.map((product) => {
            return {
                id: product.id,
                name: product.name,
                image: product.image,
                brand: product.brand,
                quantity: product.quantity,
                priceOptions: product.priceOptions,
                currentPrice: product.priceOptions,
            };
        })
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
    
    const handleAddQuality = (productId) => {
        const newProductQuantity = productQuanity.map((product) => {
            if (product.id === productId) {
                return {...product, quantity: product.quantity + 1};
            }
            return product;
        });
        setProductQuantity(newProductQuantity);
        return;
    };

    const handleremoveQuality = (productId) => {
        const newProductQuantity = productQuanity.map((product) => {
            if (product.id === productId && product.quantity > 0) {
                return {...product, quantity: product.quantity - 1};
            }
            return product;
        });
        setProductQuantity(newProductQuantity);
        return;
    };


}