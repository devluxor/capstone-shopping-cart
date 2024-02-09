import { useState } from 'react'

import ProductDetails from './ProductDetails'
import EditForm from './EditForm'


const Product = ({product, onAddCart, products, setProducts}) => {
  const [isEditVisible, setIsEditVisible] = useState(false)

  return (
    <li className='product'>
      <ProductDetails 
        product={product} 
        onAddCart={onAddCart} 
        products={products} 
        setProducts={setProducts} 
        setEditVisible={setIsEditVisible}
      />
      {isEditVisible &&
        <EditForm 
          product={product} 
          editVisible={isEditVisible} 
          setEditVisible={setIsEditVisible}
          products={products}
          setProducts={setProducts}
        />
      }
    </li>
  )
}



export default Product