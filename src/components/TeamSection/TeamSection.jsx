import { useTranslation } from "react-i18next";
import member1 from "../../assets/images/member1.webp";
import member2 from "../../assets/images/member2.webp";
import member3 from "../../assets/images/member3.webp";
import AnimatedTitle from "../AnimatedTitle/AnimatedTitle";

export default function TeamSection() {
    const {t}  = useTranslation();

  return (
    <>
      <section className="team-section main-p">
      <AnimatedTitle text={t("main-title.team")} title={t("main-title.team")}/>
        <div className="container">
          <div className="row g-0 ">
            <div className="col-md-6 col-lg-4 p-4   ">
              <div className="box ">
              <div className="d-inline-block member ">
                  <h6>{t("coach.job1")}</h6>
                  <h6>{t("coach.name1")}</h6>
                </div>
                <img src={member1} alt="member" className="img-fluid" />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 p-4 ">
              <div className="box  ">
                <div className="d-inline-block member ">
                <h6>{t("coach.job2")}</h6>
                <h6>{t("coach.name3")}</h6>
                </div>

                <img src={member2} alt="member" className="img-fluid" />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 p-4 ">
              <div className="box ">
              <div className="d-inline-block member ">
              <h6>{t("coach.job3")}</h6>
              <h6>{t("coach.name3")}</h6>
                </div>
                <img src={member3} alt="member" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
