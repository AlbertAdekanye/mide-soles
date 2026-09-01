import {
  BadgeCheck,
  Footprints,
  Hammer,
  Ruler,
  Sparkles,
} from "lucide-react";

const services = [
  {
    id: 1,
    number: "01",
    title: "Custom-made shoes",
    description:
      "Get a pair made specifically for your style, preferred colour and measurements.",
    icon: Ruler,
  },
  {
    id: 2,
    number: "02",
    title: "Handmade craftsmanship",
    description:
      "Every handmade pair is carefully constructed with attention to finishing and durability.",
    icon: Hammer,
  },
  {
    id: 3,
    number: "03",
    title: "Ready-to-wear shoes",
    description:
      "Shop carefully selected footwear for work, events and comfortable everyday use.",
    icon: Footprints,
  },
  {
    id: 4,
    number: "04",
    title: "Quality finishing",
    description:
      "Each pair is checked carefully to ensure it meets our quality and comfort standards.",
    icon: BadgeCheck,
  },
];

function Services() {
  return (
    <section id="services" className="bg-[#08090a] px-4 py-20 text-white sm:px-6 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-2 text-[#aca2f6]">
              <Sparkles size={17} />

              <p className="text-sm font-bold uppercase tracking-[0.3em]">
                The Soft Soles difference
              </p>
            </div>

            <h2 className="max-w-3xl text-4xl font-black leading-tight tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Made with care.
              <span className="block text-[#aca2f6]">Designed for every step.</span>
            </h2>
          </div>

          <p className="max-w-lg text-base leading-7 text-slate-400 lg:justify-self-end">
            From custom-made footwear to ready-to-wear designs, we help you find
            shoes that look good, feel comfortable and suit your lifestyle.
          </p>
        </div>

        {/* Services */}
        <div className="mt-14 grid overflow-hidden rounded-[2rem] border border-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.id}
                className="group relative min-h-80 border-b border-white/10 p-7 transition-colors hover:bg-[#aca2f6] hover:text-[#08090a] sm:border-r lg:border-b-0"
              >
                <div className="flex items-start justify-between">
                  <span className="text-sm font-bold text-slate-500 transition-colors group-hover:text-[#485693]">
                    {service.number}
                  </span>

                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 transition-colors group-hover:border-black/10 group-hover:bg-white/40">
                    <Icon size={21} />
                  </div>
                </div>

                <div className="absolute bottom-7 left-7 right-7">
                  <h3 className="text-xl font-black">{service.title}</h3>

                  <p className="mt-3 text-sm leading-6 text-slate-400 transition-colors group-hover:text-[#253d57]">
                    {service.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {/* Process */}
        <div className="mt-20 grid gap-10 rounded-[2rem] bg-[#151619] p-7 sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:p-14">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#aca2f6]">
              Custom order process
            </p>

            <h3 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
              Your perfect pair in four simple steps.
            </h3>
          </div>

          <div className="space-y-6">
            {[
              {
                number: "01",
                title: "Choose your design",
                text: "Send a picture or select one of our available designs.",
              },
              {
                number: "02",
                title: "Share your details",
                text: "Tell us your shoe size, preferred colour and other requirements.",
              },
              {
                number: "03",
                title: "Confirm your order",
                text: "Review the details, agree on the price and confirm your order.",
              },
              {
                number: "04",
                title: "Production and delivery",
                text: "We create your pair and arrange collection or delivery when ready.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="grid gap-3 border-b border-white/10 pb-6 sm:grid-cols-[50px_1fr]"
              >
                <span className="text-sm font-black text-[#aca2f6]">
                  {step.number}
                </span>

                <div>
                  <h4 className="font-bold">{step.title}</h4>
                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;