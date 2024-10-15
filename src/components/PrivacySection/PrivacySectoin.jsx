import { useTranslation } from "react-i18next";

export default function PrivacySection() {
  const { t } = useTranslation();

  // Array of policy section keys to render all sections dynamically
  const policySections = [
    "section1",
    "section2",
    "section3",
    "section4",
    "section5",
    "section6",
    "section7",
    "section8",
    "section9",
  ];

  return (
    <section className="privacy-policy main-p">
      <div className="container">
        <div className="box-border p-5">
          {policySections.map((sectionKey, index) => (
            <div className="mb-4" key={index}>
              <h4>{index + 1}- {t(`privacyPolicy.${sectionKey}.title`)}</h4>
              <p>{t(`privacyPolicy.${sectionKey}.desc`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
