import { useEffect, useState } from "react";
import TableRow from '../components/TableRow';
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../store/actions/productAction";
import CreateProduct from "../components/CreateProduct";
import { getCategories } from "../store/actions/categoryAction";

export default function TableProduct() {
  const [showModal, setShowModal] = useState(false)

  const { products } = useSelector((state) => state.product
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
    dispatch(getCategories())
  }, [])

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
        <div className="my-10">
          <button onClick={() => setShowModal(true)} className="p-3 w-36 text-center hover:text-white rounded-xl">Add Product</button>
        </div>
        <CreateProduct showModal={showModal} setShowModal={setShowModal} />
        <table className="w-full text-sm text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-center text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                No. id
              </th>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Action
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