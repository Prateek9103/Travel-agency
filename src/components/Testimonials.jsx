import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Rahul Sharma",
    location: "Delhi",
    review:
      "Amazing experience. Flight booking and hotel arrangements were seamless. Highly recommended.",
  },
  {
    name: "Priya Verma",
    location: "Lucknow",
    review:
      "Our Bali honeymoon package was perfectly planned. Great support throughout the trip.",
  },
  {
    name: "Amit Singh",
    location: "Mumbai",
    review:
      "Very professional team. Got the best price for Dubai tour package and visa assistance.",
  },
];

function Testimonials() {
  return (
    <section
      id="reviews"
      className="bg-[#0B1320] py-28"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="text-cyan-400 uppercase tracking-[4px]">
            Testimonials
          </p>

          <h2 className="text-white text-5xl font-bold mt-4">
            What Our Travelers Say
          </h2>

          <p className="text-gray-400 mt-5">
            Real stories from our happy customers.
          </p>

        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="
              bg-white/5
              backdrop-blur-xl
              border border-white/10
              rounded-3xl
              p-8
              hover:border-cyan-400/40
              hover:-translate-y-2
              duration-500
              "
            >

              {/* Stars */}

              <div className="flex gap-1 text-yellow-400 mb-6">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              {/* Review */}

              <p className="text-gray-300 leading-8">
                "{item.review}"
              </p>

              {/* User */}

              <div className="flex items-center gap-4 mt-8">

                <div
                  className="
                  w-14
                  h-14
                  rounded-full
                  bg-cyan-500
                  flex
                  items-center
                  justify-center
                  text-white
                  font-bold
                  text-xl
                  "
                >
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h4 className="text-white font-bold">
                    {item.name}
                  </h4>

                  <p className="text-gray-400 text-sm">
                    {item.location}
                  </p>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;