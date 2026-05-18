import { test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import Navbar from '../components/Navbar'

test('renders navbar title', () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  )

  const heading = screen.getByText(/Coffee Admin Portal/i)

  expect(heading).toBeTruthy()
})