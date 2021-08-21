import React from "react";
import { useState, useContext, useEffect } from "react";
import { someContext } from "./App1";
import { firestore } from "./Firebase";
import Header from "./Header";
import "./Mobile.css";

function Girlfashion() {
  let props = useContext(someContext);
  let [girlsItemType, setCheckBox] = useState("");
  let [girlsItem, setGirlsItem] = useState([]);
  useEffect(() => {
    fetch("girlsfashion.json")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setGirlsItem(json);
      });
  }, []);

  console.log(girlsItem);

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
        <option>Suits</option>
        <option>Top</option>
        <option>Jeans</option>
      </select>

      <div className="mobileSet">
        {girlsItem.map((e) => {
          return props.navBarSearchBox === "" && girlsItemType === "" ? (
            <div style={{ border: "3px solid grey" }}>
              <div className="mobileCard">
                <img src={e.image}></img>
                <h3 style={{ marginRight: "10px" }}>
                  {" "}
                  {e.type} {e.desc}
                </h3>
              </div>

              <h1 className="price" style={{ marginRight: "10px" }}>
                {" "}
                Price- {e.price} Rs
              </h1>
              <button
                className="addtocart-btn"
                onClick={() => {
                  if (props.user) {
                    firestore.collection("girlscart").add({
                      type: e.type,
                      Price: e.price,
                      Image: e.image,
                      uid: props.user.uid,
                      id: e.id,
                    });
                  } else {
                    alert("Please Login");
                  }
                }}
              >
                Add to Cart
              </button>
            </div>
          ) : props.navBarSearchBox !== "" &&
            girlsItemType === "" &&
            e.type.localeCompare(props.navBarSearchBox) === 0 ? (
            <div style={{ border: "3px solid grey" }}>
              <div className="mobileCard">
                <img src={e.image}></img>
              </div>

              <h1 className="price" style={{ marginRight: "10px" }}>
                {" "}
                Price- {e.price} Rs
              </h1>
              <button
                className="addtocart-btn"
                onClick={() => {
                  if (props.user) {
                    firestore.collection("girlscart").add({
                      type: e.type,
                      Price: e.price,
                      Image: e.image,
                      uid: props.user.uid,
                    });
                  } else {
                    alert("Please Login");
                  }
                }}
              >
                Add to Cart
              </button>
            </div>
          ) : girlsItemType !== "" &&
            props.navBarSearchBox === "" &&
            e.type === girlsItemType ? (
            <div style={{ border: "3px solid grey" }}>
              <div className="mobileCard">
                <img src={e.image}></img>
              </div>
              <h1>{e.name}</h1>
              <h1 className="price" style={{ marginRight: "10px" }}>
                {" "}
                Price- {e.price} Rs
              </h1>
              <button
                className="addtocart-btn"
                onClick={() => {
                  if (props.user) {
                    firestore.collection("girlscart").add({
                      type: e.type,
                      Price: e.price,
                      Image: e.image,
                      uid: props.user.uid,
                    });
                  } else {
                    alert("Please Login");
                  }
                }}
              >
                Add to Cart
              </button>
            </div>
          ) : (
            ""
          );
        })}
      </div>
    </div>
  );
}

export default Girlfashion;
