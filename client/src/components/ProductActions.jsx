
const ProductActions = ({onAddCart, product, setEditVisible, products, setProducts}) => {
  const addToCart = () => {
    setProducts(products.map(p => p === product ? {...product, quantity: product.quantity - 1} : p))
    onAddCart(product)
  }

  return (
    <div className='actions product-actions'>
      <button 
        className='add-to-cart'
        onClick={() => addToCart(product)}
        disabled={product.quantity === 0}
        >Add to cart</button>
      <button className='edit' onClick={() => setEditVisible(true)}>Edit</button>
    </div>
  )
}

export default ProductActions