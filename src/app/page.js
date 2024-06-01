import Header from "./components/Header";
import Hero from "./components/Hero";
import Cars from "./components/Cars";
import About from "./components/About";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="max-w-[1920px] bg-gray-200 mx-auto relative overflow-hidden">
      <Header />
      <Hero />
      <Cars />
      <About />
      <Reviews />
      <Contact />
      <Contact />
      <Footer />
    </main>
  );
}
