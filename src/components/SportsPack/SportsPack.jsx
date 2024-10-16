import sports from "../../assets/images/sports.webp";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function SportsPack() {
  const { t } = useTranslation();

  return (
    <>
      <div className="col-lg-8 services-single-content">
        <div className="image" data-aos="fade-left">
          <img src={sports} alt="Thumb" className="img-fluid" />
        </div>

        <div className="text mt-5">
          <h2>{t("plans.sports.desc.title")}</h2>
          <p className="mt-3">{t("plans.sports.desc.description")}</p>
          <ul className="mt-5">
            <li>
              <strong className="me-2">{t("plans.sports.desc.ben1.title")}</strong>
              {t("plans.sports.desc.ben1.desc")}
            </li>
            <li>
              <strong className="me-2">{t("plans.sports.desc.ben2.title")}</strong>
              {t("plans.sports.desc.ben2.desc")}
            </li>
            <li>
              <strong className="me-2">{t("plans.sports.desc.ben3.title")}</strong>
              {t("plans.sports.desc.ben3.desc")}
            </li>
            <li>
              <strong className="me-2">{t("plans.sports.desc.ben4.title")}</strong>
              {t("plans.sports.desc.ben4.desc")}
            </li>
            <li>
              <strong className="me-2">{t("plans.sports.desc.ben5.title")}</strong>
              {t("plans.sports.desc.ben5.desc")}
            </li>
            <li>
              <strong className="me-2">{t("plans.sports.desc.ben6.title")}</strong>
              {t("plans.sports.desc.ben6.desc")}
            </li>
            <li>
              <strong className="me-2">{t("plans.sports.desc.ben7.title")}</strong>
              {t("plans.sports.desc.ben7.desc")}
            </li>
            <li>
              <strong className="me-2">{t("plans.sports.desc.ben8.title")}</strong>
              {t("plans.sports.desc.ben8.desc")}
            </li>
            <li>
              <strong className="me-2">{t("plans.sports.desc.ben9.title")}</strong>
              {t("plans.sports.desc.ben9.desc")}
            </li>
            <li>
              <strong className="me-2">{t("plans.sports.desc.ben10.title")}</strong>
              {t("plans.sports.desc.ben10.desc")}
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
