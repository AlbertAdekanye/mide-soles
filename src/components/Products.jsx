import { useState } from "react";
import { ArrowRight } from "lucide-react";
import ProductCard from "./ProductCard";
import { products } from "../data/products";

const categories = ["All", "Slides", "Sandals", "Mules"];

function Products() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <section id="shop" className="px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#7c6ee6]">
              Our collection
            </p>

            <h2 className="max-w-2xl text-4xl font-black leading-tight tracking-[-0.04em] text-[#08090a] sm:text-5xl lg:text-6xl">
              Find the perfect pair for every step.
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-slate-600">
            Explore our handmade designs and carefully selected footwear. Every
            pair is chosen with comfort, quality and personal style in mind.
          </p>
        </div>

        {/* Filters */}
        <div className="mt-12 flex gap-3 overflow-x-auto pb-3">
          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`shrink-0 rounded-full px-6 py-3 text-sm font-bold transition ${
                  isActive
                    ? "bg-[#08090a] text-white"
                    : "border border-black/10 bg-white/50 text-slate-600 hover:bg-white"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Product grid */}
        <div className="mt-10 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* WhatsApp CTA */}
        <div className="mt-16 flex flex-col items-start justify-between gap-6 rounded-[2rem] bg-[#08090a] px-7 py-8 text-white sm:flex-row sm:items-center sm:px-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#aca2f6]">
              Looking for something unique?
            </p>

            <h3 className="mt-2 text-2xl font-black sm:text-3xl">
              Request a custom-made pair.
            </h3>
          </div>

          <a
            href="https://wa.me/+2349137091248"
            target="_blank"
            rel="noreferrer"
            className="flex shrink-0 items-center gap-3 rounded-full bg-[#aca2f6] px-6 py-4 text-sm font-bold text-[#08090a] transition hover:bg-white"
          >
            Start an enquiry
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Products;