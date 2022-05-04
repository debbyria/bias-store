import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import CardImage from "../components/CardImage"
import { getDetailProduct } from "../store/actions/productAction"
import FooterContent from "../components/FooterContent"
import NavigationBar from "../components/NavigationBar"

export default function DetailProduct() {
  let { detailProduct } = useSelector((state) => state.product)
  const dispatch = useDispatch()
  let { slug } = useParams()

  useEffect(() => {
    dispatch(getDetailProduct(slug))
  }, [])

  return (
    <>
      <NavigationBar />
      <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
        <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
          <img className="w-full" alt="image of a girl posing" src={detailProduct.mainImg} />
          {detailProduct.Images.map((image) => (
            <CardImage image={image} key={image.id} />
          ))}
        </div>
        <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
          <div className="border-b border-gray-200 pb-6">
            <h1 className="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 dark:text-white mt-2">{detailProduct.name} </h1>
          </div>
          <div className="py-4 border-b border-gray-200 flex items-center justify-between">
            <p className="text-base leading-4 text-gray-800 dark:text-gray-300">Category</p>
            <div className="flex items-center justify-center">
              <p className="text-sm leading-none text-gray-600 dark:text-gray-300">{detailProduct.Category.name}</p>
            </div>
          </div>
          <div className="py-4 border-b border-gray-200 flex items-center justify-between">
            <p className="text-base leading-4 text-gray-800 dark:text-gray-300">Price</p>
            <div className="flex items-center justify-center">
              <p className="text-lg font-bold leading-none text-gray-600 dark:text-gray-300">Rp {detailProduct.price}</p>
            </div>
          </div>
          <div className="py-4 border-b border-gray-200 flex items-center justify-between">
            <p className="text-base leading-4 text-gray-800 dark:text-gray-300">Upload by</p>
            <div className="flex items-center justify-center">
              <p className="text-sm leading-none text-gray-600 dark:text-gray-300">{detailProduct.User.email}</p>
            </div>
          </div>
          <button className="dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-base flex items-center justify-center leading-none text-white bg-[#ecb1b0] w-full py-4 hover:bg-gray-700 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="mr-3 text-white dark:text-gray-900" width="16" height="17">
              <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM272 180H316V224C316 235 324.1 244 336 244C347 244 356 235 356 224V180H400C411 180 420 171 420 160C420 148.1 411 140 400 140H356V96C356 84.95 347 76 336 76C324.1 76 316 84.95 316 96V140H272C260.1 140 252 148.1 252 160C252 171 260.1 180 272 180zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" /></svg>
            Add to Cart
          </button>
          <div className="">
            <img className="my-6" src="https://cdn.hextom.com/badge_pic/usb/126843/e71c830a-f576-4f8f-a4b9-c5d7e4f0db4b.png" />
            <p className="md:w-96 text-base leading-normal text-gray-600 dark:text-gray-300 mt-4">{detailProduct.description}</p>
          </div>
        </div>
      </div>
      <FooterContent />
    </>
  )
}