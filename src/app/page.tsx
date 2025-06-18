import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import HowWeWork from "@/components/HowWeWork";
import UseCases from "@/components/UseCases";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <WhatWeDo />
      <HowWeWork />
      <UseCases />
      <About />
      <Contact />
      <Footer />
      {/* Other sections will be added here */}
    </main>
  );
}
