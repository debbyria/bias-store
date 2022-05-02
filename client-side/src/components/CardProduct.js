export default function CardProduct() {
  return (
    <div class="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img class="p-8 rounded-t-lg" src="https://cdn.shopify.com/s/files/1/0069/4203/1983/products/nct-dream-hot-sauce-beanie-with-patches-311677_2000x.jpg?v=1650086553" alt="product image" />
      </a>
      <div class="px-5 pb-5">
        <a href="#">
          <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h5>
        </a>

        <div class="flex justify-between items-center">
          <span class="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
          <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
        </div>
      </div>
    </div>

  )
}