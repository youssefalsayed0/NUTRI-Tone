import { useTranslation } from "react-i18next";
import { useState } from "react";
import Banner from "../Banner/Banner";
import CallToAction from "../CallToAction/CallToAction";

const Bmi = () => {
  const { t } = useTranslation();
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [bmiResult, setBmiResult] = useState(null);
  const [bmiCategory, setBmiCategory] = useState('');
  const [unitSystem, setUnitSystem] = useState('metric'); // 'metric' or 'us'

  const calculateBMI = (e) => {
    e.preventDefault();
    
    let heightInMeters, weightInKg;

    // Convert height and weight based on unit system
    if (unitSystem === 'metric') {
      heightInMeters = height / 100; // height in cm to m
      weightInKg = weight; // weight in kg
    } else {
      heightInMeters = height * 0.0254; // height in inches to m
      weightInKg = weight * 0.453592; // weight in lbs to kg
    }

    const bmi = weightInKg / (heightInMeters ** 2);
    setBmiResult(bmi.toFixed(2));

    // Determine BMI category
    if (bmi < 16) setBmiCategory(t("bmiCategories.severe_thinness"));
    else if (bmi >= 16 && bmi < 17) setBmiCategory(t("bmiCategories.moderate_thinness"));
    else if (bmi >= 17 && bmi < 18.5) setBmiCategory(t("bmiCategories.mild_thinness"));
    else if (bmi >= 18.5 && bmi < 25) setBmiCategory(t("bmiCategories.normal"));
    else if (bmi >= 25 && bmi < 30) setBmiCategory(t("bmiCategories.overweight"));
    else if (bmi >= 30 && bmi < 35) setBmiCategory(t("bmiCategories.obese_class_1"));
    else if (bmi >= 35 && bmi < 40) setBmiCategory(t("bmiCategories.obese_class_2"));
    else setBmiCategory(t("bmiCategories.obese_class_3"));
  };

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
                    <form className="contact-form" onSubmit={calculateBMI}>
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
                            {t("contact.calc-btn")} <i className="fa-solid fa-equals ms-1" />
                          </button>
                        </div>
                      </div>
                    </form>

                    {/* BMI Result Display */}
                    {bmiResult && (
                      <div className="result mt-4">
                        <p>{t("bmiCategories.label")}: {bmiCategory}</p>
                        <h4>BMI: {bmiResult}</h4>
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

export default Bmi;
