import { useTranslation } from "react-i18next";

export default function RefundSection() {
  const { t } = useTranslation();

  // Array of policy keys to render all sections dynamically
  const policies = [
    "policy1",
    "policy2",
    "policy3",
    "policy4",
    "policy5",
    "policy6",
  ];

  return (
    <section className="refund-policy main-p">
      <div className="container">
        <div className="box-border p-5">
          {policies.map((policyKey, index) => (
            <div className="mb-4" key={index}>
              <h4>{index + 1}- {t(`refundPolicy.${policyKey}.title`)}</h4>
              <p>{t(`refundPolicy.${policyKey}.desc`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
