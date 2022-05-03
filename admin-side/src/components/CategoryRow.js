import { useDispatch } from "react-redux"
import { deleteCategory, getCategories } from "../store/actions/categoryAction"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useEffect } from "react"
const MySwal = withReactContent(Swal)

export default function CategoryRow({ category }) {
  const dispatch = useDispatch()

  async function destroyCategory(id) {
    try {
      let response = await dispatch(deleteCategory(id))

      if (response === 'success') {
        MySwal.fire({
          icon: "success",
          text: 'Succeed delete Category'
        })
      }
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    dispatch(getCategories())
  }, [])

  return (
    <>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
          {category.id}
        </th>
        <th scope="row" className="px-3 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
          {category.name}
        </th>
        <td scope="row" className="px-auto py-4">
          {category.createdAt.slice(0, 10)}
        </td>
        <td scope="row" className="px-auto py-4">
          {category.updatedAt.slice(0, 10)}
        </td>
        <td className="px-6 py-4 text-right">
          <button onClick={() => destroyCategory(category.id)} className="w-full rounded-3xl h-10
          bg-red-400 font-medium mx-auto text-black hover:text-white dark:text-white">Delete</button>
        </td>
      </tr>
    </>
  )
}