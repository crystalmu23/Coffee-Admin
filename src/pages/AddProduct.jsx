import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'

function AddProduct() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    origin: '',
    price: ''
  })

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()

    fetch('http://localhost:3001/products', {
      method: 'POST',
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
export default AddProduct }