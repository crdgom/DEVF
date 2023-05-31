import { useState, useRef } from 'react'
import { useProducts } from '../hooks/useProducts'
import ProductCard from './ProductCard'
// import { products as mockData } from '../../db.json'

function App () {
  const { products, isLoading, errors } = useProducts()

  const searchInputRef = useRef()

  const {query, setQuery} = useState('')

  const mappingProducts = !errors && products.map(
    (product) => ({
      ...product,
      name: product.title,
      photo: product.thumbnail,
      isFav: false
    })
  )

  const handleSubmit = (e) => {
    e.preventDefault()

    // js vanilla
    // const searchInput = e.target['searchInput'].value
    // console.log(searchInput)

    // Con react useRef hook
    const searchInput = searchInputRef.current.value
    console.log(searchInput)

  }

  return (
    <section className='container py-5'>
      <h2 className='text-center mb-5'>Lista de productos</h2>
      <form onSubmit={handleSubmit}>
        <div className='input-group mb-3'>
          <input ref={searchInputRef} name='searchInput' className='form-control' type='search' placeholder='Buscar' />
          <button className='btn btn-secondary' type='submit'>Buscar 🕵️‍♂️</button>
        </div>
      </form>
      {isLoading && <p className='text-center'>...Loading</p>}
      {!isLoading && (
        <section className='row gy-4'>
          {mappingProducts.map((product) => (
            <aside key={product.id} className='col-4'>
              <ProductCard {...product} />
            </aside>
          ))}
        </section>
      )}
    </section>
  )
}

export default App
