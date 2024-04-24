import { Footer } from "./components/Footer";
import { ContactUs } from "./components/ContactUs";
import { FAQ } from "./components/FAQ";
import { TeamSection } from "./components/TeamSection";
import { InspectionComponentsSection } from "./components/InspectionComponentsSection";
import { ServicesSection } from "./components/ServicesSection";
import { AboutSection } from "./components/AboutSection";
import { HeroSection } from "./components/HeroSection";
import "./Theme.css";
import { Header } from "./components/Header";
import { Gallery } from "./components/Gallery";
import "./Header.css";
import { useEffect, useRef } from "react";

function App() {
  const backtotopButton = useRef(null);

  const toggleBacktotop = () => {
    if (window.scrollY > 100) {
      backtotopButton.current?.classList.add("active");
    } else {
      backtotopButton.current?.classList.remove("active");
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", toggleBacktotop);
    return () => {
      document.removeEventListener("scroll", toggleBacktotop);
    };
  }, []);

  return (
    <>
      <Header />

      <HeroSection />

      <main id="main">
        <AboutSection />
        <ServicesSection />
        <InspectionComponentsSection />

        <Gallery />

        <TeamSection />
        <FAQ />
        <ContactUs />
      </main>

      <Footer />

      <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
        ref={backtotopButton}
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </>
  );
}

export default App;
