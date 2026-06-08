import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlaneDeparture } from "react-icons/fa";

import heroBg from "../assets/images/hero.jpg";
import dubai from "../assets/images/dubai.jpg";
import goa from "../assets/images/goa.jpg";
import thailand from "../assets/images/thailand.jpg";
import kashmir from "../assets/images/kashmir.jpg";

function Hero() {
  const destinations = [
    {
      image: dubai,
      name: "Dubai",
      price: "Starting ₹24,999",
    },
    {
      image: thailand,
      name: "Thailand",
      price: "Starting ₹19,999",
    },
    {
      image: goa,
      name: "Goa",
      price: "Starting ₹7,999",
    },
    {
      image: kashmir,
      name: "Kashmir",
      price: "Starting ₹14,999",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === destinations.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
    >
      {/* Background */}

      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/70" />

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />

      {/* Content */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 items-center min-h-screen gap-20">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            

            <h1
              className="
              text-white
              font-black
              mt-8
              leading-[1]
              text-6xl
              lg:text-8xl
              "
            >
              Explore
              <br />
              The World
              <br />
              In Luxury
            </h1>

            <p
              className="
              text-gray-300
              text-lg
              max-w-xl
              mt-8
              leading-relaxed
              "
            >
              Flight tickets, bus booking, cab services and
              curated holiday packages designed to make
              every journey unforgettable.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <button
                className="
                bg-cyan-500
                hover:bg-cyan-600
                px-8
                py-4
                rounded-2xl
                text-white
                font-semibold
                duration-300
                "
              >
                Plan Your Trip
              </button>

              <button
                className="
                border
                border-white/20
                backdrop-blur-xl
                px-8
                py-4
                rounded-2xl
                text-white
                hover:bg-white
                hover:text-black
                duration-300
                "
              >
                Contact Us
              </button>

            </div>

            <div className="flex gap-12 mt-12">

              <div>
                <h3 className="text-white text-4xl font-bold">
                  500+
                </h3>

                <p className="text-gray-400">
                  Happy Travelers
                </p>
              </div>

              <div>
                <h3 className="text-white text-4xl font-bold">
                  50+
                </h3>

                <p className="text-gray-400">
                  Destinations
                </p>
              </div>

            </div>
          </motion.div>

          {/* RIGHT */}

          <div className="relative flex justify-center">

            <AnimatePresence mode="wait">

              <motion.div
                key={current}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  y: 50,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                  y: -50,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="
                relative
                w-[350px]
                h-[520px]
                rounded-[35px]
                overflow-hidden
                shadow-2xl
                "
              >
                <img
                  src={destinations[current].image}
                  alt=""
                  className="
                  w-full
                  h-full
                  object-cover
                  "
                />

                <div
                  className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black
                  via-black/20
                  to-transparent
                  "
                />

                <div
                  className="
                  absolute
                  bottom-0
                  left-0
                  right-0
                  p-8
                  "
                >
                  <h3
                    className="
                    text-white
                    text-3xl
                    font-bold
                    "
                  >
                    {destinations[current].name}
                  </h3>

                  <p className="text-gray-300 mt-2">
                    {destinations[current].price}
                  </p>
                </div>
              </motion.div>

            </AnimatePresence>

            {/* Floating Card */}

            

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;