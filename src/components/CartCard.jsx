export default function CartCard ({
    item, 
    image,
    quantity, 
    price,
    handleAddQuanity,
    handleremoveQuanity,
}){
    return(
        <div className="CartCard">
            <h2>{item}</h2>
            <img src={image} />
            <QuantityCounter
                productQuanity={quantity}
                handleAddQuanity={handleAddQuanity}
                handleremoveQuanity={handleremoveQuanity}
                id={id}
            />
            <p>{(quantity * price).toFixed}</p>
            <button className="RemoveButton">Remove Item</button>
        </div>
    )
}