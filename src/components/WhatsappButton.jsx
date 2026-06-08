import { FaWhatsapp } from "react-icons/fa";

function WhatsappButton() {
  return (
    <a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noopener noreferrer"
      className="
      fixed
      bottom-6
      right-6
      z-50
      w-16
      h-16
      rounded-full
      bg-green-500
      text-white
      flex
      items-center
      justify-center
      text-3xl
      shadow-2xl
      hover:scale-110
      duration-300
      "
    >
      <FaWhatsapp />
    </a>
  );
}

export default WhatsappButton;