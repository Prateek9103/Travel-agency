import {
  FaShieldAlt,
  FaHeadset,
  FaMoneyBillWave,
  FaGlobe,
} from "react-icons/fa";

import heroImage from "../assets/images/hero.jpg";

function WhyChooseUs() {
  const features = [
    {
      icon: <FaShieldAlt />,
      title: "Secure Booking",
      desc: "Safe and secure booking process for flights, hotels and tours.",
    },
    {
      icon: <FaHeadset />,
      title: "24/7 Support",
      desc: "Our travel experts are available anytime to assist you.",
    },
    {
      icon: <FaMoneyBillWave />,
      title: "Best Price Guarantee",
      desc: "Competitive pricing with maximum value for your journey.",
    },
    {
      icon: <FaGlobe />,
      title: "Worldwide Destinations",
      desc: "Explore domestic and international destinations with ease.",
    },
  ];

  return (
    <section className="bg-[#081120] py-28">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Image */}

          <div className="relative">

            <img
              src={heroImage}
              alt="Travel"
              className="
              rounded-[35px]
              w-full
              h-[650px]
              object-cover
              shadow-2xl
              "
            />

            <div
              className="
              absolute
              bottom-8
              left-8
              bg-white/10
              backdrop-blur-xl
              border
              border-white/10
              rounded-2xl
              p-6
              "
            >
              <h3 className="text-white text-3xl font-bold">
                5000+
              </h3>

              <p className="text-gray-300">
                Happy Travelers
              </p>
            </div>

          </div>

          {/* Right Content */}

          <div>

            <p className="text-cyan-400 uppercase tracking-[4px]">
              Why Choose Us
            </p>

            <h2 className="text-white text-5xl font-bold mt-4 leading-tight">
              Making Every Journey
              <br />
              Extraordinary
            </h2>

            <p className="text-gray-400 mt-6 text-lg leading-relaxed">
              We deliver unforgettable travel experiences with
              personalized planning, premium service and complete
              support from booking to destination.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-10">

              {features.map((item, index) => (
                <div
                  key={index}
                  className="
                  bg-white/5
                  border
                  border-white/10
                  backdrop-blur-xl
                  rounded-3xl
                  p-6
                  hover:border-cyan-400/40
                  hover:-translate-y-2
                  duration-500
                  "
                >
                  <div className="text-cyan-400 text-4xl mb-4">
                    {item.icon}
                  </div>

                  <h3 className="text-white text-xl font-bold mb-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-400">
                    {item.desc}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default WhyChooseUs;