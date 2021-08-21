import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Header from "./Header";

function Offers() {
  let history = useHistory();
  let [offers, setOffers] = useState([]);
  let [time, settime] = useState();
  useEffect(() => {
    fetch("offers.json")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setOffers(json);
      });
  }, []);

  {
    setInterval(() => {
      let d = new Date();
      let clock = d.toLocaleTimeString();
      settime(clock);
    }, 1000);
  }

  return (
    <div>
      <Header />
      <h1 className="clock" style={{marginTop:"4.5rem"}}>{time}</h1> <h3>Only for 2 Hour Hurry Up</h3>
      {offers.map((e) => {
        return (
          <div style={{ border: "3px solid grey" }}>
            <div className="mobileCard">
              <img src={e.image}></img>
              <h3 style={{ marginRight: "10px" }}>{e.type}</h3>
            </div>
            <h1>{e.compnay}</h1>
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

export default Offers;
