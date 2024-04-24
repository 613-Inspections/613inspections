import { FAQItem } from "./FAQItem";

export function FAQ() {
  return (
    <section id="faq" className="faq section-bg">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>F.A.Q.</h2>
        </div>

        <div className="faq-list">
          <ul>
            <FAQItem
              title={"What is a home inspection?"}
              description={
                "A home inspection is a professional evaluation of a property's condition and structure, aimed at identifying any issues or problems that may affect its value or safety."
              }
            />

            <li data-aos="fade-up">
              <i className="bx bx-help-circle icon-help"></i>
              <a
                data-bs-toggle="collapse"
                className="collapse"
                data-bs-target="#faq-list-9"
              >
                What does a home inspection include?
                <i className="bx bx-chevron-down icon-show"></i>
                <i className="bx bx-chevron-up icon-close"></i>
              </a>
              <div
                id="faq-list-9"
                className="collapse"
                data-bs-parent=".faq-list"
              >
                <p>
                  A home inspection typically involves a comprehensive
                  assessment of the property's exterior and interior, including
                  the roof, foundation, electrical and plumbing systems, heating
                  and cooling systems, and other components.
                </p>
              </div>
            </li>

            <li data-aos="fade-up">
              <i className="bx bx-help-circle icon-help"></i>
              <a
                data-bs-toggle="collapse"
                // className="collapse"
                data-bs-target="#faq-list-4"
              >
                My home is a new-build. Why should I get it inspected?
                <i className="bx bx-chevron-down icon-show"></i>
                <i className="bx bx-chevron-up icon-close"></i>
              </a>
              <div
                id="faq-list-4"
                // className="collapse"
                data-bs-parent=".faq-list"
              >
                <p>
                  Unfortunately, new homes are not perfect. Multiple
                  subcontractors are relied upon to build new homes. Due to high
                  construction demands and manpower shortages, we have seen
                  multiple homes being rushed through just to get the job done
                  on time. This leads to deficiencies that could end up
                  impacting the structural integrity of the home if issues are
                  not rectified in a timely manner.
                </p>
              </div>
            </li>

            <li data-aos="fade-up">
              <i className="bx bx-help-circle icon-help"></i>
              <a
                data-bs-toggle="collapse"
                className="collapse"
                data-bs-target="#faq-list-41"
              >
                What is a PDI (Pre-Delivery Inspection)?
                <i className="bx bx-chevron-down icon-show"></i>
                <i className="bx bx-chevron-up icon-close"></i>
              </a>
              <div
                id="faq-list-41"
                className="collapse"
                data-bs-parent=".faq-list"
              >
                <p>
                  A Pre-Delivery Inspection is a thorough examination of a newly
                  constructed home before the buyer takes possession. It ensures
                  that the home meets specified standards and addresses any
                  issues before occupancy.
                </p>
              </div>
            </li>

            <li data-aos="fade-up">
              <i className="bx bx-help-circle icon-help"></i>
              <a
                data-bs-toggle="collapse"
                className="collapse"
                data-bs-target="#faq-list-42"
              >
                What is a 30-Day Tarion Inspection?
                <i className="bx bx-chevron-down icon-show"></i>
                <i className="bx bx-chevron-up icon-close"></i>
              </a>
              <div
                id="faq-list-42"
                className="collapse"
                data-bs-parent=".faq-list"
              >
                <p>
                  The 30-Day Tarion Inspection is a part of the Tarion Warranty
                  Corporation’s new home warranty program in some regions. It
                  allows homeowners to identify and report any defects or issues
                  within the first 30 days of occupancy.
                </p>
              </div>
            </li>

            <li data-aos="fade-up">
              <i className="bx bx-help-circle icon-help"></i>
              <a
                data-bs-toggle="collapse"
                className="collapse"
                data-bs-target="#faq-list-43"
              >
                When should I consider a PDI?
                <i className="bx bx-chevron-down icon-show"></i>
                <i className="bx bx-chevron-up icon-close"></i>
              </a>
              <div
                id="faq-list-43"
                className="collapse"
                data-bs-parent=".faq-list"
              >
                <p>
                  A PDI is typically conducted before you take possession of a
                  new home. It’s crucial to identify and address
                  construction-related issues before moving in.
                </p>
              </div>
            </li>

            <li data-aos="fade-up">
              <i className="bx bx-help-circle icon-help"></i>
              <a
                data-bs-toggle="collapse"
                className="collapse"
                data-bs-target="#faq-list-44"
              >
                When is the 30-Day Tarion Inspection applicable?
                <i className="bx bx-chevron-down icon-show"></i>
                <i className="bx bx-chevron-up icon-close"></i>
              </a>
              <div
                id="faq-list-44"
                className="collapse"
                data-bs-parent=".faq-list"
              >
                <p>
                  The 30-Day Tarion Inspection is relevant within the first 30
                  days of occupancy. During this period, homeowners should
                  document and report any defects covered under the Tarion
                  warranty.
                </p>
              </div>
            </li>

            <li data-aos="fade-up">
              <i className="bx bx-help-circle icon-help"></i>
              <a
                data-bs-toggle="collapse"
                className="collapse"
                data-bs-target="#faq-list-45"
              >
                What issues are covered under PDI?
                <i className="bx bx-chevron-down icon-show"></i>
                <i className="bx bx-chevron-up icon-close"></i>
              </a>
              <div
                id="faq-list-45"
                className="collapse"
                data-bs-parent=".faq-list"
              >
                <p>
                  A PDI generally covers issues related to construction quality,
                  finishes, and functionality. It’s an opportunity to catch and
                  rectify problems before you fully settle into your new home.
                </p>
              </div>
            </li>

            <li data-aos="fade-up">
              <i className="bx bx-help-circle icon-help"></i>
              <a
                data-bs-toggle="collapse"
                className="collapse"
                data-bs-target="#faq-list-46"
              >
                What issues should I report during the 30-Day Tarion Inspection?
                <i className="bx bx-chevron-down icon-show"></i>
                <i className="bx bx-chevron-up icon-close"></i>
              </a>
              <div
                id="faq-list-46"
                className="collapse"
                data-bs-parent=".faq-list"
              >
                <p>
                  The 30-Day Tarion Inspection is focused on addressing issues
                  covered under the Tarion warranty, including any defects in
                  workmanship or materials that emerge within the initial 30
                  days.
                </p>
              </div>
            </li>

            <li data-aos="fade-up">
              <i className="bx bx-help-circle icon-help"></i>
              <a
                data-bs-toggle="collapse"
                className="collapse"
                data-bs-target="#faq-list-47"
              >
                Are these inspections mutually exclusive?
                <i className="bx bx-chevron-down icon-show"></i>
                <i className="bx bx-chevron-up icon-close"></i>
              </a>
              <div
                id="faq-list-47"
                className="collapse"
                data-bs-parent=".faq-list"
              >
                <p>
                  No, they are not mutually exclusive. A PDI is conducted before
                  possession, while the 30-Day Tarion Inspection takes place
                  within the first month of occupancy. Both are important steps
                  in ensuring the quality and integrity of your new home.
                </p>
              </div>
            </li>

            <li data-aos="fade-up">
              <i className="bx bx-help-circle icon-help"></i>
              <a
                data-bs-toggle="collapse"
                className="collapse"
                data-bs-target="#faq-list-48"
              >
                Can I skip these inspections?
                <i className="bx bx-chevron-down icon-show"></i>
                <i className="bx bx-chevron-up icon-close"></i>
              </a>
              <div
                id="faq-list-48"
                className="collapse"
                data-bs-parent=".faq-list"
              >
                <p>
                  It’s not advisable to skip inspections. Both the PDI and
                  30-Day Tarion Inspection provide opportunities to catch and
                  address issues early, ensuring that your new home meets
                  quality standards.
                </p>
              </div>
            </li>

            <li data-aos="fade-up">
              <i className="bx bx-help-circle icon-help"></i>
              <a
                data-bs-toggle="collapse"
                className="collapse"
                data-bs-target="#faq-list-49"
              >
                How do I initiate these inspections?
                <i className="bx bx-chevron-down icon-show"></i>
                <i className="bx bx-chevron-up icon-close"></i>
              </a>
              <div
                id="faq-list-49"
                className="collapse"
                data-bs-parent=".faq-list"
              >
                <p>
                  The PDI is typically scheduled by the builder, and the 30-Day
                  Tarion Inspection process involves homeowners submitting a
                  form to Tarion within the specified timeframe. Check with your
                  builder and consult Tarion guidelines for specific procedures.
                </p>
              </div>
            </li>

            <li data-aos="fade-up">
              <i className="bx bx-help-circle icon-help"></i>
              <a
                data-bs-toggle="collapse"
                className="collapse"
                data-bs-target="#faq-list-50"
              >
                What if issues are identified during these inspections?
                <i className="bx bx-chevron-down icon-show"></i>
                <i className="bx bx-chevron-up icon-close"></i>
              </a>
              <div
                id="faq-list-50"
                className="collapse"
                data-bs-parent=".faq-list"
              >
                <p>
                  If issues are found during the inspections, they are typically
                  documented and reported. The builder is then responsible for
                  addressing and rectifying the identified problems, ensuring
                  that your new home meets the necessary standards.
                </p>
              </div>
            </li>

            <li data-aos="fade-up">
              <i className="bx bx-help-circle icon-help"></i>
              <a
                data-bs-toggle="collapse"
                className="collapse"
                data-bs-target="#faq-list-7"
              >
                How much does an inspection cost?
                <i className="bx bx-chevron-down icon-show"></i>
                <i className="bx bx-chevron-up icon-close"></i>
              </a>
              <div
                id="faq-list-7"
                className="collapse"
                data-bs-parent=".faq-list"
              >
                <p>
                  The fee will depend on the size of the home and what
                  inspection service is required. We are set up to take Visa,
                  MasterCard, American Express or cash. Call 613-410-1357 today
                  for a quote!
                </p>
              </div>
            </li>

            <li data-aos="fade-up">
              <i className="bx bx-help-circle icon-help"></i>
              <a
                data-bs-toggle="collapse"
                className="collapse"
                data-bs-target="#faq-list-8"
              >
                Why do I need a home inspection?
                <i className="bx bx-chevron-down icon-show"></i>
                <i className="bx bx-chevron-up icon-close"></i>
              </a>
              <div
                id="faq-list-8"
                className="collapse"
                data-bs-parent=".faq-list"
              >
                <p>
                  A home inspection is a crucial step in the home buying
                  process, as it enables you to identify any issues or problems
                  that may require attention before finalizing the purchase. It
                  also provides you with a better understanding of the overall
                  condition of the property.
                </p>
              </div>
            </li>

            <li data-aos="fade-up">
              <i className="bx bx-help-circle icon-help"></i>
              <a
                data-bs-toggle="collapse"
                className="collapse"
                data-bs-target="#faq-list-11"
              >
                How long does a home inspection take?
                <i className="bx bx-chevron-down icon-show"></i>
                <i className="bx bx-chevron-up icon-close"></i>
              </a>
              <div
                id="faq-list-11"
                className="collapse"
                data-bs-parent=".faq-list"
              >
                <p>
                  The duration of a home inspection can vary based on the size
                  and condition of the property. However, most home inspections
                  take between 2-4 hours to complete.
                </p>
              </div>
            </li>

            <li data-aos="fade-up">
              <i className="bx bx-help-circle icon-help"></i>
              <a
                data-bs-toggle="collapse"
                className="collapse"
                data-bs-target="#faq-list-12"
              >
                Can I attend the home inspection?
                <i className="bx bx-chevron-down icon-show"></i>
                <i className="bx bx-chevron-up icon-close"></i>
              </a>
              <div
                id="faq-list-12"
                className="collapse"
                data-bs-parent=".faq-list"
              >
                <p>
                  Yes, it is advisable that the buyer attends the home
                  inspection. This allows the buyer to ask questions and receive
                  critical information about the property directly from the
                  inspector.
                </p>
              </div>
            </li>

            <li data-aos="fade-up">
              <i className="bx bx-help-circle icon-help"></i>
              <a
                data-bs-toggle="collapse"
                className="collapse"
                data-bs-target="#faq-list-13"
              >
                What happens if the home inspection reveals issues?
                <i className="bx bx-chevron-down icon-show"></i>
                <i className="bx bx-chevron-up icon-close"></i>
              </a>
              <div
                id="faq-list-13"
                className="collapse"
                data-bs-parent=".faq-list"
              >
                <p>
                  If the home inspection uncovers issues or problems with the
                  property, the buyer can negotiate with the seller to address
                  these issues or may choose to withdraw their offer.
                </p>
              </div>
            </li>

            <li data-aos="fade-up">
              <i className="bx bx-help-circle icon-help"></i>
              <a
                data-bs-toggle="collapse"
                className="collapse"
                data-bs-target="#faq-list-14"
              >
                Is it possible to waive a home inspection?
                <i className="bx bx-chevron-down icon-show"></i>
                <i className="bx bx-chevron-up icon-close"></i>
              </a>
              <div
                id="faq-list-14"
                className="collapse"
                data-bs-parent=".faq-list"
              >
                <p>
                  Although not recommended, a home inspection can be waived if
                  the buyer is comfortable with the condition of the property
                  and understands the potential risks involved. Nonetheless, it
                  is not advisable as it can result in costly repairs and
                  potential safety hazards in the future.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
