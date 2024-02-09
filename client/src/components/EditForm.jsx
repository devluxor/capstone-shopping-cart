// import InputGroup from './InputGroup'
import { useState } from 'react'

import ProductFormInputs from './ProductFormInputs'

import api from '../services/backend'

const EditForm = ({product, editVisible, setEditVisible, products, setProducts}) => {
  const [title, setTitle] = useState(product.title)
  const [price, setPrice] = useState(product.price)
  const [quantity, setQuantity] = useState(product.quantity)

  if (!editVisible) return

  const updateProduct = async (e) => {
    e.preventDefault()
    const newProduct = {_id: product._id, title, price, quantity}

    try {
      await api.editProduct(newProduct)
      setProducts(products.map(p => p._id === newProduct._id ? {...p, ...newProduct} : p))
      setEditVisible(false)
    } catch(e) {
      console.error(e)
    }
  }

  return (
      <div className="edit-form">
        <h3>Edit Product</h3>
        <form>
          <ProductFormInputs
            setters={{title: setTitle, price: setPrice, quantity: setQuantity}}
            title={title}
            price={price}
            quantity={quantity}
          />
          <div className="actions form-actions">
            <button type="submit" onClick={e => updateProduct(e)}>Update</button>
            <button type="button" onClick={() => setEditVisible(false)}>Cancel</button>
          </div>
        </form>
    </div>
  )
}

export default EditForm