import { ArrowUpRight, MessageCircle } from "lucide-react";

function ProductCard({ product }) {
  const whatsappNumber = "+2349137091248";

  const message = encodeURIComponent(
    `Hello Mide Soles, I am interested in the ${product.name}. Please tell me more about it.`,
  );

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <article className="group">
      <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-[#c0cacc]">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-2 text-xs font-bold text-[#08090a] backdrop-blur">
          {product.category}
        </span>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          aria-label={`Enquire about ${product.name}`}
          className="absolute bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#08090a] shadow-lg transition hover:rotate-6 hover:bg-[#aca2f6]"
        >
          <ArrowUpRight size={20} />
        </a>
      </div>

      <div className="px-1 pt-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="mb-1 text-xs font-bold uppercase tracking-[0.16em] text-[#485693]">
              Mide Soles
            </p>

            <h3 className="text-lg font-black tracking-tight text-[#08090a]">
              {product.name}
            </h3>
          </div>

          <p className="shrink-0 text-sm font-bold text-slate-600">
            {product.price}
          </p>
        </div>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="mt-4 flex items-center gap-2 text-sm font-bold text-[#485693] transition hover:text-[#7c6ee6]"
        >
          <MessageCircle size={17} />
          Enquire on WhatsApp
        </a>
      </div>
    </article>
  );
}

export default ProductCard;