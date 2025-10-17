//displays single product card with 
import { useState} from "react";
import QuantityCounter from "./QuantityCounter";

//button will add to the cart and update cart
//if item is already in cart it will update the quantity instead of adding a new item

export default function ProductCard( {products} )
{
    const [product] = useState(products);
    //name , image, brand,quantity counter, price and add to cart button \
    return (
        <div className="productCard">
            <h2>{product.name}</h2>
            <img src={product.image} alt={product.name} />
            <h3>{product.brand}</h3>
            <QuantityCounter/>
            <p>${product.price}</p>
            <button>Add to Cart</button>
            </div>
    );
}

