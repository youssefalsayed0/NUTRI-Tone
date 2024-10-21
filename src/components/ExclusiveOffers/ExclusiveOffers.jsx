import { useEffect, useState } from "react";
import { db } from "../../../firebaseConfig"; // Adjust the import according to your Firebase config file
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";

const ExclusiveOffers = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    const fetchOffers = async () => {
      const offersCollection = collection(db, "exclusiveOffers");
      const offerSnapshot = await getDocs(offersCollection);
      const offersList = offerSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setOffers(offersList);
    };

    fetchOffers();
  }, []);

  // Function to calculate time left
  const calculateTimeLeft = (endDate) => {
    const now = new Date();
    const end = endDate.toDate(); // Convert Firestore Timestamp to Date
    const difference = end - now;
    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    const seconds = Math.floor((difference / 1000) % 60);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    return { days, hours, minutes, seconds };
  };

  // Real-time countdown setup
  useEffect(() => {
    const intervalId = setInterval(() => {
      setOffers((prevOffers) =>
        prevOffers.map((offer) => ({
          ...offer,
          timeLeft: calculateTimeLeft(offer.endDate),
        }))
      );
    }, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, [offers]);

  return (
<>
<br />
<br />
<br />
<section className="ex-offers main-p  text-center">
      <div className="container">
        {offers.map((offer) => {
          const { id, header, description, timeLeft } = offer;
          return (
            <div key={id} className="offer-card">
              <h2 className="">{header}</h2> {/* Display offer header */}
              <div className=" row gy-4 gy-lg-0 timer main-p">
          <div className="col-lg-3 d-flex justify-content-center align-items-center">
                  <div className="box ">
                    <p> {timeLeft?.days}</p>
                    <h6>Days</h6>
                  </div>
          </div>
         <div  className="col-lg-3  d-flex justify-content-center align-items-center">
                   <div className="box">
                     <p> {timeLeft?.hours}</p>
                     <h6>Hours</h6>
                   </div>
         </div>
           <div  className="col-lg-3  d-flex justify-content-center align-items-center">
                 <div className="box">
                   <p> {timeLeft?.minutes} </p>
                   <h6>Minutes</h6>
                 </div>
           </div>
         <div  className="col-lg-3  d-flex justify-content-center align-items-center">
                   <div className="box">
                     <p> {timeLeft?.seconds}</p>
                     <h6>Seconds</h6>
                   </div>
         </div>
              </div>
              <p className="mb-0 desc">{description}</p>
              <div className=" d-flex justify-content-center btns mt-5 flex-wrap">
              <Link type="button" to="/packages" className=" rounded-0 text-uppercase main-btn position-relative m-2">get offer</Link>
              <Link type="button" to="/contact-us" className=" rounded-0 text-uppercase main-btn position-relative m-2">contact us</Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
    </>
  );
};

export default ExclusiveOffers;
