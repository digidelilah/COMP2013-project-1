//presintatinal componet display number of items for each product
//has an increase and decrease button
// value cannot be zero or less

//Brynn Landry 

export default function QuantityCounter({
    productQuantity,
    handleAddQuality,
    handleremoveQuality,
    id,
    mode,
}){
    return(
        <div className="ProductQuantityDiv">
            <div>
                <button onClick={() => handleremoveQuality(id, mode)}>-</button>
            </div>
            <p>{productQuantity}</p>
            <div>
                <button onClick={() => handleAddQuality(id, mode)}>+</button>
            </div>
        </div>
    );
}