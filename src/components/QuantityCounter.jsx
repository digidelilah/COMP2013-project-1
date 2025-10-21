//presintatinal componet display number of items for each product
//has an increase and decrease button
// value cannot be zero or less

//Brynn Landry 

export default function QuanityCounter({
    productQuanity,
    handleAddQuanity,
    handleremoveQuanity,
    id,
    mode,
}){
    return(
        <div className="ProductQuantityDiv">
            <button className="QuantityBtn" onClick={() => handleremoveQuanity(id, mode)}>-</button>
            <p>{productQuanity}</p>
            <button className="QuantityBtn" onClick={() => handleAddQuanity(id, mode)}>+</button>
        </div>
    );
}