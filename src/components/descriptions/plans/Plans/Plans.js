import React, { useEffect, useState } from "react";
import "./Plans.css";
import db from "@services/Firebase/firebase";
import {
  getDocs,
  collection,
  query,
  where,
  doc,
  addDoc,
  onSnapshot,
} from "firebase/firestore";
import { useSelector } from "react-redux";
import { selectUser } from "@store/features/user/userSlice";
import { loadStripe } from "@stripe/stripe-js";

function Plans() {
  const [products, setProducts] = useState([]);
  const user = useSelector(selectUser);
  const [subscription, setSubscription] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(
        collection(db, "customers", user.uid, "subscriptions")
      );

      return querySnapshot;
    };

    fetchData().then((querySnapshot) => {
      querySnapshot.forEach(async (subscription) => {
        setSubscription({
          role: subscription.data().role,
          current_period_end: subscription.data().current_period_end.seconds,
          current_period_start:
            subscription.data().current_period_start.seconds,
        });
      });
    });
  }, [user.uid]);

  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, "products"), where("active", "==", true));
      const querySnapshot = await getDocs(q);

      return querySnapshot;
    };

    fetchData().then((querySnapshot) => {
      const products = {};
      querySnapshot.forEach(async (productDoc) => {
        products[productDoc.id] = productDoc.data();
        const priceSnapshot = await getDocs(
          collection(db, "products", productDoc.id, "prices")
        );

        priceSnapshot.docs.forEach((price) => {
          products[productDoc.id].prices = {
            priceId: price.id,
            priceData: price.data(),
          };
        });
      });
      setProducts(products);
    });
  }, []);

  const loadCheckout = async (priceId) => {
    // let docRef = doc(db, "customer", user.uid);

    const docRef = await addDoc(
      collection(doc(db, "customers", user.uid), "checkout_sessions"),
      {
        price: priceId,
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      }
    );

    onSnapshot(docRef, async (snapshot) => {
      const { error, sessionId } = snapshot.data();

      if (error) {
        alert(`An error occurred: ${error.message}`);
      }

      if (sessionId) {
        const stripe = await loadStripe(
          `${process.env.REACT_APP_STRIPE_API_KEY}`
        );
        stripe.redirectToCheckout({ sessionId });
      }
    });
  };

  return (
    <div className="plans">
      <br />
      {subscription && (
        <p>
          Renewal Date:{" "}
          {new Date(
            subscription?.current_period_end * 1000
          ).toLocaleDateString()}
        </p>
      )}
      {Object.entries(products).map(([productId, productData]) => {
        const isCurrentPackage = productData.name
          ?.toLowerCase()
          .includes(subscription.role);

        return (
          <div
            key={productId}
            className={`plans__plan ${
              isCurrentPackage && "plans__plan--disabled"
            }`}
          >
            <div className="plans__info">
              <h5>{productData.name}</h5>
              <h6>{productData.description}</h6>
            </div>

            <button
              onClick={() =>
                !isCurrentPackage && loadCheckout(productData.prices.priceId)
              }
            >
              {isCurrentPackage ? "Current Package" : "Subscribe"}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Plans;
