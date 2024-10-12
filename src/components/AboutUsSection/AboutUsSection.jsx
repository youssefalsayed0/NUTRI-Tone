import { useTranslation } from "react-i18next";
import icon from "../../assets/images/icon-light.webp"
import logo from "../../assets/images/logo.webp";
import AnimatedTitle from "../AnimatedTitle/AnimatedTitle";


export default function AboutUsSection() {
  const { t } = useTranslation();
  return (
    <>
      <section className="about-us-section main-p sec-background position-relative">
        <img src={icon} alt="icon"  className="position-absolute icon"/>
      <AnimatedTitle text={t("main-title.about")} title={t("main-title.about")}/>
        <div className="container">
          <div className="row gy-5 align-items-center">
            <div className="col-lg-6">
              <div className="image " data-aos="fade-right">
                <img src={logo} alt="factory" className="img-fluid rounded-3" loading="lazy"/>
              </div>
            </div>
            <div className="col-lg-6 info">
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="10" viewBox="0 0 35 10" fill="none"><path d="M15.1107 0H10.1259L0.954102 9.06122H5.93894L15.1107 0Z" fill="#eefb13"></path><path d="M24.7416 0H19.7567L10.585 9.06122H15.5698L24.7416 0Z" fill="#eefb13"></path><path d="M34.3724 0H29.3833L20.2158 9.06122H25.1964L34.3724 0Z" fill="#eefb13"></path></svg>
              <h2 data-aos="fade-left" className="fw-semibold">{t("about-us-section.title")}</h2>
              <p data-aos="fade-left" data-aos-delay="200" className="mt-4 text-secondary">
                {t("about-us-section.desc1")}
              </p>
              <p data-aos="fade-left" data-aos-delay="300" className="mt-2 text-secondary">
                {t("about-us-section.desc2")}
              </p>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}