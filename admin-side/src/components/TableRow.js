// import React, { useState } from "react";

export default function TableRow({ product, destroyProduct }) {

  // const [showModal, setShowModal] = React.useState(false)

  return (
    <>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
          {product.id}
        </th>
        <th scope="row" className="px-3 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
          {product.name}
        </th>
        <td scope="row" className="px-auto py-4">
          {product.Category.name}
        </td>
        <td scope="row" className="px-auto py-4">
          Rp {product.price}
        </td>
        <td scope="row" className="px-auto py-4">
          <img className="mx-auto" width='200px' src={product.mainImg} />
        </td>
        <td className="px-6 py-4 text-right">
          <button className="w-full rounded-3xl h-10
          bg-blue-400 font-medium mx-auto text-black hover:text-white dark:text-blue-500">Edit</button>
        </td>
        <td className="px-6 py-4 text-right">
          <button onClick={() => destroyProduct(product.id)} className="w-full rounded-3xl h-10 bg-red-400 font-medium mx-auto text-black hover:text-white dark:text-white ">Delete</button>
        </td>
      </tr>
    </>
  )
}
