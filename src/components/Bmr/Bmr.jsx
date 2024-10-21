import { useTranslation } from "react-i18next";
import { useState } from "react";
import Banner from "../Banner/Banner";
import CallToAction from "../CallToAction/CallToAction";

const Bmr = () => {
  const { t } = useTranslation();
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [bmrResult, setBmrResult] = useState(null);
  const [unitSystem, setUnitSystem] = useState('metric'); // 'metric' or 'us'

  const calculateBMR = (e) => {
    e.preventDefault();
    
    let weightInKg = weight;
    let heightInCm = height;

    // Convert weight and height based on unit system
    if (unitSystem === 'us') {
      weightInKg = weight * 0.453592; // lbs to kg
      heightInCm = height * 2.54; // inches to cm
    }

    let bmr;

    // Mifflin-St Jeor Equation
    if (gender === 'male') {
      bmr = 10 * weightInKg + 6.25 * heightInCm - 5 * age + 5;
    } else {
      bmr = 10 * weightInKg + 6.25 * heightInCm - 5 * age - 161;
    }

    setBmrResult(bmr.toFixed(2));
  };

  return (
    <>
      <main>
        <Banner title={"BMR Calculator"} />
        <section className="contact bmr">
          <div className="container">
            <div className="contact-items">
              <div className="row gy-5 align-items-center">
                <div className="col-lg-6 left-item">
                  <div className="content">
                    <h2 className="mb-4">{t("contact.title")}</h2>
                    <div className="unit-toggle mb-3">
                      <button
                        className={`btn ${unitSystem === 'metric' ? 'btn-primary' : 'btn-secondary'}`}
                        onClick={() => setUnitSystem('metric')}
                      >
                        Metric Units
                      </button>
                      <button
                        className={`btn ${unitSystem === 'us' ? 'btn-primary' : 'btn-secondary'}`}
                        onClick={() => setUnitSystem('us')}
                      >
                        US Units
                      </button>
                    </div>
                    <form className="contact-form" onSubmit={calculateBMR}>
                      <div className="row mb-3 gy-3">
                        {/* Height Input */}
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label htmlFor="height">{unitSystem === 'metric' ? t("contact.height_label_metric") : t("contact.height_label_us")}</label>
                            <input
                              className="form-control"
                              id="height"
                              name="height"
                              placeholder={unitSystem === 'metric' ? t("contact.height_label_metric") : t("contact.height_label_us")}
                              type="number"
                              value={height}
                              onChange={(e) => setHeight(e.target.value)}
                            />
                          </div>
                        </div>
                        {/* Weight Input */}
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label htmlFor="weight">{unitSystem === 'metric' ? t("contact.weight_label_metric") : t("contact.weight_label_us")}</label>
                            <input
                              className="form-control"
                              id="weight"
                              name="weight"
                              placeholder={unitSystem === 'metric' ? t("contact.weight_label_metric") : t("contact.weight_label_us")}
                              type="number"
                              value={weight}
                              onChange={(e) => setWeight(e.target.value)}
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
                              type="number"
                              value={age}
                              onChange={(e) => setAge(e.target.value)}
                            />
                          </div>
                        </div>
                        {/* Gender Dropdown */}
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label htmlFor="gender">{t("contact.gender_label")}</label>
                            <select className="form-control" id="gender" name="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
                              <option value="male">{t("contact.gender.male")}</option>
                              <option value="female">{t("contact.gender.female")}</option>
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
                            Calculate BMR <i className="fa-solid fa-equals ms-1" />
                          </button>
                        </div>
                      </div>
                    </form>

                    {/* BMR Result Display */}
                    {bmrResult && (
                      <div className="result mt-4">
                        <h4>BMR: {bmrResult} Kcal/day</h4>
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-lg-6">
                  <h1>{t("contact.heading")}</h1>
                </div>
              </div>
            </div>
          </div>
        </section>
        <CallToAction />
      </main>
    </>
  );
};

export default Bmr;
