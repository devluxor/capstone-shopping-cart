
const ProductFormInputs = ({setters, title, price, quantity}) => {
  if (title === undefined) return

  const getVariable = (varName) => {
    if (varName === 'title') return title
    else if (varName === 'price') return price
    else return quantity
  } 

  return (
    <>
      {Object.keys(setters).map((input) => {
        const setter = setters[input]
        const value = getVariable(input)
        return (
          <div className="input-group" key={input}>
            <label htmlFor={`product-${input}`}
              >Product {`${input[0].toUpperCase()}${input.slice(1)}`}:
            </label>
            <input
              value={value}
              onChange={e => setter(e.target.value)}
              type={input === 'title' ? 'text' : 'number'} 
              id={`product-${input}`}
              step={input === 'price' ? '0.01' : '' } 
              name={`product-${input}`} 
              required
            ></input>
          </div>
        )
      })}
    </>
  )
}

export default ProductFormInputs
