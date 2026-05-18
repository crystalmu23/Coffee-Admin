import { test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import ProductCard from '../components/ProductCard'

const mockProduct = {
  id: 1,
  name: 'Vanilla Bean',
  description: 'Medium Roast',
  origin: 'Colombia',
  price: 10
}

test('renders product name', () => {
  render(
    <BrowserRouter>
      <ProductCard
        product={mockProduct}
        handleDelete={() => {}}
      />
    </BrowserRouter>
  )

  const productName = screen.getByText(/Vanilla Bean/i)

  expect(productName).toBeTruthy()
})