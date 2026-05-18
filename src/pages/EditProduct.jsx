import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function EditProduct() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    origin: '',
    price: ''
  })

  useEffect(() => {
    fetch(`http://localhost:3001/products/${id}`)
      .then((res) => res.json())
      .then((data) => setFormData(data))
  }, [id])

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()

    fetch(`http://localhost:3001/products/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...formData,
        price: Number(formData.price)
      })
    })
      .then((res) => res.json())
      .then(() => navigate('/products'))
  }

  return (
    <div className='container'>
      <h1>Edit Product</h1>

      <form onSubmit={handleSubmit} className='form'>
        <input
          type='text'
          name='name'
          value={formData.name}
          onChange={handleChange}
        />
 <input
          type='text'
          name='origin'
          value={formData.origin}
          onChange={handleChange}
        />

        <input
          type='number'
          name='price'
          value={formData.price}
          onChange={handleChange}
        />

        <button type='submit'>Update Product</button>
      </form>
    </div>
  )
}

export default EditProduct
