import api from '../services/backend'
import ProductActions from './ProductActions'

const ProductDetails = ({product, onAddCart, products, setProducts, setEditVisible}) => {
  const deleteProduct = async (product) => {
    try {
      setProducts(products.filter(p => p === product ? null : p))
      await api.deleteProduct(product)
    } catch(e) {
      console.error(e)
    }
  }

  return (
    <div className='product-details'>
      <h3>{product.title}</h3>
      <p className='price'>{`$ ${product.price}`}</p>
      <p className='quantity'>{`${product.quantity} left in stock`}</p>
      <ProductActions 
        onAddCart={onAddCart}
        product={product}
        setEditVisible={setEditVisible}
        products={products}
        setProducts={setProducts}
      />
      <button className='delete-button' onClick={() => deleteProduct(product)}>X</button>
    </div>
  )
}

export default ProductDetails