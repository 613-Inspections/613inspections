import { useState } from "react";

interface FAQItemProps {
  title: string;
  description: string;
}

export function FAQItem({ title, description }: FAQItemProps) {
  const [collapse, setCollapse] = useState(true);

  return (
    <li data-aos="fade-up">
      <i className="bx bx-help-circle icon-help"></i>
      <a
        onClick={() => {
          setCollapse(!collapse);
        }}
        className={collapse ? "collapse" : "collapse show"}
        data-bs-target="#faq-list-2"
      >
        {title}
        <i className="bx bx-chevron-down icon-show"></i>
        <i className="bx bx-chevron-up icon-close"></i>
      </a>
      <div
        id="faq-list-2"
        className={collapse ? "collapse" : "collapse show"}
        data-bs-parent=".faq-list"
      >
        <p>{description}</p>
      </div>
    </li>
  );
}
