export function HeroSection() {
  return (
    <section
      id="hero"
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <div className="container text-center text-md-left" data-aos="fade-up">
        <h1>
          Know before you buy: Let our inspectors give you the full picture!
        </h1>
        <a
          // style={{ textDecoration: "none" }}
          href="#contact"
          className="btn-get-started scrollto"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
}
