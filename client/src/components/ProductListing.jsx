import Product from "./Product"

const ProductListing = ({products, onAddCart, setProducts}) => {
  return (
    <div className="product-listing">
      <h2>Products</h2>
      <ul className="product-list">{
        products.map(p => <Product 
            key={p._id} 
            product={p} 
            onAddCart={onAddCart}
            products={products}
            setProducts={setProducts}
          />)
      }</ul>
    </div>
  )
}

export default ProductListing