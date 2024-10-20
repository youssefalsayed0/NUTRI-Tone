import { useEffect, useState } from 'react';
import { db } from '../../../firebaseConfig'; // Adjust the import according to your Firebase config file
import { collection, getDocs } from 'firebase/firestore';

const ExclusiveOffers = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    const fetchOffers = async () => {
      const offersCollection = collection(db, 'exclusiveOffers');
      const offerSnapshot = await getDocs(offersCollection);
      const offersList = offerSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
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
      setOffers(prevOffers => 
        prevOffers.map(offer => ({
          ...offer,
          timeLeft: calculateTimeLeft(offer.endDate)
        }))
      );
    }, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, [offers]);

  return (
    <div>
      <h2>Exclusive Offers</h2>
      {offers.map(offer => {
        const { id, description, timeLeft } = offer;

        return (
          <div key={id} className="offer-card">
            <h3>Offer Description</h3>
            <p>{description}</p>
            <p>
              Time Left: {timeLeft?.days}d {timeLeft?.hours}h {timeLeft?.minutes}m {timeLeft?.seconds}s
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default ExclusiveOffers;
