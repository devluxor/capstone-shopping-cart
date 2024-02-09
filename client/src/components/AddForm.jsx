import { useState } from "react"
import AddNewProductForm from './AddNewProductForm'

const AddForm = ({onAddNewProduct}) => {
  const [isFormVisible, setIsFormVisible] = useState(false)

  return (
    <div className={`add-form${isFormVisible ? ' visible' : ''}`}>
      <p>
        <button 
          className='add-product-button'
          onClick={() => setIsFormVisible(true)}
          >
          Add A Product
        </button>
      </p>
      <h3>Add Product</h3>
      <AddNewProductForm onAddNewProduct={onAddNewProduct} setIsFormVisible={setIsFormVisible}/>
    </div>
  )
}

export default AddForm