import principleInspectorPhoto from "../assets/team/team-0.jpeg";
import carson from "../assets/team/carson-dunlop-school.jpeg";
import cmiStamp from "../assets/team/cmi-stamp.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

export function TeamSection() {
  return (
    <section id="team" className="team">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Team</h2>
        </div>

        <div className="row">
          <div className="col-lg-3 col-sm-6" data-aos="fade-up">
            <div className="member">
              <LazyLoadImage src={principleInspectorPhoto} className="img-fluid" alt="" />
            </div>
          </div>
          <div className="col-lg-6 col-sm-6" data-aos="fade-up">
            <h4>Sam Hussien, CMI, P.Eng., PMP</h4>
            <p>
              <i>Principal Inspector</i>
            </p>
            <p>
              613 Inspections Inc. was founded by our principal inspector, Sam
              Hussien. Sam is a Certified Master Inspector (CMI) with the
              International Association of Certified Home Inspectors
              (InterNACHI). He is also a well-respected engineer in the
              construction industry. Sam has inspected hundreds of properties
              across the National Capital Region and has saved his clients
              thousands of dollars by rapidly identifying issues during the
              inspection service.
            </p>
            <p>
              Certified Master Inspector (CMI) is both a U.S. and Canadian
              registered trademark of the Master Inspector Certification Board,
              Inc. CMI is the inspection industry’s top professional designation
              and is awarded to qualifying inspectors who have demonstrated the
              highest level of competency.
            </p>
            <p>
              Sam is also a distinctive graduate from Carson Dunlop, the school
              of home inspection. Carson Dunlop is a private college and
              Canada’s largest and oldest inspection firm. The training received
              is considered the gold standard in the industry across North
              America.
            </p>
          </div>
        </div>
        <div className="row">
          <div
            className="col-lg-3 col-sm-3 col-6 offset-lg-3 offset-sm-6"
            data-aos="fade-up"
          >
            <LazyLoadImage src={carson} className="img-fluid" alt="" />
          </div>
          <div
            className="col-lg-3 col-sm-3 col-6 offset-lg-0"
            data-aos="fade-up"
          >
            <LazyLoadImage src={cmiStamp} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
