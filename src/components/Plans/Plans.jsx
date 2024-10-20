import { useTranslation } from "react-i18next";
import AnimatedTitle from "../AnimatedTitle/AnimatedTitle";
import obesity from "../../assets/images/obesity.webp";
import kids from "../../assets/images/kids.webp";
import pregnant from "../../assets/images/preg.webp";
import sports from "../../assets/images/sports.webp";
import clinical from "../../assets/images/clinical.webp";
import family from "../../assets/images/family.webp";
import { Link } from "react-router-dom";

export default function Plans() {
  const { t } = useTranslation();

  const packages = [
    {
      key: "obesity.golden",
      title: t("plans.obesity.golden.title"),
      price: t("plans.obesity.golden.price"),
      offer: t("plans.obesity.golden.offer"),
      features: [
        t("plans.obesity.golden.features.f1"),
        t("plans.obesity.golden.features.f2"),
        t("plans.obesity.golden.features.f3"),
        t("plans.obesity.golden.features.f4"),
      ],
      image: obesity,
      path: "/Packages/package-details/obesity&underweight",
      get : "https://forms.gle/goVQhCDw49n6vxvy5",
    },
    {
      key: "obesity.silver",
      title: t("plans.obesity.silver.title"),
      price: t("plans.obesity.silver.price"),
      offer: t("plans.obesity.silver.offer"),
      features: [
        t("plans.obesity.silver.features.f1"),
        t("plans.obesity.silver.features.f2"),
        t("plans.obesity.silver.features.f3"),
      ],
      image: obesity,
      path: "/Packages/package-details/obesity&underweight",
      get : "https://forms.gle/goVQhCDw49n6vxvy5",
    },
    {
      key: "clinical",
      title: t("plans.clinical.title"),
      price: t("plans.clinical.price"),
      offer: t("plans.clinical.offer1"),
      offer2: t("plans.clinical.offer2"), // Second offer for this package
      features: [
        t("plans.clinical.features.f1"),
        t("plans.clinical.features.f2"),
        t("plans.clinical.features.f3"),
        t("plans.clinical.features.f4"),
        t("plans.clinical.features.f5"),
        t("plans.clinical.features.f6"),
        t("plans.clinical.features.f7"),
      ],
      image: clinical,
      path: "/Packages/package-details/clinical-nutrition",
      get: "https://forms.gle/P9M9GbYidMkhMSqd6",
    },
    {
      key: "kids",
      title: t("plans.kids.title"),
      price: t("plans.kids.price"),
      offer: t("plans.kids.offer1"),
      offer2: t("plans.kids.offer2"), // Second offer for this package
      features: [
        t("plans.kids.features.f1"),
        t("plans.kids.features.f2"),
        t("plans.kids.features.f3"),
        t("plans.kids.features.f4"),
        t("plans.kids.features.f5"),
      ],
      image: kids,
      path: "/Packages/package-details/kids-nutrition",
      get: "https://forms.gle/VP67PKWfzZGLSoHVA",
    },
    {
      key: "pregnant",
      title: t("plans.pregnant.title"),
      price: t("plans.pregnant.price"),
      offer: t("plans.pregnant.offer1"),
      offer2: t("plans.pregnant.offer2"), // Second offer for this package
      features: [
        t("plans.pregnant.features.f1"),
        t("plans.pregnant.features.f2"),
        t("plans.pregnant.features.f3"),
        t("plans.pregnant.features.f4"),
      ],
      image: pregnant,
      path: "/Packages/package-details/pregnant&lactation-nutrition",
      get: "https://forms.gle/MLeQLEQL77TeRBgH8",
    },
    {
      key: "sports",
      title: t("plans.sports.title"),
      price: t("plans.sports.price"),
      offer: t("plans.sports.offer1"),
      offer2: t("plans.sports.offer2"),
      features: [
        t("plans.sports.features.f1"),
        t("plans.sports.features.f2"),
        t("plans.sports.features.f3"),
        t("plans.sports.features.f4"),
        t("plans.sports.features.f5"),
      ],
      image: sports,
      path: "/Packages/package-details/sports-nutrition",
      get :"https://forms.gle/XDqrazCu1pGD4mSAA",
    },
    {
      key: "family",
      title: t("plans.family.title"),
      price: t("plans.family.price"),
      offer: t("plans.family.offer1"),
      offer2: t("plans.family.offer2"),
      features: [
        t("plans.family.features.f1"),
        t("plans.family.features.f2"),
      ],
      image: family,
      path: "/Packages/package-details/family-care",
    },
  ];

  return (
    <>
      <section className="plans main-p">
        <AnimatedTitle text={t("main-title.packages.title")} />
        <div className="container">
          <div className="row ">
            {packages.map((pkg, index) => (
              <div className="col-md-6 col-xl-4 mb-4 d-flex" key={index}>
                <div className="package-card d-flex flex-column p-5"> {/* Add flex-column here */}
                  <div className="image">
                    <img src={pkg.image} className="img-fluid" alt={pkg.title} />
                  </div>
                  <div className="info mt-5">
                    <h5>{pkg.title}</h5>
                    <h5 className="h3 mt-3">
                      {pkg.price}
                      <span className="h5 ms-1">month</span>
                    </h5>
                  </div>
                  <div className="offers mt-4">
                    <ul className="list-unstyled">
                      <li className="my-1">% {pkg.offer}</li>
                      {pkg.offer2 && <li>% {pkg.offer2}</li>} {/* Render the second offer if it exists */}
                    </ul>
                  </div>
                  <div className="features mt-5">
                    <ul className="list-unstyled">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="text-white-50 text-capitalize my-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="35"
                            height="10"
                            viewBox="0 0 35 10"
                            fill="none"
                          >
                            <path
                              d="M15.1107 0H10.1259L0.954102 9.06122H5.93894L15.1107 0Z"
                              fill="#eefb13"
                            />
                            <path
                              d="M24.7416 0H19.7567L10.585 9.06122H15.5698L24.7416 0Z"
                              fill="#eefb13"
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="buttons text-center mt-auto"> {/* Add mt-auto to push buttons to the bottom */}
                    <Link
                      type="button"
                       to={pkg.get}
                      className="main-btn rounded-0 text-uppercase position-relative mt-5"
                      target="_balnk"
                    >
                      {t("plans.button1")}
                    </Link>
                    <Link

                      type="button"
                      to={pkg.path}
                      className="main-btn rounded-0 text-uppercase position-relative mt-2"
                    >
                      {t("plans.button2")}
                    </Link>
                  </div>
                </div>
              </div>

            ))}
          </div>
        </div>
      </section>
    </>
  );
}
