import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ProductDetails() {
  const { id } = useParams()

  const [product, setProduct] = useState(null)

  useEffect(() => {
    fetch(`http://localhost:3001/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
  }, [id])

  if (!product) {
    return <h2>Loading...</h2>
  }

  return (
    <div className='container'>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Origin: {product.origin}</p>
      <h2>${product.price}</h2>
    </div>
  )
}

export default ProductDetails