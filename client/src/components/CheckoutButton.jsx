import React from 'react'

const CheckoutButton = ({onCheckout}) => {
  return (
    <div className='checkout-button'>
      <button className='checkout' onClick={onCheckout}>Checkout</button>
    </div>
  )
}


export default CheckoutButton