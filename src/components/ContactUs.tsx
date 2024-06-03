import { LazyLoadImage } from "react-lazy-load-image-component";
import visa from "../assets/visa.png";
// import "../assets/css/extra.css";

export function ContactUs() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Contact Us</h2>
          <p>Professional. Flexible. Affordable.</p>
          <p>
            Contact us to get your quote, schedule your appointment, and inquire
            about our services.
          </p>
        </div>

        <div
          className="row no-gutters justify-content-center"
          data-aos="fade-up"
        >
          <div className="col-lg-5 d-flex align-items-stretch">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Serving:</h4>
                <p>Ottawa-Gatineau Metropolitan Area</p>
              </div>

              <div className="email mt-4">
                <a href="mailto:info@613inspections.com">
                  <i className="bi bi-envelope"></i>
                </a>
                <h4>Email:</h4>
                <p>
                  <a href="mailto:info@613inspections.com" className="myLink">
                    info@613inspections.com
                  </a>
                </p>
              </div>

              <div className="phone mt-4">
                <a href="tel:+1613-410-1357">
                  <i className="bi bi-telephone"></i>
                </a>
                <h4>Call:</h4>
                <p>
                  <a href="tel:+1613-410-1357" className="myLink">
                    +1 613-410-1357
                  </a>
                </p>
              </div>

              <div className="phone mt-4">
                <a href="https://www.instagram.com/613inspections/">
                  <i className="bx bxl-instagram"></i>
                </a>
                <h4>Instagram:</h4>
                <p>
                  <a
                    href="https://www.instagram.com/613inspections/"
                    className="myLink"
                  >
                    @613inspections
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="row d-flex align-items-stretch">
              <iframe
                style={{ border: 0, width: "100%", height: "270px" }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d718294.8956576954!2d-76.05416037365434!3d45.31781752573343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce05b25f5113af%3A0x8a6a51e131dd15ed!2sOttawa%2C%20ON!5e0!3m2!1sen!2sca!4v1653794045091!5m2!1sen!2sca"
                allowFullScreen
              ></iframe>
            </div>
            <div className="row mt-3 justify-content-center">
              <div className="col">
                <LazyLoadImage
                  style={{ maxWidth: "50%", maxHeight: "100%" }}
                  src={visa}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
