import { useState } from "react";
import { Menu, ShoppingBag, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Shop", href: "#shop" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 pt-4 sm:px-6">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/60 bg-white/80 px-5 py-3 shadow-sm backdrop-blur-xl lg:px-7">
        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="text-xl font-black tracking-tight text-[#08090a]"
        >
          MIDE<span className="text-[#7c6ee6]">SOLES.</span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-[#7c6ee6]"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop order button */}
        <a
          href={`https://wa.me/2349058647535?text=${encodeURIComponent(
            "Hello Mide Soles, I would like to enquire about your shoes.",
          )}`}
          target="_blank"
          rel="noreferrer"
          className="hidden items-center gap-2 rounded-full bg-[#08090a] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#7c6ee6] md:flex"
        >
          <ShoppingBag size={17} />
          Order now
        </a>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((previousState) => !previousState)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-[#08090a] text-white md:hidden"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="mx-auto mt-3 max-w-7xl rounded-3xl border border-white/60 bg-white p-5 shadow-xl md:hidden">
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="border-b border-slate-100 px-2 py-4 text-base font-semibold text-slate-700 transition-colors last:border-none hover:text-[#7c6ee6]"
              >
                {link.name}
              </a>
            ))}

            <a
              href={`https://wa.me/2349058647535?text=${encodeURIComponent(
                "Hello Mide Soles, I would like to enquire about your shoes.",
              )}`}
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
              className="mt-4 flex items-center justify-center gap-2 rounded-full bg-[#08090a] px-5 py-3.5 text-sm font-semibold text-white"
            >
              <ShoppingBag size={18} />
              Order now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;