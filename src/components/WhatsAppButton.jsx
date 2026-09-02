import { MessageCircle } from "lucide-react";

function WhatsAppButton() {
  // Replace with the real WhatsApp number later.
  const whatsappNumber = "+2349137091248";

  const message = encodeURIComponent(
    "Hello Mide Soles, I would like to enquire about your shoes.",
  );

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Mide Soles on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.35)] transition duration-300 hover:-translate-y-1 hover:scale-105 sm:bottom-7 sm:right-7"
    >
      <MessageCircle size={25} />

      <span className="absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-[#08090a] px-4 py-2 text-xs font-bold text-white shadow-lg lg:block">
        Chat with us
      </span>
    </a>
  );
}

export default WhatsAppButton;