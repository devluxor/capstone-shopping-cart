import axios from 'axios'
const baseUrl = '/api'

const getProducts = async () => {
  try {
    const result = await axios.get(`${baseUrl}/products`)
    return result.data
  } catch (e) {
    console.error(e)
  }
}

const getCart = async () => {
  try {
    const result = await axios.get(`${baseUrl}/cart`)
    return result.data
  } catch (e) {
    console.error(e)
  }
}

const addNewProduct = async (product) => {
  try {
    const result = await axios.post(`${baseUrl}/products`, product)
    return result.data
  } catch (e) {
    console.error(e)
  }
}

const addProductToCart = async (product) => {
  try {
    const result = await axios.post(`${baseUrl}/add-to-cart`, {productId: product._id})
    return result.data
  } catch (e) {
    console.error(e)
  }
}

const checkout = async () => {
  try {
    await axios.post(`${baseUrl}/checkout`)
  } catch (e) {
    console.error(e)
  }
}

const editProduct = async (updatedProduct) => {
  try {
    await axios.put(`${baseUrl}/products/${updatedProduct._id}`, updatedProduct)
  } catch (e) {
    console.error(e)
  }
}

const deleteProduct = async (product) => {
  try {
    await axios.delete(`${baseUrl}/products/${product._id}`)
  } catch (e) {
    console.error(e)
  }
}

export default {
  getProducts, 
  getCart, 
  addNewProduct, 
  addProductToCart, 
  editProduct,
  checkout,
  deleteProduct,
}