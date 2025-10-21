//displays single product card with

import QuantityCounter from "./QuantityCounter";

//button will add to the cart and update cart
//if item is already in cart it will update the quantity
//instead of adding a new item

export default function ProductCard({
  //deconstructing the product will include the handlers
  id,
  productName,
  image,
  brand,
  price,
  quantity,
  handleAddQuanity,
  handleremoveQuanity,
  handleAddToCart,
}) {
  return (
    <div className="ProductCard">
      <h2>{productName}</h2>
      <img src={image} />
      <h3>{brand}</h3>
      <QuantityCounter
        productQuanity={quantity}
        handleAddQuanity={handleAddQuanity}
        handleremoveQuanity={handleremoveQuanity}
        id={id}
      />
      <p>Price: {price}</p>
      <button onClick={()=>handleAddToCart(productQuantity)}>
        Add to Cart
      </button>
    </div>
  );
}

/*const [productQuantity, setQuantity] = useState({
        quantity
    });*/
