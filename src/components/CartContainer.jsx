//will render the list of items chosen by the user
//Will show “No items in the cart.” Otherwise, it will display the number of items in the cart,
// with each item repersented by c cartCard component
//will have empty cart button to clear the cart
//will have a buy button to complete the purchase(show total price)

 export default function CartContainer(
    {cart},
    productQuantity,
    handleAddQuanity, 
    handleremoveQuanity,
){
    return (
        <div className="CartContainer">
            {cart.map((item)=> 
                <CartCard key={item.id} {...item}
                productQuantity={productQuantity}
                handleAddQuanity={handleAddQuanity}
                handleremoveQuanity={handleremoveQuanity}
                handleAddToCart = {handleAddToCart}/>
            )}
        </div>
    );
 }