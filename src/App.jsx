import { Analytics } from "@vercel/analytics/react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#ecebf1] text-[#08090a]">
      <Navbar />

      <main>
        <Hero />
        <Products />
        <Services />
        <About />
        <Contact />
      </main>

      <Footer />
      <WhatsAppButton />
      <Analytics />
    </div>
  );
}

export default App;