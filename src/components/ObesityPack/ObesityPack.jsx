import obesity from "../../assets/images/obesity.webp";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function ObesityPack() {
  const { t } = useTranslation();

  return (
    <>
      <div className="col-lg-8 services-single-content">
        <div className="image" data-aos="fade-left">
          <img src={obesity} alt="Thumb" className="img-fluid" />
        </div>

        <div className="text mt-5">
          <h2>{t("plans.obesity.desc.title")}</h2>
          <p className="mt-3">{t("plans.obesity.desc.description")}</p>
          <ul className="mt-5">
            <li>
              <strong className="me-2">{t("plans.obesity.desc.ben1.title")}</strong>
              {t("plans.obesity.desc.ben1.desc")}
            </li>
            <li>
              <strong className="me-2">{t("plans.obesity.desc.ben2.title")}</strong>
              {t("plans.obesity.desc.ben2.desc")}
            </li>
            <li>
              <strong className="me-2">{t("plans.obesity.desc.ben3.title")}</strong>
              {t("plans.obesity.desc.ben3.desc")}
            </li>
            <li>
              <strong className="me-2">{t("plans.obesity.desc.ben4.title")}</strong>
              {t("plans.obesity.desc.ben4.desc")}
            </li>
            <li>
              <strong className="me-2">{t("plans.obesity.desc.ben5.title")}</strong>
              {t("plans.obesity.desc.ben5.desc")}
            </li>
            <li>
              <strong className="me-2">{t("plans.obesity.desc.ben6.title")}</strong>
              {t("plans.obesity.desc.ben6.desc")}
            </li>
          </ul>
        </div>

        <Link
          type="button"
          to="/contact"
          className="main-btn rounded-0 text-uppercase position-relative mt-5"
        >
          {t("plans.button1")}
        </Link>
      </div>
    </>
  );
}
