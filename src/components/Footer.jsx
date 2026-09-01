import {
  ArrowUp,
  Camera,
  MapPin,
  MessageCircle,
} from "lucide-react";

const footerLinks = [
  { name: "Home", href: "#home" },
  { name: "Shop", href: "#shop" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  // Replace these details later.
  const whatsappNumber = "2340000000000";
  const instagramLink = "#";
  const tiktokLink = "#";

  return (
    <footer className="bg-[#08090a] px-4 pb-5 pt-16 text-white sm:px-6 lg:pt-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 border-b border-white/10 pb-14 md:grid-cols-2 lg:grid-cols-[1.4fr_0.6fr_0.7fr]">
          {/* Brand */}
          <div>
            <a
              href="#home"
              className="text-2xl font-black tracking-tight text-white"
            >
              MIDE<span className="text-[#aca2f6]">SOLES.</span>
            </a>

            <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">
              Handmade shoes and carefully selected footwear designed for
              comfort, confidence and everyday style.
            </p>

            <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-slate-300">
              <MapPin size={17} className="text-[#aca2f6]" />
              Oye-Ekiti, Ekiti State
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#aca2f6]">
              Explore
            </p>

            <div className="mt-5 flex flex-col gap-4">
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="w-fit text-sm font-medium text-slate-400 transition hover:text-white"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#aca2f6]">
              Connect
            </p>

            <div className="mt-5 flex flex-col gap-3">
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm font-medium text-slate-400 transition hover:text-white"
              >
                <MessageCircle size={17} />
                WhatsApp
              </a>

              <a
                href={instagramLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm font-medium text-slate-400 transition hover:text-white"
              >
                <Camera size={17} />
                Instagram
              </a>

              <a
                href={tiktokLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm font-medium text-slate-400 transition hover:text-white"
              >
                <span className="flex h-[17px] w-[17px] items-center justify-center text-xs font-black">
                  T
                </span>
                TikTok
              </a>
            </div>
          </div>
        </div>

        {/* Large brand text */}
        <div className="overflow-hidden border-b border-white/10 py-10 sm:py-14">
          <p className="whitespace-nowrap text-center text-[14vw] font-black leading-none tracking-[-0.07em] text-white/5 lg:text-[10rem]">
            MIDE SOLES
          </p>
        </div>

        {/* Copyright */}
        <div className="flex flex-col items-center justify-between gap-4 py-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs leading-5 text-slate-500">
            © {currentYear} Mide Soles. All rights reserved.
          </p>

          <p className="text-xs leading-5 text-slate-500">
            Designed for comfort. Made for every step.
          </p>

          <a
            href="#home"
            aria-label="Return to the top"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition hover:border-[#aca2f6] hover:bg-[#aca2f6] hover:text-[#08090a]"
          >
            <ArrowUp size={17} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;