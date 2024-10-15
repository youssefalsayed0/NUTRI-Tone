import { useTranslation } from "react-i18next";

export default function TermsSection() {
    const { t } = useTranslation();

    // Array of term keys to render all terms dynamically
    const terms = [
      "term1",
      "term2",
      "term3",
      "term4",
      "term5",
      "term6",
      "term7",
      "term8",
      "term9",
      "term10",
      "term11",
      "term12",
    ];
  return (  
 <>
 <section className="terms main-p">
      <div className="container">
        <div className="box-border p-5 px-3 px-md-5">
          {terms.map((termKey, index) => (
            <div className="mb-4" key={index}>
              <h4>{index + 1}- {t(`terms.${termKey}.title`)}</h4>
              <p>{t(`terms.${termKey}.desc`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}
