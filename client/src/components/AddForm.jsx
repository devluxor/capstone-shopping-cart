import { useState } from "react"
import api from "../services/backend"

const AddForm = ({onAddNewProduct}) => {
  const [formVisible, setFormVisible] = useState(false)

  return (
    <div className={`add-form${formVisible ? ' visible' : ''}`}>
      <p>
        <button 
          className='add-product-button'
          onClick={() => setFormVisible(true)}
          >
          Add A Product
        </button>
      </p>
      <h3>Add Product</h3>
      <AddNewProductForm onAddNewProduct={onAddNewProduct} setFormVisible={setFormVisible}/>
    </div>
  )
}

const AddNewProductForm = ({setFormVisible}) => {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [quantity, setQuantity] = useState('')

  const resetForm = () => {
    setName('')
    setPrice('')
    setQuantity('')
  }

  const cancelForm = () => {
    resetForm()
    setFormVisible(false)
  }
  
  const addNew = async (e) => {
    e.preventDefault()
    const newProduct = {title: name, price, quantity}

    try {
      await api.addNewProduct(newProduct)
      resetForm()
    } catch(e) {
      console.error(e)
    }
  }

  return (
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
        <button type="submit" onClick={e => addNew(e)}>Add</button>
        <button type="button" onClick={e => cancelForm(e)}>Cancel</button>
      </div>
    </form>
  )
}

export default AddForm