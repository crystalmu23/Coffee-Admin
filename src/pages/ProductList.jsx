import { useEffect, useState } from 'react'

import ProductCard from '../components/ProductCard'
import SearchBar from '../components/SearchBar'

function ProductList() {
  const [search, setSearch] = useState('')

     import useFetchProducts from '../hooks/useFetchProducts'

const products = useFetchProducts(
  'http://localhost:3001/products'
)

  function handleDelete(id) {
    fetch(`http://localhost:3001/products/${id}`, {
      method: 'DELETE'
    })

    const updatedProducts = products.filter(
      (product) => product.id !== id
    )

    setProducts(updatedProducts)
  }

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className='container'>
      <h1>Products</h1>

      <SearchBar search={search} setSearch={setSearch} />

      <div className='grid'>
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  )
}

export default ProductList