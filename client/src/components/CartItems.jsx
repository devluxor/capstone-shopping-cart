const CartItems = ({cart}) => {
  return (
    <table className='cart-items'>

      {cart.length > 0 && 
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
          </tr>
      </thead>}

      <tbody>
        {cart.map(p => {
          return (
            <tr key={p._id}>
              <td>{p.title}</td>
              <td>{p.quantity}</td>
              <td>{`$${p.price}`}</td>
            </tr>
          )
        })}
      </tbody>

      <tfoot>
        <tr>
          <td colSpan="3" className="total">
            {`Total: $${cart.reduce((v, {price}) => v + price, 0)}`}
          </td>
        </tr>
      </tfoot>
    </table>
  )
}

export default CartItems