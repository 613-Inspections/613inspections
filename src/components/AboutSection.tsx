import { LazyLoadImage } from "react-lazy-load-image-component"; 


export function AboutSection() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-7" data-aos="fade-right">
            <LazyLoadImage
              loading="lazy"
              src="/img/about/about.jpeg"
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="col-xl-6 col-lg-5 pt-5 pt-lg-0">
            <h3 data-aos="fade-up">About 613 Inspections Inc.</h3>
            <p data-aos="fade-up">
              From home inspections to construction reviews, our expert team has
              you covered. Trust us to deliver the results you're after!
            </p>
            <div className="icon-box" data-aos="fade-up">
              <i className="bx bx-check-shield"></i>
              <h4>Professional</h4>
              <p>
                Trust the seal of approval - certified and experienced
                inspectors at your doorstep.
              </p>
            </div>

            <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
              <i className="bx bx-cog"></i>
              <h4>Technical Expertise</h4>
              <p>
                A deep understanding of construction and engineering, combined
                with knowledge of various systems and components.
              </p>
            </div>

            <div className="icon-box" data-aos="fade-up">
              <i className="bx bx-search"></i>
              <h4>Attention to Details</h4>
              <p>
                No detail is too small! Our meticulous inspectors leave no stone
                unturned in their thorough property evaluations.
              </p>
            </div>

            <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
              <i className="bx bx-calendar-week"></i>
              <h4>Flexible</h4>
              <p>Our flexible scheduling is tailored to your needs.</p>
            </div>

            <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
              <i className="bx bx-dollar-circle"></i>
              <h4>Affordable</h4>
              <p>
                Quality doesn't have to break the bank. Experience affordable
                excellence with us!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
