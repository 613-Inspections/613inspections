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
            <FAQItem
              title={"What does a home inspection include?"}
              description={
                "A home inspection typically involves a comprehensive assessment of the property's exterior and interior, including the roof, foundation, electrical and plumbing systems, heating and cooling systems, and other components."
              }
            />
            <FAQItem
              title={"My home is a new-build. Why should I get it inspected?"}
              description={
                "Unfortunately, new homes are not perfect. Multiple subcontractors are relied upon to build new homes. Due to high construction demands and manpower shortages, we have seen multiple homes being rushed through just to get the job done on time. This leads to deficiencies that could end up impacting the structural integrity of the home if issues are not rectified in a timely manner."
              }
            />
            <FAQItem
              title={"What is a PDI (Pre-Delivery Inspection)?"}
              description={
                "A Pre-Delivery Inspection is a thorough examination of a newly constructed home before the buyer takes possession. It ensures that the home meets specified standards and addresses any issues before occupancy."
              }
            />
            <FAQItem
              title={"What is a 30-Day Tarion Inspection?"}
              description={
                "The 30-Day Tarion Inspection is a part of the Tarion Warranty Corporation’s new home warranty program in some regions. It allows homeowners to identify and report any defects or issues within the first 30 days of occupancy."
              }
            />
            <FAQItem
              title={"When should I consider a PDI?"}
              description={
                "A PDI is typically conducted before you take possession of a new home. It’s crucial to identify and address construction-related issues before moving in."
              }
            />
            <FAQItem
              title={"When is the 30-Day Tarion Inspection applicable?"}
              description={
                "The 30-Day Tarion Inspection is relevant within the first 30 days of occupancy. During this period, homeowners should document and report any defects covered under the Tarion warranty."
              }
            />
            <FAQItem
              title={"What issues are covered under PDI?"}
              description={
                "A PDI generally covers issues related to construction quality, finishes, and functionality. It’s an opportunity to catch and rectify problems before you fully settle into your new home."
              }
            />
            <FAQItem
              title={
                "What issues should I report during the 30-Day Tarion Inspection?"
              }
              description={
                "The 30-Day Tarion Inspection is focused on addressing issues covered under the Tarion warranty, including any defects in workmanship or materials that emerge within the initial 30 days."
              }
            />
            <FAQItem
              title={"Are these inspections mutually exclusive?"}
              description={
                "No, they are not mutually exclusive. A PDI is conducted before possession, while the 30-Day Tarion Inspection takes place within the first month of occupancy. Both are important steps in ensuring the quality and integrity of your new home."
              }
            />
            <FAQItem
              title={"Can I skip these inspections?"}
              description={
                "It’s not advisable to skip inspections. Both the PDI and 30-Day Tarion Inspection provide opportunities to catch and address issues early, ensuring that your new home meets quality standards."
              }
            />
            <FAQItem
              title={"How do I initiate these inspections?"}
              description={
                "The PDI is typically scheduled by the builder, and the 30-Day Tarion Inspection process involves homeowners submitting a form to Tarion within the specified timeframe. Check with your builder and consult Tarion guidelines for specific procedures."
              }
            />
            <FAQItem
              title={"What if issues are identified during these inspections?"}
              description={
                "If issues are found during the inspections, they are typically documented and reported. The builder is then responsible for addressing and rectifying the identified problems, ensuring that your new home meets the necessary standards."
              }
            />
            <FAQItem
              title={"How much does an inspection cost?"}
              description={
                "The fee will depend on the size of the home and what inspection service is required. We are set up to take Visa, MasterCard, American Express or cash. Call 613-410-1357 today for a quote!"
              }
            />
            <FAQItem
              title={"Why do I need a home inspection?"}
              description={
                "A home inspection is a crucial step in the home buying process, as it enables you to identify any issues or problems that may require attention before finalizing the purchase. It also provides you with a better understanding of the overall condition of the property."
              }
            />
            <FAQItem
              title={"How long does a home inspection take?"}
              description={
                "The duration of a home inspection can vary based on the size and condition of the property. However, most home inspections take between 2-4 hours to complete."
              }
            />
            <FAQItem
              title={"Can I attend the home inspection?"}
              description={
                "Yes, it is advisable that the buyer attends the home inspection. This allows the buyer to ask questions and receive critical information about the property directly from the inspector."
              }
            />
            <FAQItem
              title={"What happens if the home inspection reveals issues?"}
              description={
                " If the home inspection uncovers issues or problems with the property, the buyer can negotiate with the seller to address these issues or may choose to withdraw their offer."
              }
            />
            <FAQItem
              title={"Is it possible to waive a home inspection?"}
              description={
                "Although not recommended, a home inspection can be waived if the buyer is comfortable with the condition of the property and understands the potential risks involved. Nonetheless, it is not advisable as it can result in costly repairs and potential safety hazards in the future."
              }
            />
          </ul>
        </div>
      </div>
    </section>
  );
}
