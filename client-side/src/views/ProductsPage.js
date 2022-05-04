import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchProducts } from "../store/actions/productAction"
import CardProduct from "../components/CardProduct"
import FooterContent from "../components/FooterContent"
import NavigationBar from "../components/NavigationBar"

export default function ProductPage() {
  const { products } = useSelector((state) => state.product)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  return (
    <>
      <NavigationBar />
      <div className="mt-8 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-10">
        {products.map((product) => (
          <CardProduct product={product} key={product.id} />
        ))}
      </div>
      <FooterContent />
    </>
  )
}