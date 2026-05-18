import { useEffect, useState } from 'react'

function useFetchProducts(url) {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [url])

  return products
}

export default useFetchProducts