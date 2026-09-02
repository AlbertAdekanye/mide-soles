import { ArrowDownRight, ArrowRight, MapPin } from "lucide-react";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden px-4 pb-10 pt-28 sm:px-6"
    >
      {/* Decorative background */}
      <div className="absolute left-[-100px] top-32 h-72 w-72 rounded-full bg-[#aca2f6]/30 blur-3xl" />
      <div className="absolute bottom-10 right-[-80px] h-80 w-80 rounded-full bg-[#c3bbf1]/40 blur-3xl" />

      <div className="relative mx-auto grid min-h-[calc(100vh-9rem)] max-w-7xl overflow-hidden rounded-[2rem] bg-[#c3bbf1] lg:grid-cols-[1.05fr_0.95fr]">
        {/* Text */}
        <div className="relative z-10 flex flex-col justify-center px-6 py-14 sm:px-10 lg:px-16 lg:py-20">
          <div className="mb-7 flex w-fit items-center gap-2 rounded-full border border-black/10 bg-white/40 px-4 py-2 backdrop-blur">
            <MapPin size={15} />

            <span className="text-xs font-bold uppercase tracking-[0.15em]">
              Oye-Ekiti, Nigeria
            </span>
          </div>

          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#485693]">
            Comfort meets craftsmanship
          </p>

          <h1 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-[-0.05em] text-[#08090a] sm:text-6xl lg:text-7xl xl:text-8xl">
            Walk softly.
            <span className="block text-[#485693]">Stand boldly.</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-[#253d57] sm:text-lg">
            Discover beautifully crafted shoes made for comfort, confidence and
            everyday movement. Handmade designs and carefully selected footwear
            for every step.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#shop"
              className="group flex items-center justify-center gap-3 rounded-full bg-[#08090a] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#485693]"
            >
              Explore collection

              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>

            <a
              href="#about"
              className="flex items-center justify-center gap-3 rounded-full border border-[#08090a]/20 bg-white/30 px-7 py-4 text-sm font-bold text-[#08090a] transition hover:bg-white/60"
            >
              Our craftsmanship
            </a>
          </div>

          <div className="mt-12 grid max-w-md grid-cols-3 gap-5 border-t border-black/10 pt-7">
            <div>
              <p className="text-2xl font-black sm:text-3xl">100%</p>
              <p className="mt-1 text-xs font-medium text-[#253d57]">
                Quality focused
              </p>
            </div>

            <div>
              <p className="text-2xl font-black sm:text-3xl">Custom</p>
              <p className="mt-1 text-xs font-medium text-[#253d57]">
                Shoe designs
              </p>
            </div>

            <div>
              <p className="text-2xl font-black sm:text-3xl">Local</p>
              <p className="mt-1 text-xs font-medium text-[#253d57]">
                Oye-Ekiti
              </p>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="relative min-h-[420px] overflow-hidden lg:min-h-full">
          <div className="absolute inset-5 overflow-hidden rounded-[1.6rem] bg-[#aca2f6] lg:inset-7 lg:left-0">
            <img
              src="/images/products/olive-buckle-slides.png"
              alt="Premium shoes displayed on a neutral background"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </div>

          {/* Floating card */}
          <div className="absolute bottom-9 left-9 right-9 flex items-center justify-between rounded-2xl bg-white/90 p-4 shadow-xl backdrop-blur-md sm:left-auto sm:w-64 lg:bottom-12 lg:right-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                New collection
              </p>

              <p className="mt-1 font-black text-[#08090a]">
                Made for your journey
              </p>
            </div>

            <a
              href="#shop"
              aria-label="View the shoe collection"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#08090a] text-white transition hover:bg-[#7c6ee6]"
            >
              <ArrowDownRight size={19} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;