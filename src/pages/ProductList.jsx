import useFetchProducts from '../hooks/useFetchProducts'

function ProductList() {

  const products = useFetchProducts(
    'http://localhost:3001/products'
  )

  return (
    <div>
      {products.map(product => (
        <h2 key={product.id}>
          {product.name}
        </h2>
      ))}
    </div>
  )
}

export default ProductList