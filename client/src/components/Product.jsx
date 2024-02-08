import { useState } from 'react'

import ProductDetails from './ProductDetails'
import EditForm from './EditForm'


const Product = ({product, onAddCart, products, setProducts}) => {
  const [editVisible, setEditVisible] = useState(false)

  return (
    <li className='product'>
      <ProductDetails 
        product={product} 
        onAddCart={onAddCart} 
        products={products} 
        setProducts={setProducts} 
        setEditVisible={setEditVisible}
      />
      <EditForm 
        product={product} 
        editVisible={editVisible} 
        setEditVisible={setEditVisible}
        products={products}
        setProducts={setProducts}
      />
    </li>
  )
}



export default Product