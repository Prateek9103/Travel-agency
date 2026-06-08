import {
  FaPlane,
  FaBus,
  FaTaxi,
  FaMapMarkedAlt,
} from "react-icons/fa";

const services = [
  {
    icon: <FaPlane />,
    title: "Flight Booking",
    desc: "Domestic and international flight tickets at the best prices.",
  },
  {
    icon: <FaBus />,
    title: "Bus Booking",
    desc: "Luxury, sleeper and Volvo buses across India.",
  },
  {
    icon: <FaTaxi />,
    title: "Cab Booking",
    desc: "Airport transfers, local rides and outstation trips.",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Tour Packages",
    desc: "Customized holiday packages for every destination.",
  },
];

function Services() {
  return (
    <section
      id="services"
      className="bg-[#081120] py-28"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="text-cyan-400 uppercase tracking-[4px]">
            What We Offer
          </p>

          <h2 className="text-white text-4xl md:text-5xl font-bold mt-4">
            Premium Travel Services
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-5">
            Everything you need for a smooth and unforgettable journey.
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="
              group
              bg-white/5
              backdrop-blur-xl
              border border-white/10
              rounded-3xl
              p-8
              hover:-translate-y-3
              hover:border-cyan-400/40
              duration-500
              relative
              overflow-hidden
              "
            >

              {/* Glow */}

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 duration-500 bg-gradient-to-br from-cyan-500/10 to-transparent"></div>

              <div className="relative z-10">

                <div
                  className="
                  text-5xl
                  text-cyan-400
                  mb-6
                  "
                >
                  {service.icon}
                </div>

                <h3 className="text-white text-2xl font-bold mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-7">
                  {service.desc}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Services;