import { useState } from 'react'

const ProductCard = ({ name, count = 0, price = 0 }) => {
  const [value, setValue] = useState(0)
  return (
    <article className='card'>
      <img className='card-img-top' src='https://picsum.photos/500/400' alt={name} />
      <div className='card-body'>
        <h2 className='card-title'>{name}</h2>
        <p className='card-text'>Cantidad disponible: {count}</p>
        <p className='card-text'>Precio: $ {price} MXN</p>
        <div className='d-flex align-items-center gap-3'>
          <button className='btn btn-primary' onClick={() => setValue(value - 1)}> - </button>
          <p className='card-text m-0'>{value}</p>
          <button className='btn btn-primary' onClick={() => setValue(value + 1)}> + </button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
