import { Link } from "react-router-dom"

export default function HeaderContent() {
  return (
    <div>
      <section className="mb-40">
        <div
          className="relative overflow-hidden bg-no-repeat bg-cover"
          style={
            {
              "backgroundPosition": "50%",
              "backgroundImage": "url('https://cdn.shopify.com/s/files/1/0069/4203/1983/files/sgs_MAIN_Banner2022_aespa_1944x.jpg?v=1645491523')",
              "height": "500px"
            }
          }
        >
          <div
            className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
            style={
              {
                "backgroundColor": "rgba(0, 0, 0, 0.25)"
              }
            }
          >
            <div className="flex justify-center items-center h-full">
              <div className="text-center text-white px-6 md:px-12">
                <h1 className="text-5xl md:text-6xl xl:text-7xl font-medium tracking-tight mb-12">
                  Official Merchandise Store by <br /><span className="brand-text">Bias Store</span>
                </h1>
                <Link to={'/products'}>
                  <button
                    type="button"
                    className="inline-block px-7 py-3 border-2 border-white text-white font-medium text-sm leading-snug uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    Buy Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section >

    </div >
  )
}