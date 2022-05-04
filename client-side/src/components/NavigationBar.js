import { Link } from "react-router-dom"
export default function NavigationBar() {

  return (
    <>
      <section className="sticky top-0 z-50">
        <nav className="relative w-full flex flex-wrap items-center justify-between py-2 bg-[#ecb1b0] text-gray-700 hover:text-black focus:text-black shadow-lg navbar navbar-expand-md navbar-light h-28">
          <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
            <h1 className="brand-text text-4xl">Bias Store</h1>
            <div className="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent">
              <ul className="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
                <li className="nav-item py-2 pr-2 md:pl-2">
                  <Link className="mx-10 nav-link font-bold text-gray-700 hover:text-black focus:text-black p-0" to={'/'} >Home</Link>
                  <Link className="mx-10 nav-link font-bold text-gray-700 hover:text-black focus:text-black p-0" to={'/products'} >Products</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  )
}