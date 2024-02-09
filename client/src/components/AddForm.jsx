import { useState } from "react"
// import api from "../services/backend"
import ProductFormInputs from "./ProductFormInputs"

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

const AddNewProductForm = ({onAddNewProduct, setFormVisible}) => {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [quantity, setQuantity] = useState('')

  const resetForm = () => {
    setTitle('')
    setPrice('')
    setQuantity('')
  }

  const cancelForm = () => {
    resetForm()
    setFormVisible(false)
  }
  
  const addNew = async (e) => {
    e.preventDefault()
    const newProduct = {title, price, quantity}

    try {
      await onAddNewProduct(newProduct)
      cancelForm()
    } catch(e) {
      console.error(e)
    }
  }
  
  return (
    <form>
      <ProductFormInputs
        setters={{title: setTitle, price: setPrice, quantity: setQuantity}}
        title={title} 
        price={price} 
        quantity={quantity}
      />
      <div className="actions form-actions">
        <button type="submit" onClick={e => addNew(e)}>Add</button>
        <button type="button" onClick={e => cancelForm(e)}>Cancel</button>
      </div>
    </form>
  )
}

export default AddForm