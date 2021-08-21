import React from "react";
import Header from "./Header";
import { useEffect, useState, useContext } from "react";
import "./Mobile.css";
import { someContext } from "./App1";
import { useHistory } from "react-router-dom";
import { firestore } from "./Firebase";
function Mobile() {
  let props = useContext(someContext);
  let history = useHistory();

  let [mobiles, setMobiles] = useState([]);
  let [mobileFilterByCheckBox, setCheckBox] = useState([]);
  let [mobileCompany, setMobileCompany] = useState("");
  useEffect(() => {
    fetch("Mobile.json")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setMobiles(json);
      });
  }, []);

  return (
    <div className="container">
      <Header />
      <select
        className="filter"
        onChange={(e) => {
          console.log(e.currentTarget.value);
          let arr = e.currentTarget.value.split("to");
          console.log(arr);
          setCheckBox(arr);
        }}
      >
        <option> select price filter</option>
        <option> 5000 to 10000</option>
        <option>10000 to 20000</option>
        <option>20000 to 200000</option>
      </select>

      <select
        style={{ marginLeft: "2px" }}
        className="filter"
        onChange={(e) => {
          setMobileCompany(e.currentTarget.value);
        }}
      >
        <option> select Compnay</option>
        <option>Samsung</option>
        <option>Vivo</option>
        <option>Oppo</option>
        <option>Apple</option>
        <option>realme</option>
        <option>Oneplus</option>
        <option>Redme</option>
        <option>Panasonic</option>
      </select>

      <div className="mobileSet">
        {mobiles.map((e) => {
          return mobileFilterByCheckBox.length === 0 &&
            props.navBarSearchBox === "" &&
            mobileCompany === "" ? (
            <div style={{ border: "3px solid grey" }}>
              <div className="mobileCard">
                <img src={e.image}></img>
                <h3 style={{ marginRight: "10px" }}>Ram- {e.Ram}</h3>
                <h3 style={{ marginRight: "10px" }}>Rom- {e.Rom}</h3>
                <h3 className="color" style={{ marginRight: "10px" }}>
                  Color- {e.color}
                </h3>
                <h3 className="battery" style={{ marginRight: "10px" }}>
                  Battery- {e.Battery}
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
                    firestore.collection("mobilecart").add({
                      image: e.image,
                      Ram: e.Ram,
                      Rom: e.Rom,
                      Battery: e.Battery,
                      Price: e.price,
                      Company: e.company,
                      Color: e.color,
                      uid: props.user.uid,
                      name: e.name,
                    });
                  } else {
                    alert("Please Login ");
                  }
                }}
              >
                Add to Cart
              </button>
            </div>
          ) : props.navBarSearchBox !== "" &&
            mobileCompany === "" &&
            mobileFilterByCheckBox.length === 0 &&
            e.name.localeCompare(props.navBarSearchBox) === 0 ? (
            <div style={{ border: "3px solid grey" }}>
              <div className="mobileCard">
                <img src={e.image}></img>
                <h3 style={{ marginRight: "10px" }}>Ram- {e.Ram}</h3>
                <h3 style={{ marginRight: "10px" }}>Rom- {e.Rom}</h3>
                <h3 className="color" style={{ marginRight: "10px" }}>
                  Color- {e.color}
                </h3>
                <h3 className="battery" style={{ marginRight: "10px" }}>
                  Battery- {e.Battery}
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
                    firestore.collection("mobilecart").add({
                      image: e.image,
                      Ram: e.Ram,
                      Rom: e.Rom,
                      Battery: e.Battery,
                      Price: e.price,
                      Company: e.company,
                      Color: e.color,
                      uid: props.user.uid,
                      name: e.name,
                    });
                  } else {
                    alert("Please Login ");
                  }
                }}
              >
                Add to Cart
              </button>
            </div>
          ) : mobileFilterByCheckBox.length !== 0 &&
            e.price >= Number(mobileFilterByCheckBox[0]) &&
            e.price <= Number(mobileFilterByCheckBox[1]) ? (
            <div style={{ border: "3px solid grey" }}>
              <div className="mobileCard">
                <img src={e.image}></img>
                <h3 style={{ marginRight: "10px" }}>Ram- {e.Ram}</h3>
                <h3 style={{ marginRight: "10px" }}>Rom- {e.Rom}</h3>
                <h3 className="color" style={{ marginRight: "10px" }}>
                  Color- {e.color}
                </h3>
                <h3 className="battery" style={{ marginRight: "10px" }}>
                  Battery- {e.Battery}
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
                    firestore.collection("mobilecart").add({
                      image: e.image,
                      Ram: e.Ram,
                      Rom: e.Rom,
                      Battery: e.Battery,
                      Price: e.price,
                      Company: e.company,
                      Color: e.color,
                      uid: props.user.uid,
                      name: e.name,
                    });
                  } else {
                    alert("Please Login ");
                  }
                }}
              >
                Add to Cart
              </button>
            </div>
          ) : mobileCompany !== "" &&
            mobileFilterByCheckBox.length === 0 &&
            props.navBarSearchBox === "" &&
            e.company === mobileCompany ? (
            <div style={{ border: "3px solid grey" }}>
              <div className="mobileCard">
                <img src={e.image}></img>

                <h3 style={{ marginRight: "10px" }}>Ram- {e.Ram}</h3>
                <h3 style={{ marginRight: "10px" }}>Rom- {e.Rom}</h3>
                <h3 className="color" style={{ marginRight: "10px" }}>
                  Color- {e.color}
                </h3>
                <h3 className="battery" style={{ marginRight: "10px" }}>
                  Battery- {e.Battery}
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
                    firestore.collection("mobilecart").add({
                      image: e.image,
                      Ram: e.Ram,
                      Rom: e.Rom,
                      Battery: e.Battery,
                      Price: e.price,
                      Company: e.company,
                      Color: e.color,
                      uid: props.user.uid,
                      name: e.name,
                    });
                  } else {
                    alert("Please Login ");
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

export default Mobile;
