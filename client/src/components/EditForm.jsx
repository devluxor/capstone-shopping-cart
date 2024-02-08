// import InputGroup from './InputGroup'
import { useState } from 'react'

import api from '../services/backend'

const EditForm = ({product, editVisible, setEditVisible, products, setProducts}) => {
  const [name, setName] = useState(product.title)
  const [price, setPrice] = useState(product.price)
  const [quantity, setQuantity] = useState(product.quantity)

  if (!editVisible) return

  const updateProduct = async (e) => {
    e.preventDefault()
    const newProduct = {_id: product._id, title: name, price, quantity}

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
          <div className="input-group">
            <label htmlFor="product-name">Product Name:</label>
            <input
              value={name} 
              onChange={e => setName(e.target.value)} 
              type="text" 
              id="product-name" 
              name="product-name" 
              required
              ></input>
          </div>
          <div className="input-group">
            <label htmlFor="product-price">Price:</label>
            <input 
              value={price} 
              onChange={e => setPrice(e.target.value)} 
              type="number" 
              id="product-price" 
              name="product-price" 
              min="0" 
              step="0.01" 
              required
              ></input>
          </div>
          <div className="input-group">
            <label htmlFor="product-quantity">Quantity:</label>
            <input 
              value={quantity} 
              onChange={e => setQuantity(e.target.value)} 
              type="number" 
              id="product-quantity" 
              name="product-quantity" 
              min="0" 
              required
            ></input>
          </div>
          <div className="actions form-actions">
            <button type="submit" onClick={e => updateProduct(e)}>Update</button>
            <button type="button" onClick={() => setEditVisible(false)}>Cancel</button>
          </div>
        </form>
    </div>
  )
}

export default EditForm