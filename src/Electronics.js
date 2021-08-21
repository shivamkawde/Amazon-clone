import React from "react";
import { useState, useEffect, useContext } from "react";
import { someContext } from "./App1";
import Header from "./Header";
import "./Mobile.css";
import { FilterFramesRounded } from "@material-ui/icons";
import { firestore } from "./Firebase";

function Electronics() {
  let props = useContext(someContext);
  let [electronicsItems, setElectronicsItems] = useState([]);
  let [electronicsItemsType, setCheckBox] = useState("");

  useEffect(() => {
    fetch("Electronics.json")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setElectronicsItems(json);
      });
  }, []);
  console.log(electronicsItems);

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
        <option>TV</option>
        <option>Refrigerator</option>
        <option>Washing machine</option>
        <option>Camera</option>
      </select>

      <div className="mobileSet">
        {electronicsItems.map((e) => {
          return props.navBarSearchBox === "" && electronicsItemsType === "" ? (
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
                  if (props.user) {
                    firestore.collection("electronics").add({
                      Image: e.image,
                      Desc: e.desc,
                      Price: e.price,
                      Company: e.company,
                      uid: props.user.uid,
                      type: e.type,
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
            electronicsItemsType === "" &&
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
              <button
                className="addtocart-btn"
                onClick={() => {
                  if (props.user) {
                    firestore.collection("electronics").add({
                      Image: e.image,
                      Desc: e.desc,
                      Price: e.price,
                      Company: e.company,
                      uid: props.user.uid,
                      type: e.type,
                    });
                  } else {
                    alert("Please Login");
                  }
                }}
              >
                Add to Cart
              </button>
            </div>
          ) : electronicsItemsType !== "" &&
            props.navBarSearchBox === "" &&
            e.type === electronicsItemsType ? (
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
              <button
                className="addtocart-btn"
                onClick={() => {
                  if (props.user) {
                    firestore.collection("electronics").add({
                      Image: e.image,
                      Desc: e.desc,
                      Price: e.price,
                      Company: e.company,
                      uid: props.user.uid,
                      type: e.type,
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

export default Electronics;
