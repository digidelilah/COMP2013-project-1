//displays single product card with 

import { useState } from "react";

//button will add to the cart and update cart
//if item is already in cart it will update the quantity 
//instead of adding a new item

export default function ProductCard({product}) {
    return (
        <div className="productCard">
            <h1>{product.productName}</h1>
            <img src={product.image} alt={product.name} />
            <h2>{product.brand}</h2>
            
            <p>Price: {product.price}</p>
            <button>Add to Cart</button>
        </div>
    )
}


/*const [productQuantity, setQuantity] = useState({
        quantity
    });*/