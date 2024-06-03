import  { lazy, Suspense, useEffect, useRef } from 'react';
import './Theme.css';

const Footer = lazy(() => import('./components/Footer').then(module => ({ default: module.Footer }))); 
const ContactUs = lazy(() => import('./components/ContactUs').then(module => ({ default: module.ContactUs })));
const FAQ = lazy(() => import('./components/FAQ').then(module => ({ default: module.FAQ })));
const TeamSection = lazy(() => import('./components/TeamSection').then(module => ({ default: module.TeamSection })));
const InspectionComponentsSection = lazy(() => import('./components/InspectionComponentsSection').then(module => ({ default: module.InspectionComponentsSection })));
const ServicesSection = lazy(() => import('./components/ServicesSection').then(module => ({ default: module.ServicesSection })));
const AboutSection = lazy(() => import('./components/AboutSection').then(module => ({ default: module.AboutSection })));
const HeroSection = lazy(() => import('./components/HeroSection').then(module => ({ default: module.HeroSection })));
const Header = lazy(() => import('./components/Header').then(module => ({ default: module.Header })));
const Gallery = lazy(() => import('./components/Gallery').then(module => ({ default: module.Gallery })));


function App() {
  const backtotopButton = useRef<HTMLAnchorElement>(null);

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
    <Suspense fallback={<div>Loading...</div>}>
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
    </Suspense>
  );
}

export default App;
