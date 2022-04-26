import { useEffect, useState } from "react";
import TableRow from './TableRow';

export default function FetchProducts() {
  const [products, setProducts] = useState([])

  async function getProducts() {
    try {
      let response = await fetch('http://localhost:3001/products')

      if (!response.ok) {
        throw new Error(response.message)
      }

      const data = await response.json()
      setProducts(data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                No. id
              </th>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
              </th>
              <th scope="col" className="px-6 py-3">
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <TableRow product={product} key={product.id} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}