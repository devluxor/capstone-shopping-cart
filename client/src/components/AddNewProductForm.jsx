import { useState } from "react"
import ProductFormInputs from "./ProductFormInputs"

const AddNewProductForm = ({onAddNewProduct, setIsFormVisible}) => {
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
    setIsFormVisible(false)
  }
  
  const addNew = async (e) => {
    e.preventDefault()
    const newProduct = {title, price, quantity}
    if (!valid(newProduct)) return

    try {
      await onAddNewProduct(newProduct)
      cancelForm()
    } catch(e) {
      console.error(e)
    }
  }

  const valid = ({title, price, quantity}) => {
    return title?.length > 0 &&  price?.length > 0 && quantity?.length > 0
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

export default AddNewProductForm