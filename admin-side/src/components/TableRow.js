import { getDetailProduct } from "../store/actions/productAction"
import { useDispatch } from "react-redux"
// import EditProduct from "./EditProduct"
import { useNavigate } from "react-router-dom"
import { deleteProduct } from "../store/actions/productAction"

export default function TableRow({ product }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  async function editButton(slug) {
    dispatch(getDetailProduct(slug))
    navigate(`/edit/${slug}`)
  }

  function destroyProduct(id) {
    dispatch(deleteProduct(id))
  }

  return (
    <>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
          {product.id}
        </th>
        <th scope="row" className="w-72 px-3 py-4 font-medium text-gray-900 dark:text-white whitespace-normal">
          {product.name}
        </th>
        <td scope="row" className="px-auto py-4">
          {product.Category.name}
        </td>
        <td scope="row" className="px-auto py-4">
          Rp {product.price}
        </td>
        <th scope="row" className="px-auto py-4">
          <img className="mx-auto" width='200px' src={product.mainImg} />
        </th>
        <th className="px-6 py-4 text-right">
          <button onClick={() => editButton(product.slug)} className="w-full rounded-3xl h-10
          bg-blue-400 font-medium mx-auto text-black hover:text-white dark:text-blue-500">Edit</button>
        </th>
        <th className="px-6 py-4 text-right">
          <button onClick={() => destroyProduct(product.id)} className="w-full rounded-3xl h-10 bg-red-400 font-medium mx-auto text-black hover:text-white dark:text-white ">Delete</button>
        </th>
      </tr>
    </>
  )
}
