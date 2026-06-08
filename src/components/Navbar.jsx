import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-5 left-0 w-full z-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="
        bg-white/10
        backdrop-blur-xl
        border
        border-white/10
        rounded-2xl
        px-8
        py-4
        flex
        items-center
        justify-between
        ">

          <div>
            <h2 className="text-white text-3xl font-bold">
              A&S Travel
            </h2>

            
          </div>

          <ul className="hidden md:flex gap-10 text-white">

            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#destinations">Tours</a></li>
            <li><a href="#reviews">Reviews</a></li>
            <li><a href="#contact">Contact</a></li>

          </ul>

          <button className="hidden md:block bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl text-white font-semibold">
            Book Now
          </button>

          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;