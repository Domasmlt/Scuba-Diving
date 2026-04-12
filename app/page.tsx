import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import BubbleRangers from "@/components/BubbleRangers";
import Gallery from "@/components/Gallery";
import CtaBand from "@/components/CtaBand";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";

export default function Home() {
  return (
    <>
      <RevealObserver />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <BubbleRangers />
        <Gallery />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
