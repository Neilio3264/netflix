import React, { useEffect, useState } from "react";
import "./Plans.css";
import db from "@services/Firebase/firebase";
import { getDocs, collection, query, where } from "firebase/firestore/lite";

function Plans() {
  const [products, setProducts] = useState([]);

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

  console.log(products);

  return (
    <div className="plans">
      {Object.entries(products).map(([productId, productData]) => {
        // TODO: add some logic to check if the user's subscription is active ...
        return (
          <div className="plans__plan">
            <div className="plans__info">
              <h5>{productData.name}</h5>
              <h6>{productData.description}</h6>
            </div>

            <button>Subscribe</button>
          </div>
        );
      })}
    </div>
  );
}

export default Plans;
