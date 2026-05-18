import { Link } from 'react-router-dom'

function ProductCard({ product, handleDelete }) {
  return (
    <div className='card'>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Origin: {product.origin}</p>
      <h3>${product.price}</h3>

      <Link to={`/products/${product.id}`}>
        <button>View</button>
      </Link>

      <Link to={`/edit/${product.id}`}>
        <button>Edit</button>
      </Link>

      <button onClick={() => handleDelete(product.id)}>
        Delete
      </button>
    </div>
  )
}

export default ProductCard