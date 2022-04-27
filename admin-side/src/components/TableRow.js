// import { useState } from 'react'

export default function TableRow({ product, destroyProduct }) {

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
        {product.id}
      </th>
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
        {product.name}
      </th>
      <td className="px-6 py-4">
        {product.description}
      </td>
      <td className="px-6 py-4">
        Rp {product.price}
      </td>
      <td className="px-6 py-4">
        <img src={product.mainImg} />
      </td>
      <td className="px-6 py-4 text-right">
        <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</button>
      </td>
      <td className="px-6 py-4 text-right">
        <button onClick={() => destroyProduct(product.id)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</button>
      </td>
    </tr>
  )
}
