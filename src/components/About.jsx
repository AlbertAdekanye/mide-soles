import {
  ArrowUpRight,
  BadgeCheck,
  Heart,
  MapPin,
  ShieldCheck,
} from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Made with care",
    description:
      "We pay attention to the small details that make every pair feel special.",
  },
  {
    icon: ShieldCheck,
    title: "Built to last",
    description:
      "Quality materials and careful finishing help create reliable footwear.",
  },
  {
    icon: BadgeCheck,
    title: "Comfort first",
    description:
      "Our shoes are selected and designed with everyday comfort in mind.",
  },
];

function About() {
  return (
    <section id="about" className="px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-stretch gap-8 lg:grid-cols-2">
          {/* Image */}
          <div className="relative min-h-[500px] overflow-hidden rounded-[2rem] bg-[#c3bbf1] lg:min-h-[700px]">
            <img
              src="https://www.charixshoes.com/cdn/shop/collections/Cream-DIagonal---50-13-ISO-125--_extra-light.jpg?v=1713558637"
              alt="Carefully crafted cream leather shoes"
              loading="lazy"
              onError={(event) => {
                event.currentTarget.onerror = null;
                event.currentTarget.src =
                  "https://placehold.co/1000x1200/c3bbf1/08090a?text=Mide+Soles";
              }}
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 rounded-[1.5rem] bg-white/90 p-6 backdrop-blur-md sm:bottom-8 sm:left-8 sm:right-8">
              <div className="flex items-center gap-2 text-[#485693]">
                <MapPin size={17} />

                <p className="text-xs font-bold uppercase tracking-[0.18em]">
                  Proudly based in Oye-Ekiti
                </p>
              </div>

              <p className="mt-3 text-xl font-black leading-snug text-[#08090a] sm:text-2xl">
                Helping you move through every moment with comfort and
                confidence.
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center rounded-[2rem] bg-white/60 p-7 sm:p-10 lg:p-14">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#7c6ee6]">
              Our story
            </p>

            <h2 className="mt-5 text-4xl font-black leading-tight tracking-[-0.04em] text-[#08090a] sm:text-5xl">
              More than footwear.
              <span className="block text-[#485693]">
                A better way to walk.
              </span>
            </h2>

            <div className="mt-7 space-y-5 text-base leading-7 text-slate-600">
              <p>
                Mide Soles is a footwear business based in Oye-Ekiti, offering
                handmade shoes and carefully selected ready-to-wear designs.
              </p>

              <p>
                We believe the right pair of shoes should do more than complete
                an outfit. It should help you feel comfortable, confident and
                ready for wherever the day takes you.
              </p>

              <p>
                Whether you need something made especially for you or want to
                shop from our available collection, we are committed to helping
                you find a pair that suits your style.
              </p>
            </div>

            {/* Values */}
            <div className="mt-10 space-y-3">
              {values.map((value) => {
                const Icon = value.icon;

                return (
                  <div
                    key={value.title}
                    className="flex gap-4 rounded-2xl border border-black/5 bg-white/70 p-4 transition hover:border-[#aca2f6] hover:bg-white"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#c3bbf1] text-[#08090a]">
                      <Icon size={19} />
                    </div>

                    <div>
                      <h3 className="font-black text-[#08090a]">
                        {value.title}
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-slate-500">
                        {value.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <a
              href="#contact"
              className="group mt-9 flex w-fit items-center gap-3 rounded-full bg-[#08090a] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#485693]"
            >
              Talk to Mide Soles

              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:rotate-12"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;