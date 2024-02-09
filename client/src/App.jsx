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

    try {
      setCart(newCart)
      await api.addProductToCart(product)
    } catch(e) {
      console.error(e)
    }
  }

  const handleCheckout = async () => {
    try {
      setCart([])
      await api.checkout()
    } catch(e) {
      console.error(e)
    }
  }

  const handleAddNewProduct = async (product) => {
    try {
      const newProduct = await api.addNewProduct(product)
      setProducts(products.concat(newProduct))
    } catch (e) {
      console.error(e)
    }
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