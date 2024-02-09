import CheckoutButton from './CheckoutButton'
import CartItems from './CartItems'
const Cart = ({cart, onCheckout}) => {
  return (
    <div className='cart'>
      <h2>Your cart</h2>
      {cart.length > 0 ? null: <p>Your cart is empty</p>}
      <CartItems cart={cart}/>
      <CheckoutButton onCheckout={onCheckout}/>
    </div>
  )
}

export default Cart