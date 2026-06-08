import {
  FaPlane,
  FaBus,
  FaTaxi,
  FaMapMarkedAlt,
} from "react-icons/fa";

function ContactForm() {
  return (
    <section
      id="contact"
      className="bg-[#081120] py-28"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <div>

            <p className="text-cyan-400 uppercase tracking-[4px]">
              Travel Inquiry
            </p>

            <h2 className="text-white text-5xl font-bold mt-4 leading-tight">
              Plan Your Next
              <br />
              Dream Vacation
            </h2>

            <p className="text-gray-400 mt-6 text-lg leading-relaxed">
              Fill out the form and our travel experts will
              contact you shortly with the best available
              options and pricing.
            </p>

            <div className="space-y-5 mt-10">

              <div className="flex items-center gap-4">
                <div className="text-cyan-400 text-2xl">
                  <FaPlane />
                </div>

                <span className="text-white">
                  Domestic & International Flights
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-cyan-400 text-2xl">
                  <FaBus />
                </div>

                <span className="text-white">
                  Bus Ticket Booking
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-cyan-400 text-2xl">
                  <FaTaxi />
                </div>

                <span className="text-white">
                  Cab & Taxi Services
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-cyan-400 text-2xl">
                  <FaMapMarkedAlt />
                </div>

                <span className="text-white">
                  Customized Tour Packages
                </span>
              </div>

            </div>

          </div>

          {/* Right Form */}

          <div
            className="
            bg-white/5
            backdrop-blur-xl
            border
            border-white/10
            rounded-[35px]
            p-8
            lg:p-10
            "
          >

            <h3 className="text-white text-3xl font-bold">
              Request A Quote
            </h3>

            <p className="text-gray-400 mt-2">
              Get the best travel deals today.
            </p>

            <form className="space-y-5 mt-8">

              <input
                type="text"
                placeholder="Full Name"
                className="
                w-full
                bg-white/10
                border
                border-white/10
                rounded-xl
                px-5
                py-4
                text-white
                outline-none
                "
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="
                w-full
                bg-white/10
                border
                border-white/10
                rounded-xl
                px-5
                py-4
                text-white
                outline-none
                "
              />

              <input
                type="email"
                placeholder="Email Address"
                className="
                w-full
                bg-white/10
                border
                border-white/10
                rounded-xl
                px-5
                py-4
                text-white
                outline-none
                "
              />

              <select
                className="
                w-full
                bg-white/10
                border
                border-white/10
                rounded-xl
                px-5
                py-4
                text-white
                outline-none
                "
              >
                <option className="text-black">
                  Flight Booking
                </option>

                <option className="text-black">
                  Bus Booking
                </option>

                <option className="text-black">
                  Cab Booking
                </option>

                <option className="text-black">
                  Tour Package
                </option>
              </select>

              <input
                type="text"
                placeholder="Destination"
                className="
                w-full
                bg-white/10
                border
                border-white/10
                rounded-xl
                px-5
                py-4
                text-white
                outline-none
                "
              />

              <input
                type="date"
                className="
                w-full
                bg-white/10
                border
                border-white/10
                rounded-xl
                px-5
                py-4
                text-white
                outline-none
                "
              />

              <textarea
                rows="4"
                placeholder="Tell us about your travel plan..."
                className="
                w-full
                bg-white/10
                border
                border-white/10
                rounded-xl
                px-5
                py-4
                text-white
                outline-none
                resize-none
                "
              />

              <button
                type="submit"
                className="
                w-full
                bg-cyan-500
                hover:bg-cyan-600
                py-4
                rounded-xl
                text-white
                font-semibold
                text-lg
                duration-300
                "
              >
                Submit Inquiry
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default ContactForm;