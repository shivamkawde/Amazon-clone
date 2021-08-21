import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Header from "./Header";

function Groceries() {
  let history = useHistory();
  let [Groceries, setGroceries] = useState([]);

  useEffect(() => {
    fetch("Grocey.json")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setGroceries(json);
      });
  }, []);

  console.log(Groceries);
  return (
    <div>
      <Header />

      {Groceries.map((e) => {
        return (
          <div style={{ border: "3px solid grey" }}>
            <div className="mobileCard">
              <img src={e.image}></img>
              <h3 style={{ marginRight: "10px" }}>{e.name}</h3>
            </div>
            <h1>{e.company}</h1>
            <h1 className="price" style={{ marginRight: "10px" }}>
              {" "}
              Price- {e.price} Rs
            </h1>
            <button
              className="addtocart-btn"
              onClick={() => {
                history.push({
                  pathname: "/Buynow",
                  state: {
                    image: e.image,
                    price: e.price,
                    company: e.compnay,
                    name: e.name,
                  },
                });
              }}
            >
              Buy Now
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Groceries;
