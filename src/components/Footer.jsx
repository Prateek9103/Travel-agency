import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#050B16] border-t border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

          {/* Company */}

          <div>

            <h2 className="text-white text-3xl font-bold">
              A&S Travel
            </h2>

            <p className="text-gray-400 mt-5 leading-7">
              Your trusted travel partner for flights,
              buses, cab services and unforgettable
              holiday packages.
            </p>

            <div className="flex gap-4 mt-8">

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-cyan-500 duration-300"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-cyan-500 duration-300"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-cyan-500 duration-300"
              >
                <FaWhatsapp />
              </a>

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-white text-xl font-bold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#destinations">Destinations</a></li>
              <li><a href="#contact">Contact</a></li>

            </ul>

          </div>

          {/* Services */}

          <div>

            <h3 className="text-white text-xl font-bold mb-6">
              Services
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li>Flight Booking</li>
              <li>Bus Booking</li>
              <li>Cab Booking</li>
              <li>Tour Packages</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-white text-xl font-bold mb-6">
              Contact
            </h3>

            <div className="space-y-5 text-gray-400">

              <div className="flex gap-3">
                <FaPhoneAlt className="mt-1 text-cyan-400" />
                <span>+91 98765 43210</span>
              </div>

              <div className="flex gap-3">
                <FaEnvelope className="mt-1 text-cyan-400" />
                <span>info@astravel.com</span>
              </div>

              <div className="flex gap-3">
                <FaMapMarkerAlt className="mt-1 text-cyan-400" />
                <span>Lucknow, Uttar Pradesh, India</span>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-500 text-center">
            © 2026 A&S Travel. All Rights Reserved.
          </p>

          <p className="text-gray-400 mt-2">
  Developed by{" "}
  <a
    href="https://prateekdev.in"
    target="_blank"
    rel="noopener noreferrer"
    className="text-orange-500 font-semibold hover:text-orange-400 transition"
  >
    Prateek Kumar
  </a>
</p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;