//renders all products from the product card component

import ProductCard from "./ProductCard";

export default function ProductsContainer( {products} )
{
    return (
        <div className="productsContainer">
            {products.map( (product) => 
                <ProductCard key={product.id} {...product} />
            )}
        </div>

    );
}