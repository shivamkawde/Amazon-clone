import React from "react";
import { useState, useEffect, useContext } from "react";
import { someContext } from "./App1";

import { firestore } from "./Firebase";
import Header from "./Header";
function Myorders() {
  let [orders, setorders] = useState([]);
  let props = useContext(someContext);

  useEffect(() => {
    let f = async () => {
      await firestore.collection("orders").onSnapshot((querySnapshot) => {
        let tempArr = [];

        querySnapshot.forEach((doc) => {
          if (props.user && props.user.uid === doc.data().uid) {
            tempArr.push({
              data: doc.data(),
            });
          }
        });

        setorders(tempArr);
      });
    };

    f();
  }, []);

  console.log(orders);

  return (
    <div>
      <Header />
        <div style={{marginTop:"3.5rem"}}></div>
      {orders.map((e) => {
        return (
            
          <div style={{ border: "1px solid grey" }}>
            <div className="mobileCard">
              <img src={e.data.image}></img>
            </div>

            <h3 className="price" style={{ marginRight: "10px" }}>
              {" "}
              Price- {e.data.price} Rs
            </h3>
            <h1>Name {e.data.name}</h1>
            <h3> Payment Type- {e.data.paymentmethod}</h3>
            <h3>
              {" "}
              Date- {e.data.date}/{e.data.month}/{e.data.year}
            </h3>
            <h3> Amazon Id- {e.data.idname}</h3>
          </div>
        );
      })}
    </div>
   
  );
}

export default Myorders;
