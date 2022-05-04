import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { getDetailProduct } from "../store/actions/productAction"


export default function CardProduct({ product }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  async function detailButtonHandler(slug) {
    try {
      await dispatch(getDetailProduct(slug))
      navigate(`/products/${slug}`)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <div className=" max-w-sm bg-[#eeeeee] rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="p-8 rounded-t-lg" src={product.mainImg} alt="product image" />
        </a>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
          </a>
          <div className="my-3">
            {product.Category.name}
          </div>
          <div className="flex justify-between items-center my-5">
            <span className="text-xl font-bold text-gray-900 dark:text-white">Rp {product.price}</span>
            <button onClick={() => detailButtonHandler(product.slug)} href="#" className="text-white bg-[#ecb1b0] hover:bg-[#666666] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">See Details</button>
          </div>
        </div>
      </div>

    </>
  )
}