import { Footer } from "./components/Footer";
import { ContactUs } from "./components/ContactUs";
import { FAQ } from "./components/FAQ";
import { TeamSection } from "./components/TeamSection";
import { InspectionComponentsSection } from "./components/InspectionComponentsSection";
import { ServicesSection } from "./components/ServicesSection";
import { AboutSection } from "./components/AboutSection";
import { HeroSection } from "./components/HeroSection";
import "./App.css";
import { Header } from "./components/Header";
import { Gallery } from "./components/Gallery";

function App() {
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
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </>
  );
}

export default App;
