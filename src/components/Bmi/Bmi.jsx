import { useTranslation } from "react-i18next";
import Banner from "../Banner/Banner";
import CallToAction from "../CallToAction/CallToAction";

const Bmi = () => {
  const { t } = useTranslation(); 

  return (
    <>
      <main>
        <Banner title={"BMI"} />
        <section className="contact bmi">
          <div className="container">
            <div className="contact-items">
              <div className="row gy-5 align-items-center">
                <div className="col-lg-6 left-item">
                  <div className="content">
                    <h2 className="mb-4">{t("contact.title")}</h2>
                    <form className="contact-form">
                      <div className="row mb-3 gy-3">
                        {/* Height Input */}
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label htmlFor="height">{t("contact.height_label")}</label>
                            <input
                              className="form-control"
                              id="height"
                              name="height"
                              placeholder={t("contact.height_label")}
                              type="text"
                            />
                          </div>
                        </div>
                        {/* Weight Input */}
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label htmlFor="weight">{t("contact.weight_label")}</label>
                            <input
                              className="form-control"
                              id="weight"
                              name="weight"
                              placeholder={t("contact.weight_label")}
                              type="text"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row mb-3 gy-3">
                        {/* Age Input */}
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label htmlFor="age">{t("contact.age_label")}</label>
                            <input
                              className="form-control"
                              id="age"
                              name="age"
                              placeholder={t("contact.age_label")}
                              type="text"
                            />
                          </div>
                        </div>
                        {/* Gender Dropdown */}
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label htmlFor="gender">{t("contact.gender_label")}</label>
                            <select className="form-control" id="gender" name="gender">
                              <option value="male">{t("contact.gender.male")}</option>
                              <option value="female">{t("contact.gender.female")}</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="row mb-3 gy-3">
                        {/* Activity Factor Dropdown */}
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label htmlFor="activity">{t("contact.activity_label")}</label>
                    
                               <select className="form-control" id="activity" name="activity">
                                 <option value="sedentary">{t("contact.activity.sedentary")}</option>
                                 <option value="light">{t("contact.activity.light")}</option>
                                 <option value="moderate">{t("contact.activity.moderate")}</option>
                                 <option value="active">{t("contact.activity.active")}</option>
                               </select>
                       
                          </div>
                        </div>
                        {/* Weight Loss / Weight Gain Dropdown */}
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label htmlFor="goal">{t("contact.goal_label")}</label>
                            <select className="form-control" id="goal" name="goal">
                              <option value="weight_loss">{t("contact.goal.weight_loss")}</option>
                              <option value="weight_gain">{t("contact.goal.weight_gain")}</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                      <div className="col-lg-12">
                        <button
                          type="submit"
                          name="submit"
                          id="submit"
                          className="main-btn text-white"
                        >
                          {t("contact.calc-btn")} <i className="fa-solid fa-equals ms-1" />
                        </button>
                      </div>
                    </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6">
                  <h1>{t("contact.heading")}</h1>
                </div>
              </div>
            </div>
          </div>
        </section>
        <CallToAction/>
      </main>
    </>
  );
};

export default Bmi;
