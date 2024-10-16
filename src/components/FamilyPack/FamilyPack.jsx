import family from "../../assets/images/family.webp";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function FamilyPack() {
  const { t } = useTranslation();

  return (
    <>
      <div className="col-lg-8 services-single-content">
        <div className="image" data-aos="fade-left">
          <img src={family} alt="Thumb" className="img-fluid" />
        </div>

        <div className="text mt-5">
          <h2>{t("plans.family.desc.title")}</h2>
          <p className="mt-3">{t("plans.family.desc.description")}</p>
          <ul className="mt-5">
            <li>
              <strong className="me-2">{t("plans.family.desc.ben1.title")}</strong>
              {t("plans.family.desc.ben1.desc")}
            </li>
            <li>
              <strong className="me-2">{t("plans.family.desc.ben2.title")}</strong>
              {t("plans.family.desc.ben2.desc")}
            </li>
            <li>
              <strong className="me-2">{t("plans.family.desc.ben3.title")}</strong>
              {t("plans.family.desc.ben3.desc")}
            </li>
            <li>
              <strong className="me-2">{t("plans.family.desc.ben4.title")}</strong>
              {t("plans.family.desc.ben4.desc")}
            </li>
            <li>
              <strong className="me-2">{t("plans.family.desc.ben5.title")}</strong>
              {t("plans.family.desc.ben5.desc")}
            </li>
            <li>
              <strong className="me-2">{t("plans.family.desc.ben6.title")}</strong>
              {t("plans.family.desc.ben6.desc")}
            </li>
            <li>
              <strong className="me-2">{t("plans.family.desc.ben7.title")}</strong>
              {t("plans.family.desc.ben7.desc")}
            </li>
            <li>
              <strong className="me-2">{t("plans.family.desc.ben8.title")}</strong>
              {t("plans.family.desc.ben8.desc")}
            </li>
            <li>
              <strong className="me-2">{t("plans.family.desc.ben9.title")}</strong>
              {t("plans.family.desc.ben9.desc")}
            </li>
            <li>
              <strong className="me-2">{t("plans.family.desc.ben10.title")}</strong>
              {t("plans.family.desc.ben10.desc")}
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
