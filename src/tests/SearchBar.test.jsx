import { test, expect } from 'vitest'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import SearchBar from '../components/SearchBar'

test('renders search input', () => {
  render(
    <SearchBar
      search=''
      setSearch={() => {}}
    />
  )

  const input = screen.getByPlaceholderText(/Search products/i)

  expect(input).toBeInTheDocument()
})