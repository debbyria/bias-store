import { useEffect } from "react";
import TableRow from '../components/TableRow';
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts, deleteProduct } from "../store/actions/productAction";

export default function FetchProducts() {

  const { products } = useSelector((state) => state.product
  )
  const dispatch = useDispatch()

  function destroyProduct(id) {
    dispatch(deleteProduct(id))
  }

  useEffect(() => {
    dispatch(fetchProducts())
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
              <TableRow destroyProduct={destroyProduct} product={product} key={product.id} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}