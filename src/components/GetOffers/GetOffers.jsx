import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebaseConfig"; // Adjust the path as needed
import { Link } from "react-router-dom";

export default function GetOffers() {
  const [offers, setOffers] = useState([]);

  // Fetch offers from Firestore
  useEffect(() => {
    const fetchOffers = async () => {
      const offersCollection = collection(db, "offers");
      const offersSnapshot = await getDocs(offersCollection);
      const offersList = offersSnapshot.docs.map(doc => doc.data());
      setOffers(offersList);
    };

    fetchOffers();
  }, []);

  return (
    <>
      <section className="offers main-p">
        <div className="container">
          <div className="row gy-5">
            {offers.map((offer, index) => (
              <div className="col-lg-6" key={index}>
                <div className="offer-card p-4">
                  <div className="border-bottom header">
                    <p>{offer.title}</p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center py-4">
                    <div className="">
                    <p>{offer.terms}</p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center flex-column flex-md-row">
                    <p>{offer.description}</p>
                    <Link className="main-btn text-uppercase">
                  get offer
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
