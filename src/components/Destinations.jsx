import dubai from "../assets/images/dubai.jpg";
import bali from "../assets/images/hero.jpg";
import maldives from "../assets/images/goa.jpg";
import thailand from "../assets/images/thailand.jpg";
import kashmir from "../assets/images/kashmir.jpg";
import goa from "../assets/images/goa.jpg";

const destinations = [
  {
    image: dubai,
    title: "Dubai",
    price: "₹24,999",
    rating: "4.9",
  },
  {
    image: bali,
    title: "Bali",
    price: "₹34,999",
    rating: "4.8",
  },
  {
    image: maldives,
    title: "Maldives",
    price: "₹49,999",
    rating: "5.0",
  },
  {
    image: thailand,
    title: "Thailand",
    price: "₹29,999",
    rating: "4.7",
  },
  {
    image: kashmir,
    title: "Kashmir",
    price: "₹19,999",
    rating: "4.8",
  },
  {
    image: goa,
    title: "Goa",
    price: "₹14,999",
    rating: "4.6",
  },
];

function Destinations() {
  return (
    <section
      id="destinations"
      className="bg-[#0B1320] py-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="text-cyan-400 uppercase tracking-[4px]">
            Top Destinations
          </p>

          <h2 className="text-white text-5xl font-bold mt-4">
            Explore Popular Places
          </h2>

          <p className="text-gray-400 mt-5">
            Handpicked destinations loved by travelers.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {destinations.map((item, index) => (
            <div
              key={index}
              className="
              group
              relative
              rounded-3xl
              overflow-hidden
              h-[450px]
              cursor-pointer
              "
            >

              <img
                src={item.image}
                alt={item.title}
                className="
                w-full
                h-full
                object-cover
                group-hover:scale-110
                duration-700
                "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

              <div className="absolute bottom-0 p-6 w-full">

                <div className="flex justify-between items-center mb-3">

                  <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm">
                    ⭐ {item.rating}
                  </span>

                  <span className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-sm">
                    From {item.price}
                  </span>

                </div>

                <h3 className="text-white text-3xl font-bold">
                  {item.title}
                </h3>

                <button
                  className="
                  mt-5
                  bg-cyan-500
                  hover:bg-cyan-600
                  text-white
                  px-6
                  py-3
                  rounded-xl
                  duration-300
                  "
                >
                  View Package
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Destinations;