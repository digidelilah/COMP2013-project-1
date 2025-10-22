import QuanityCounter from "./QuantityCounter";

export default function CartCard({
  id,
  product,
  productName,
  image,
  quantity,
  price,
  handleAddQuanity,
  handleremoveQuanity,
  handleRemoveFromCart
}) {

 function calcPrice(product) {
    const num = parseFloat(product.price.replace("$", ""));
    return num * product.quantity;
    };

  return (
      <div className="CartCard">
            <h4>{productName}</h4>
            <img className="img" src={image} />
            <QuanityCounter className="CartListBtns"
              productQuanity={quantity}
              handleAddQuanity={handleAddQuanity}
              handleremoveQuanity={handleremoveQuanity}
              id={id}
              mode="cart" />
            <p>Total: ${calcPrice({ price, quantity })?.toFixed(2)}</p>
            <button className="RemoveButton"
                onClick={() => {
                  handleRemoveFromCart({ product, quantity, price, id });
                } }>Remove Item
            </button>
      </div>
    
 
  );
}

