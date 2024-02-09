/* eslint-disable import/no-unresolved */
import { useEffect, useState } from "react"
import Header from "./components/Header"
import ProductListing from "./components/ProductListing"
import AddForm from "./components/AddForm"
import api from './services/backend'


const App = () => {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])

  useEffect(() => {
    api.getProducts().then(p => {
      setProducts(p)
    })
  }, [])

  useEffect(() => {
    api.getCart().then(c => {
      setCart(c)
    })
  }, [])

  const handleAddCart = async (product) => {
    const newCart = [...cart]
    const indexOfProductInCart = newCart.findIndex(p => p.title === product.title)
    if (indexOfProductInCart > -1) {
      newCart[indexOfProductInCart].quantity += 1
    } else {
      newCart.push({...product, quantity: 1})
    }
    setCart(newCart)
    await api.addProductToCart(product)
  }

  const handleCheckout = async () => {
    setCart([])
    await api.checkout()
  }

  const handleAddNewProduct = async (product) => {
    const newProduct = await api.addNewProduct(product)
    setProducts(products.concat(newProduct))
  }

  return (
    <>
      <Header cart={cart} onCheckout={handleCheckout}/>
      <main>
        <ProductListing 
          products={products} 
          onAddCart={handleAddCart} 
          setProducts={setProducts}
        />
        <AddForm onAddNewProduct={handleAddNewProduct}/>
      </main>
    </>
  )
}

export default App