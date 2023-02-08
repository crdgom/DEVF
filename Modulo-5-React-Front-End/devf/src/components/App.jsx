import ProductCard from './ProductCard'

function App () {
  return (
    <section className='container py-5'>
      <h2 className='display-1 text-center mb-5'>Lista de productos</h2>
      <section className='row'>
        <aside className='col-4'>
          <ProductCard
            name='Redmi Note 1000'
            count={10}
            price={1000}
          />
        </aside>
        <aside className='col-4'>
          <ProductCard
            name='iPhone 24'
            count={5}
            price={100000}
          />
        </aside>
      </section>
    </section>
  )
}

export default App
