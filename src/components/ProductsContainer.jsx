//renders all products from the product card component

import ProductCard from "./ProductCard";

export default function ProductsContainer({
  products, 
  productQuantity,
  handleAddQuanity, 
  handleremoveQuanity,
  handleAddToCart,
})
{
    return (
        <div className="ProductsContainer">
            {products.map((product) => (
                <ProductCard key={product.id} {...product}
                 productQuantity={productQuantity}
                 handleAddQuanity={handleAddQuanity}
                 handleremoveQuanity={handleremoveQuanity}
                 handleAddToCart = {handleAddToCart}
                />
            ))}
        </div>
    );
}