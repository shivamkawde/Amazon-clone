import React from "react";
import { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { someContext } from "./App1";
import { firestore } from "./Firebase";
import Header from "./Header";
function Addtocart(p) {
  //let location = useLocation();
  let history = useHistory();
  //let [addCartposts, setAddCartPosts] = useState([]);
  let [addCartMobile, setAddCartMobile] = useState([]);
  let [mobilecartCount, setmobileCartCout] = useState(0);
  let [laptopcartCount, setLaptopCartCount] = useState(0);
  let [addCartLaptop, setCartLaptop] = useState([]);

  let [electronics, setElectronics] = useState([]);
  let [girlsCart, setGirlsCart] = useState([]);

  let [boysCart, setBoysCart] = useState([]);
  let [Homecart, setHomeCart] = useState([]);

  let props = useContext(someContext);
  useEffect(() => {
    let f = async () => {
      await firestore.collection("mobilecart").onSnapshot((querySnapshot) => {
        let tempArr = [];

        querySnapshot.forEach((doc) => {
          if (props.user && props.user.uid === doc.data().uid) {
            tempArr.push({
              data: doc.data(),
            });
          }
        });

        setAddCartMobile(tempArr);
      });
    };

    f();
  }, []);

  useEffect(() => {
    let f = async () => {
      await firestore.collection("laptopcart").onSnapshot((querySnapshot) => {
        let tempArr = [];

        querySnapshot.forEach((doc) => {
          if (props.user && props.user.uid === doc.data().uid) {
            tempArr.push({
              data: doc.data(),
            });
          }
        });

        setCartLaptop(tempArr);
      });
    };

    f();
  }, []);

  useEffect(() => {
    let f = async () => {
      await firestore.collection("electronics").onSnapshot((querySnapshot) => {
        let tempArr = [];

        querySnapshot.forEach((doc) => {
          if (props.user && props.user.uid === doc.data().uid) {
            tempArr.push({
              data: doc.data(),
            });
          }
        });

        setElectronics(tempArr);
      });
    };

    f();
  }, []);

  useEffect(() => {
    let f = async () => {
      await firestore.collection("girlscart").onSnapshot((querySnapshot) => {
        let tempArr = [];

        querySnapshot.forEach((doc) => {
          if (props.user && props.user.uid === doc.data().uid) {
            tempArr.push({
              data: doc.data(),
            });
          }
        });

        setGirlsCart(tempArr);
      });
    };

    f();
  }, []);

  useEffect(() => {
    let f = async () => {
      await firestore.collection("boyscart").onSnapshot((querySnapshot) => {
        let tempArr = [];

        querySnapshot.forEach((doc) => {
          if (props.user && props.user.uid === doc.data().uid) {
            tempArr.push({
              data: doc.data(),
            });
          }
        });

        setBoysCart(tempArr);
      });
    };

    f();
  }, []);

  useEffect(() => {
    let f = async () => {
      await firestore.collection("homecart").onSnapshot((querySnapshot) => {
        let tempArr = [];

        querySnapshot.forEach((doc) => {
          if (props.user && props.user.uid === doc.data().uid) {
            tempArr.push({
              data: doc.data(),
            });
          }
        });

        setHomeCart(tempArr);
      });
    };

    f();
  }, []);

  return (
    <div>
      <Header />
      {addCartMobile.map((e, index) => {
        return (
          <div style={{ border: "3px solid grey" }} key={index}>
            <div className="mobileCard">
              <img src={e.data.image}></img>
              <h3 style={{ marginRight: "10px" }}>{e.data.Battery}</h3>
              <h3 style={{ marginRight: "10px" }}>{e.data.name}</h3>
              <h3 style={{ marginRight: "10px" }}>{e.data.Ram}</h3>
              <h3 style={{ marginRight: "10px" }}>{e.data.Rom}</h3>
            </div>
            <h1></h1>
            <h1 className="price" style={{ marginRight: "10px" }}>
              {" "}
              Price- {e.data.Price} Rs
            </h1>

            <button
              className="addtocart-btn"
              onClick={() => {
                history.push({
                  pathname: "/Buynow",
                  state: {
                    image: e.data.image,
                    price: e.data.Price,
                    Battery: e.data.Battery,
                    name: e.data.name,
                  },
                });
              }}
            >
              Buy Now
            </button>
            <button
              className="addtocart-btn"
              onClick={() => {
                firestore
                  .collection("mobilecart")
                  .where("name", "==", e.data.name)
                  .get()
                  .then((querySnapshot) => {
                    querySnapshot.docs[0].ref.delete();
                  });
              }}
            >
              Remove From Cart
            </button>
          </div>
        );
      })}

      {addCartLaptop.map((e, index) => {
        return (
          <div style={{ border: "3px solid grey" }} key={index}>
            <div className="mobileCard">
              <img src={e.data.image}></img>

              <h3 style={{ marginRight: "10px" }}>{e.data.name}</h3>
              <h3 style={{ marginRight: "10px" }}>Ram-{e.data.Ram}</h3>
            </div>
            <h1>Model-{e.data.Model}</h1>
            <h1>{e.data.Company}</h1>
            <h1 className="price" style={{ marginRight: "10px" }}>
              {" "}
              Price- {e.data.Price} Rs
            </h1>

            <button
              className="addtocart-btn"
              onClick={() => {
                history.push({
                  pathname: "/Buynow",
                  state: {
                    image: e.data.image,
                    price: e.data.Price,
                    Battery: e.data.Battery,
                    name: e.data.name,
                    model: e.data.Model,
                  },
                });
              }}
            >
              Buy Now
            </button>
            <button
              className="addtocart-btn"
              onClick={() => {
                firestore
                  .collection("laptopcart")
                  .where("Model", "==", e.data.Model)
                  .get()
                  .then((querySnapshot) => {
                    querySnapshot.docs[0].ref.delete();
                  });
              }}
            >
              Remove From Cart
            </button>
          </div>
        );
      })}

      {electronics.map((e, index) => {
        return (
          <div style={{ border: "3px solid grey" }} key={index}>
            <div className="mobileCard">
              <img src={e.data.Image}></img>

              <h3 style={{ marginRight: "10px" }}>
                {e.data.type} {e.data.Desc}
              </h3>
            </div>

            <h1>{e.data.Company}</h1>
            <h1 className="price" style={{ marginRight: "10px" }}>
              {" "}
              Price- {e.data.Price} Rs
            </h1>

            <button
              className="addtocart-btn"
              onClick={() => {
                history.push({
                  pathname: "/Buynow",
                  state: {
                    image: e.data.Image,
                    price: e.data.Price,
                    Battery: e.data.Battery,
                    Company: e.data.Company,
                    desc: e.data.Desc,
                  },
                });
              }}
            >
              Buy Now
            </button>
            <button
              className="addtocart-btn"
              onClick={() => {
                firestore
                  .collection("electronics")
                  .where("Price", "==", e.data.Price)
                  .get()
                  .then((querySnapshot) => {
                    querySnapshot.docs[0].ref.delete();
                  });
              }}
            >
              Remove From Cart
            </button>
          </div>
        );
      })}

      {girlsCart.map((e, index) => {
        return (
          <div style={{ border: "3px solid grey" }} key={index}>
            <div className="mobileCard">
              <img src={e.data.Image}></img>

              <h3 style={{ marginRight: "10px" }}>{e.data.type}</h3>
            </div>

            <h1 className="price" style={{ marginRight: "10px" }}>
              {" "}
              Price- {e.data.Price} Rs
            </h1>

            <button
              className="addtocart-btn"
              onClick={() => {
                history.push({
                  pathname: "/Buynow",
                  state: {
                    image: e.data.Image,
                    price: e.data.Price,
                  },
                });
              }}
            >
              Buy Now
            </button>
            <button
              className="addtocart-btn"
              onClick={() => {
                firestore
                  .collection("girlscart")
                  .where("id", "==", e.data.id)
                  .get()
                  .then((querySnapshot) => {
                    querySnapshot.docs[0].ref.delete();
                  });
              }}
            >
              Remove From Cart
            </button>
          </div>
        );
      })}

      {boysCart.map((e, index) => {
        return (
          <div style={{ border: "3px solid grey" }} key={index}>
            <div className="mobileCard">
              <img src={e.data.Image}></img>

              <h3 style={{ marginRight: "10px" }}>{e.data.type}</h3>
            </div>

            <h1 className="price" style={{ marginRight: "10px" }}>
              {" "}
              Price- {e.data.Price} Rs
            </h1>
            <button
              className="addtocart-btn"
              onClick={() => {
                history.push({
                  pathname: "/Buynow",
                  state: {
                    image: e.data.Image,
                    price: e.data.Price,
                  },
                });
              }}
            >
              Buy Now
            </button>
            <button
              className="addtocart-btn"
              onClick={() => {
                firestore
                  .collection("boyscart")
                  .where("id", "==", e.data.id)
                  .get()
                  .then((querySnapshot) => {
                    querySnapshot.docs[0].ref.delete();
                  });
              }}
            >
              Remove From Cart
            </button>
          </div>
        );
      })}

      {Homecart.map((e, index) => {
        return (
          <div style={{ border: "3px solid grey" }} key={index}>
            <div className="mobileCard">
              <img src={e.data.image}></img>

              <h3 style={{ marginRight: "10px" }}>{e.data.desc}</h3>
            </div>

            <h1 className="price" style={{ marginRight: "10px" }}>
              {" "}
              Price- {e.data.price} Rs
            </h1>

            <button
              className="addtocart-btn"
              onClick={() => {
                history.push({
                  pathname: "/Buynow",
                  state: {
                    image: e.data.image,
                    price: e.data.price,
                    desc: e.data.desc,
                  },
                });
              }}
            >
              Buy Now
            </button>
            <button
              className="addtocart-btn"
              onClick={() => {
                firestore
                  .collection("homecart")
                  .where("desc", "==", e.data.desc)
                  .get()
                  .then((querySnapshot) => {
                    querySnapshot.docs[0].ref.delete();
                  });
              }}
            >
              Remove From Cart
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Addtocart;
