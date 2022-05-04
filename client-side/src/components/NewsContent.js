export default function NewsContent() {
  return (

    <div className="container my-24 px-6 mx-auto">
      <section className="mb-32 text-gray-800 text-center md:text-left">

        <h2 className="text-3xl font-bold mb-12 text-center">News</h2>

        <div className="grid md:grid-cols-2 gap-x-6 xl:gap-x-12 items-center mb-12">
          <div className="mb-6 md:mb-0">
            <div
              className="relative overflow-hidden bg-no-repeat bg-cover relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg"
              data-mdb-ripple="true" data-mdb-ripple-color="light">
              <img src="https://cdn.shopify.com/s/files/1/0069/4203/1983/articles/enter-glitch-mode-with-nct-dream-211788_1080x.jpg?v=1649740224"
                className="w-full" alt="NCT Dream" />
              <a href="#!">
                <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}></div>
              </a>
            </div>
          </div>

          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-3">Enter 'Glitch Mode' with NCT Dream 💚</h3>
            <p className="text-gray-500 mb-6">
              <small>Published <u>13.01.2022</u> by
                <a href="" className="text-gray-900"> Kang Tae Moo</a></small>
            </p>
            <p className="text-gray-500">
              Experience the ‘Glitch Mode’ with a deluxe box! By Adriana Chavez   After setting the music scene on fire with their last album Hello Future, NCT DREAM is back to...
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-x-6 xl:gap-x-12 items-center mb-12">
          <div className="mb-6 md:mb-0 md:order-2">
            <div
              className="relative overflow-hidden bg-no-repeat bg-cover relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg"
              data-mdb-ripple="true" data-mdb-ripple-color="light">
              <img src="https://cdn.shopify.com/s/files/1/0069/4203/1983/articles/the-genre-bending-brilliance-of-red-velvets-the-reve-festival-2022-feel-my-rhythm-539089_1080x.jpg?v=1649221231"
                className="w-full" alt="Louvre" />
              <a href="#!">
                <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}></div>
              </a>
            </div>
          </div>

          <div className="mb-6 md:mb-0 md:order-1">
            <h3 className="text-2xl font-bold mb-3">The Genre-Bending Brilliance of Red Velvet’s The ReVe Festival 2022 - Feel My Rhythm</h3>
            <p className="text-gray-500 mb-6">
              <small>Published <u>12.01.2022</u> by
                <a href="" className="text-gray-900"> Lee Min Ho</a></small>
            </p>
            <p className="text-gray-500">
              The ladies of Red Velvet take an exciting and impressive dive into genres galore.  By Lucy   Whenever Red Velvet makes a comeback, they never fail to surprise fans. Versatile...
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-x-6 xl:gap-x-12 items-center mb-12">
          <div className="mb-6 md:mb-0">
            <div
              className="relative overflow-hidden bg-no-repeat bg-cover relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg"
              data-mdb-ripple="true" data-mdb-ripple-color="light">
              <img src="https://cdn.shopify.com/s/files/1/0069/4203/1983/articles/the-sm-ballad-mix-tape-10-essential-songs-for-2022-620873_1080x.jpg?v=1643680199"
                className="w-full" alt="Louvre" />
              <a href="#!">
                <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}></div>
              </a>
            </div>
          </div>

          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-3">The SM Ballad Mix Tape - 10 Essential Songs for 2022</h3>
            <p className="text-gray-500 mb-6">
              <small>Published <u>10.01.2022</u> by
                <a href="" className="text-gray-900"> Kim Taehyung</a></small>
            </p>
            <p className="text-gray-500">
              Grab a cup of coffee and relax with the must-have ballads from your favorite artists. By Adriana Chavez   There’s nothing better than a song that can describe exactly what...
            </p>
          </div>
        </div>

      </section>
    </div>
  )
}