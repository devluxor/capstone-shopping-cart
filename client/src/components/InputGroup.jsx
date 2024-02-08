const InputGroup = ({objkey, value}) => {
  const label = `product-${objkey}`
  return (
    <div className='input-group'>
      <label htmlFor={label}>{`${objkey[0].toUpperCase()}${objkey.slice(1)}`}</label>
      <input type='text' id={label} defaultValue={value}></input>
    </div>
  )
}

export default InputGroup