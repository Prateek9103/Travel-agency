import { FaUsers, FaGlobeAsia, FaSuitcaseRolling, FaHeadset } from "react-icons/fa";

function Stats() {
  const stats = [
    {
      icon: <FaUsers />,
      number: "5000+",
      title: "Happy Travelers",
    },
    {
      icon: <FaSuitcaseRolling />,
      number: "250+",
      title: "Tour Packages",
    },
    {
      icon: <FaGlobeAsia />,
      number: "50+",
      title: "Countries Covered",
    },
    {
      icon: <FaHeadset />,
      number: "24/7",
      title: "Customer Support",
    },
  ];

  return (
    <section className="bg-[#081120] py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => (
            <div
              key={index}
              className="
              bg-white/5
              border border-white/10
              backdrop-blur-xl
              rounded-3xl
              p-8
              text-center
              hover:border-cyan-400/40
              hover:-translate-y-2
              duration-500
              "
            >

              <div className="text-cyan-400 text-5xl flex justify-center mb-6">
                {item.icon}
              </div>

              <h3 className="text-white text-5xl font-bold">
                {item.number}
              </h3>

              <p className="text-gray-400 mt-4 text-lg">
                {item.title}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Stats;