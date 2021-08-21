import React from "react";
import { useState, useContext, useEffect } from "react";
import { someContext } from "./App1";
import { firestore } from "./Firebase";
import Header from "./Header";
import "./Mobile.css";
function Boysfashion() {
  let props = useContext(someContext);
  let [boysItem, setBoysItem] = useState([]);
  let [boysItemType, setCheckBox] = useState("");
  useEffect(() => {
    fetch("Boysfashion.json")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setBoysItem(json);
      });
  }, []);

  return (
    <div className="container">
      <Header />
      <select
        className="filter"
        onChange={(e) => {
          console.log(e.currentTarget.value);
          setCheckBox(e.currentTarget.value);
        }}
      >
        <option>Select Categries</option>
        <option>Shirt</option>
        <option>T-Shirt</option>
        <option>Jeans</option>
        <option></option>
      </select>

      <div className="mobileSet">
        {boysItem.map((e) => {
          return props.navBarSearchBox === "" && boysItemType === "" ? (
            <div style={{ border: "3px solid grey" }}>
              <div className="mobileCard">
                <img src={e.image}></img>
                <h3 style={{ marginRight: "10px" }}>
                  {" "}
                  {e.type} {e.desc}
                </h3>
              </div>
              <h1>{e.company}</h1>
              <h1 className="price" style={{ marginRight: "10px" }}>
                {" "}
                Price- {e.price} Rs
              </h1>
              <button
                className="addtocart-btn"
                onClick={() => {
                  firestore.collection("boyscart").add({
                    Price: e.price,
                    Image: e.image,
                    type: e.type,
                    id: e.id,
                    uid: props.user.uid,
                  });
                }}
              >
                Add to Cart
              </button>
            </div>
          ) : props.navBarSearchBox !== "" &&
            boysItemType === "" &&
            e.type.localeCompare(props.navBarSearchBox) === 0 ? (
            <div style={{ border: "3px solid grey" }}>
              <div className="mobileCard">
                <img src={e.image}></img>

                <h3 style={{ marginRight: "10px" }}>
                  {e.type} {e.desc}
                </h3>
              </div>
              <h1>{e.company}</h1>
              <h1 className="price" style={{ marginRight: "10px" }}>
                {" "}
                Price- {e.price} Rs
              </h1>
              <button className="addtocart-btn">Add to Cart</button>
            </div>
          ) : boysItemType !== "" &&
            props.navBarSearchBox === "" &&
            e.type === boysItemType ? (
            <div style={{ border: "3px solid grey" }}>
              <div className="mobileCard">
                <img src={e.image}></img>

                <h3 style={{ marginRight: "10px" }}>Ram- {e.Ram}</h3>
                <h3 style={{ marginRight: "10px" }}>
                  {e.type} {e.desc}
                </h3>
              </div>
              <h1>{e.name}</h1>
              <h1 className="price" style={{ marginRight: "10px" }}>
                {" "}
                Price- {e.price} Rs
              </h1>
              <button className="addtocart-btn">Add to Cart</button>
            </div>
          ) : (
            ""
          );
        })}
      </div>
    </div>
  );
}

export default Boysfashion;
