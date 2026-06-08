import dubai from "../assets/images/dubai.jpg";
import bali from "../assets/images/hero.jpg";
import maldives from "../assets/images/thailand.jpg";

const packages = [
  {
    image: dubai,
    title: "Dubai Luxury Escape",
    duration: "5 Days / 4 Nights",
    price: "₹24,999",
    rating: "4.9",
  },
  {
    image: bali,
    title: "Bali Honeymoon Special",
    duration: "6 Days / 5 Nights",
    price: "₹34,999",
    rating: "4.8",
  },
  {
    image: maldives,
    title: "Maldives Water Villa",
    duration: "4 Days / 3 Nights",
    price: "₹49,999",
    rating: "5.0",
  },
];

function TourPackages() {
  return (
    <section className="bg-[#0B1320] py-28">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="text-cyan-400 uppercase tracking-[4px]">
            Featured Packages
          </p>

          <h2 className="text-white text-5xl font-bold mt-4">
            Best Selling Tour Packages
          </h2>

          <p className="text-gray-400 mt-5">
            Carefully designed packages for memorable vacations.
          </p>

        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-3 gap-8">

          {packages.map((pkg, index) => (
            <div
              key={index}
              className="
              bg-white/5
              border border-white/10
              rounded-3xl
              overflow-hidden
              backdrop-blur-xl
              hover:-translate-y-3
              duration-500
              group
              "
            >

              {/* Image */}

              <div className="relative h-[260px] overflow-hidden">

                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="
                  w-full
                  h-full
                  object-cover
                  group-hover:scale-110
                  duration-700
                  "
                />

                <div className="absolute top-5 left-5 bg-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Bestseller
                </div>

              </div>

              {/* Content */}

              <div className="p-8">

                <div className="flex justify-between mb-4">

                  <span className="text-yellow-400">
                    ⭐ {pkg.rating}
                  </span>

                  <span className="text-cyan-400 font-semibold">
                    {pkg.duration}
                  </span>

                </div>

                <h3 className="text-white text-2xl font-bold">
                  {pkg.title}
                </h3>

                <div className="flex gap-3 mt-5 flex-wrap">

                  <span className="bg-white/10 px-3 py-2 rounded-full text-gray-300 text-sm">
                    Flight Included
                  </span>

                  <span className="bg-white/10 px-3 py-2 rounded-full text-gray-300 text-sm">
                    Hotel Included
                  </span>

                </div>

                <div className="flex items-center justify-between mt-8">

                  <div>
                    <p className="text-gray-400 text-sm">
                      Starting From
                    </p>

                    <h4 className="text-white text-3xl font-bold">
                      {pkg.price}
                    </h4>
                  </div>

                  <button
                    className="
                    bg-cyan-500
                    hover:bg-cyan-600
                    text-white
                    px-6
                    py-3
                    rounded-xl
                    duration-300
                    "
                  >
                    Book Now
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default TourPackages;