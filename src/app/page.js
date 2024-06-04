import Header from "./components/Header";
import Hero from "./components/Hero";
import Cars from "./components/Cars";
import About from "./components/About";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function Home() {
  return (
    <main className="max-w-[1920px] body mx-auto relative overflow-hidden">
      <Header />
      <Hero />
      <Cars />
      <About />
      <Testimonial />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
}

// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import Cars from "./components/Cars";
// import About from "./components/About";
// import Testimonial from "./components/Testimonial";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";

// export default function Home() {
//   return (
//     <main className="max-w-[1920px] body mx-auto relative overflow-hidden">
//       <Header />
//       <Hero />
//       <Cars />
//       <About />
//       <Testimonial />
//       <Contact />
//       <Footer />
//     </main>
//   );
// }
