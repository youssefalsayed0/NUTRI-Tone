
import logo from "../../assets/images/logo.webp"
import { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../../firebaseConfig.js"; // Adjust the path if necessary
import AnimatedTitle from "../AnimatedTitle/AnimatedTitle.jsx";
import { useTranslation } from "react-i18next";

export default function Testimonials() {
  const {t} =  useTranslation();

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Real-time listener for Firestore
    const unsubscribe = onSnapshot(collection(db, "reviews"), (snapshot) => {
      const reviewsArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setReviews(reviewsArray);
    });

    // Cleanup listener on unmount
    return () => unsubscribe();
  }, []);

  return (
    <section className="testimonials main-p overflow-hidden">
         <AnimatedTitle text={t("main-title.reviews")} title={t("main-title.reviews")}/>
      <div className="container">
        <div className="row gy-5 align-items-center d-flex ">
        <div className="col-lg-6 p-5">
          <img src={logo} alt="logo"  className="img-fluid"/>
        </div>
          <div className="col-lg-6 ">
            <div
              id="carouselExampleIndicators"
              className="carousel  slide p-5 bg-black"
              data-bs-ride="carousel" // Start carousel automatically
              data-bs-interval="3000" // Set interval for sliding (3 seconds)
            >
              <div className="carousel-inner">
                {reviews.map((review, index) => (
                  <div key={review.id} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                    <div className="stars mb-4">
                      <i className="fa-solid fa-star fa-lg"></i>
                      <i className="fa-solid fa-star fa-lg"></i>
                      <i className="fa-solid fa-star fa-lg"></i>
                      <i className="fa-solid fa-star fa-lg"></i>
                      <i className="fa-solid fa-star fa-lg"></i>
                    </div>
                    <p className="review">{review.review}</p>
                    <svg className="mt-5" xmlns="http://www.w3.org/2000/svg" width="35" height="10" viewBox="0 0 35 10" fill="none"><path d="M15.1107 0H10.1259L0.954102 9.06122H5.93894L15.1107 0Z" fill="#eefb13"></path><path d="M24.7416 0H19.7567L10.585 9.06122H15.5698L24.7416 0Z" fill="#eefb13"></path><path d="M34.3724 0H29.3833L20.2158 9.06122H25.1964L34.3724 0Z" fill="#eefb13"></path></svg>
                    <p className="m-0  text-uppercase fw-bolder fs-4">{review.name}</p>
                  </div>
                ))}
              </div>
       <div>
 <div className="d-flex justify-content-center">
   <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
     <span className="carousel-control-prev-icon" aria-hidden="true" />
     <span className="visually-hidden">Previous</span>
   </button>
   <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
     <span className="carousel-control-next-icon" aria-hidden="true" />
     <span className="visually-hidden">Next</span>
   </button>
 </div >
</div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
