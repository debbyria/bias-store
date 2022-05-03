import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getCategories } from "../store/actions/categoryAction"
import CategoryRow from "../components/CategoryRow"
import CreateCategory from "../components/CreateCategory"

export default function CategoryList() {
  const [showModal, setShowModal] = useState(false)

  const { categories } = useSelector((state) => state.category)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCategories())
  }, [])

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
      <div className="my-10">
        <button onClick={() => setShowModal(true)} className="p-3 w-36 text-center hover:text-white rounded-xl">Add Category</button>
      </div>
      <CreateCategory showModal={showModal} setShowModal={setShowModal} />
      <table className="w-full text-sm text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-center text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              No. id
            </th>
            <th scope="col" className="px-6 py-3">
              Category name
            </th>
            <th scope="col" className="px-6 py-3">
              Created At
            </th>
            <th scope="col" className="px-6 py-3">
              Updated At
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <CategoryRow category={category} key={category.id} />
          ))}
        </tbody>
      </table>
    </div>
  )
}