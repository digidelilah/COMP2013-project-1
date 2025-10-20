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
        <div className="ProductQuanityDiv">
            <div className="QuantityBtn">
                <button onClick={() => handleremoveQuanity(id, mode)}>-</button>
            </div>
            <p>{productQuanity}</p>
            <div className="QuantityBtn">
                <button onClick={() => handleAddQuanity(id, mode)}>+</button>
            </div>
        </div>
    );
}