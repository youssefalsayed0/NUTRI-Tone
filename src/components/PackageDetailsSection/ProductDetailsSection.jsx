import { useTranslation } from "react-i18next";
import { NavLink, Outlet } from "react-router-dom";

export default function PackageDetailsSection() {
    const {t} = useTranslation();
  return (
    <>
      <section className="packages-details-section main-p">
        <div className="container">
          <div className="packages-details-items">
            <div className="row gy-5">
              <div className="col-lg-4 packages-sidebar  order-last order-lg-first">
                {/* Single Widget */}
                <div className="single-widget services-list">
                  <div className="content">
                    <ul className=" list-unstyled text-uppercase ">
                      <li >
                        <NavLink activeClassName="active" to="obesity&underweight">{t("packages-details-section.links.obesity")}</NavLink>
                      </li>
                      <li>
                      <NavLink to="clinical-nutrition" activeClassName="active">{t("packages-details-section.links.clinical")}</NavLink>
                      </li>
                      <li>
                      <NavLink to="kids-nutrition" activeClassName="active">{t("packages-details-section.links.kids")}</NavLink>
                      </li>
                      <li>
                      <NavLink to="pregnant&lactation-nutrition" activeClassName="active">{t("packages-details-section.links.preg")}</NavLink>
                      </li>
                      <li>
                      <NavLink to="sports-nutrition" activeClassName="active">{t("packages-details-section.links.sports")}</NavLink>
                      </li>
                      <li>
                      <NavLink to="family-care" activeClassName="active">{t("packages-details-section.links.family")}</NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* End Single Widget */}
                {/* Single Widget */}
                <div
                  className="single-widget quick-contact text-light mt-5 "
                  style={{ backgroundImage: "url(assets/img/about/1.jpg)" }}
                >
                  <div className="content">
                    <h4 >{t("packages-details-section.help")}</h4>
                    <i className="fas fa-headset my-5" />
                    <h2 dir="ltr"><a href="tel:+201150522550">01069796878</a></h2>
                  </div>
                </div>
                {/* End Single Widget */}
           
              </div>
              <Outlet />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
