import React from "react";
import { useState, useContext, useEffect } from "react";
import { someContext } from "./App1";
import { firestore } from "./Firebase";
import Header from "./Header";
import "./Mobile.css";
function Laptop() {
  let props = useContext(someContext);
  let [laptops, setLaptop] = useState([]);
  let [leptopFilterByCheckBox, setCheckBox] = useState([]);
  let [leptopCompany, setLeptopCompany] = useState("");
  useEffect(() => {
    fetch("Laptop.json")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setLaptop(json);
      });
  }, []);
  console.log(laptops);

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
        <option> 25000 to 35000</option>
        <option>36000 to 50000</option>
        <option>50000 to 200000</option>
      </select>

      <select
        style={{ marginLeft: "2px" }}
        className="filter"
        onChange={(e) => {
          console.log(e.currentTarget.value);
          setLeptopCompany(e.currentTarget.value);
        }}
      >
        <option> select Compnay</option>
        <option>Hp</option>
        <option>Dell</option>
        <option>Asus</option>
        <option>Apple</option>
        <option>Lenovo</option>
      </select>

      <div className="mobileSet">
        {laptops.map((e) => {
          return leptopFilterByCheckBox.length === 0 &&
            props.navBarSearchBox === "" &&
            leptopCompany === "" ? (
            <div style={{ border: "3px solid grey" }}>
              <div className="mobileCard">
                <img src={e.image}></img>
                <h3 style={{ marginRight: "10px" }}>Ram- {e.Ram}</h3>
                <h3 style={{ marginRight: "10px" }}>Rom- {e.Rom}</h3>
                <h3 className="color" style={{ marginRight: "10px" }}>
                  Color- {e.color}
                </h3>
              </div>
              <h1>{e.company}</h1>
              <h3>{e.model}</h3>
              <h1 className="price" style={{ marginRight: "10px" }}>
                {" "}
                Price- {e.price} Rs
              </h1>
              <button
                className="addtocart-btn"
                onClick={() => {
                  if (props.user) {
                    firestore.collection("laptopcart").add({
                      Price: e.price,
                      Model: e.model,
                      Price: e.price,
                      Compnay: e.company,
                      Ram: e.Ram,
                      uid: props.user.uid,
                      image: e.image,
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
            leptopCompany === "" &&
            leptopFilterByCheckBox.length === 0 &&
            e.company.localeCompare(props.navBarSearchBox) === 0 ? (
            <div style={{ border: "3px solid grey" }}>
              <div className="mobileCard">
                <img src={e.image}></img>
                <h3 style={{ marginRight: "10px" }}>Ram- {e.Ram}</h3>
                <h3 style={{ marginRight: "10px" }}>Rom- {e.Rom}</h3>
                <h3 className="color" style={{ marginRight: "10px" }}>
                  Color- {e.color}
                </h3>
              </div>
              <h1>{e.company}</h1>
              <h3>{e.model}</h3>
              <h1 className="price" style={{ marginRight: "10px" }}>
                {" "}
                Price- {e.price} Rs
              </h1>
              <button
                className="addtocart-btn"
                onClick={() => {
                  if (props.user) {
                    firestore.collection("laptopcart").add({
                      Price: e.price,
                      Model: e.model,
                      Price: e.price,
                      Compnay: e.company,
                      Ram: e.Ram,
                      uid: props.user.uid,
                      image: e.image,
                    });
                  } else {
                    alert("Please Login");
                  }
                }}
              >
                Add to Cart
              </button>
            </div>
          ) : leptopFilterByCheckBox.length !== 0 &&
            e.price >= Number(leptopFilterByCheckBox[0]) &&
            e.price <= Number(leptopFilterByCheckBox[1]) ? (
            <div style={{ border: "3px solid grey" }}>
              <div className="mobileCard">
                <img src={e.image}></img>
                <h3 style={{ marginRight: "10px" }}>Ram- {e.Ram}</h3>
                <h3 style={{ marginRight: "10px" }}>Rom- {e.Rom}</h3>
                <h3 className="color" style={{ marginRight: "10px" }}>
                  Color- {e.color}
                </h3>
              </div>
              <h1>{e.company}</h1>
              <h3>{e.model}</h3>
              <h1 className="price" style={{ marginRight: "10px" }}>
                {" "}
                Price- {e.price} Rs
              </h1>
              <button
                className="addtocart-btn"
                onClick={() => {
                  if (props.user) {
                    firestore.collection("laptopcart").add({
                      Price: e.price,
                      Model: e.model,
                      Price: e.price,
                      Compnay: e.company,
                      Ram: e.Ram,
                      uid: props.user.uid,
                      image: e.image,
                    });
                  } else {
                    alert("Please Login");
                  }
                }}
              >
                Add to Cart
              </button>
            </div>
          ) : leptopCompany !== "" &&
            leptopFilterByCheckBox.length === 0 &&
            props.navBarSearchBox === "" &&
            e.company === leptopCompany ? (
            <div style={{ border: "3px solid grey" }}>
              <div className="mobileCard">
                <img src={e.image}></img>

                <h3 style={{ marginRight: "10px" }}>Ram- {e.Ram}</h3>
                <h3 style={{ marginRight: "10px" }}>Rom- {e.Rom}</h3>
                <h3 className="color" style={{ marginRight: "10px" }}>
                  Color- {e.color}
                </h3>
              </div>
              <h1>{e.company}</h1>
              <h3>{e.model}</h3>
              <h1 className="price" style={{ marginRight: "10px" }}>
                {" "}
                Price- {e.price} Rs
              </h1>
              <button
                className="addtocart-btn"
                onClick={() => {
                  if (props.user) {
                    firestore.collection("laptopcart").add({
                      Price: e.price,
                      Model: e.model,
                      Price: e.price,
                      Compnay: e.company,
                      Ram: e.Ram,
                      uid: props.user.uid,
                      image: e.image,
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

export default Laptop;
