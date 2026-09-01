import { useState } from "react";
import {
  ArrowUpRight,
  Camera,
  MapPin,
  MessageCircle,
  Send,
} from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    shoeType: "",
    message: "",
  });

  // Replace this with the correct WhatsApp number.
  const whatsappNumber = "+2349058647535";

  // Replace these links later.
  const instagramLink = "#";
  const tiktokLink = "#";

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const message = `
Hello Mide Soles,

My name is ${formData.name}.
I am interested in: ${formData.shoeType}.

${formData.message}
    `.trim();

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contact" className="px-4 pb-20 pt-10 sm:px-6 lg:pb-28">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#aca2f6]">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
          {/* Contact information */}
          <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-14">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#485693]">
                Contact us
              </p>

              <h2 className="mt-5 max-w-xl text-4xl font-black leading-tight tracking-[-0.04em] text-[#08090a] sm:text-5xl lg:text-6xl">
                Let’s find your next favourite pair.
              </h2>

              <p className="mt-6 max-w-lg text-base leading-7 text-[#253d57]">
                Have a design in mind or want to ask about an available pair?
                Send us an enquiry and continue the conversation on WhatsApp.
              </p>
            </div>

            <div className="mt-12 space-y-3">
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-black/10 bg-white/35 p-4 transition hover:bg-white/60"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#08090a] text-white">
                    <MessageCircle size={20} />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#485693]">
                      WhatsApp
                    </p>

                    <p className="mt-1 font-black text-[#08090a]">
                      Chat with Mide Soles
                    </p>
                  </div>
                </div>

                <ArrowUpRight
                  size={20}
                  className="transition-transform group-hover:rotate-12"
                />
              </a>

              <div className="flex items-center gap-4 rounded-2xl border border-black/10 bg-white/35 p-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#08090a] text-white">
                  <MapPin size={20} />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#485693]">
                    Location
                  </p>

                  <p className="mt-1 font-black text-[#08090a]">
                    Oye-Ekiti, Ekiti State
                  </p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="mt-10">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#485693]">
                Follow Mide Soles
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href={instagramLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-full bg-[#08090a] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#485693]"
                >
                  <Camera size={17} />
                  Instagram
                </a>

                <a
                  href={tiktokLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-full border border-black/20 px-5 py-3 text-sm font-bold text-[#08090a] transition hover:bg-white/50"
                >
                  TikTok
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Enquiry form */}
          <div className="m-3 rounded-[1.7rem] bg-[#ecebf1] p-6 sm:m-5 sm:p-9 lg:m-6 lg:p-12">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#7c6ee6]">
                Quick enquiry
              </p>

              <h3 className="mt-3 text-3xl font-black tracking-tight text-[#08090a]">
                What are you looking for?
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Complete the form and we’ll open your message directly in
                WhatsApp.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-bold text-[#08090a]"
                >
                  Your name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full rounded-2xl border border-black/10 bg-white/70 px-5 py-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#7c6ee6] focus:bg-white"
                />
              </div>

              <div>
                <label
                  htmlFor="shoeType"
                  className="mb-2 block text-sm font-bold text-[#08090a]"
                >
                  What do you need?
                </label>

                <select
                  id="shoeType"
                  name="shoeType"
                  value={formData.shoeType}
                  onChange={handleChange}
                  required
                  className="w-full appearance-none rounded-2xl border border-black/10 bg-white/70 px-5 py-4 text-sm text-slate-700 outline-none transition focus:border-[#7c6ee6] focus:bg-white"
                >
                  <option value="">Select an option</option>
                  <option value="A custom-made shoe">
                    A custom-made shoe
                  </option>
                  <option value="A ready-to-wear shoe">
                    A ready-to-wear shoe
                  </option>
                  <option value="Sneakers">Sneakers</option>
                  <option value="Women’s footwear">Women’s footwear</option>
                  <option value="More information">More information</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-bold text-[#08090a]"
                >
                  Additional details
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about the design, size, colour or occasion..."
                  rows="5"
                  className="w-full resize-none rounded-2xl border border-black/10 bg-white/70 px-5 py-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#7c6ee6] focus:bg-white"
                />
              </div>

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-3 rounded-full bg-[#08090a] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#485693]"
              >
                Continue on WhatsApp

                <Send
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>

              <p className="text-center text-xs leading-5 text-slate-500">
                Submitting this form does not send anything automatically. It
                opens WhatsApp so you can review the message first.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;