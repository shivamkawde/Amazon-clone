import React, { useState } from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useHistory } from "react-router-dom";
import { someContext } from "./App1";
import { useContext, useEffect } from "react";
import { auth, signInWithGoogle, firestore } from "./Firebase";
import { colors } from "@material-ui/core";
const Header = () => {
  let props = useContext(someContext);
  let history = useHistory();
  let [searchBox, setSearchBox] = useState("");
  let [cartCount, setCartCount] = useState(0);

  let [mobileCartCount, setMobileCartCount] = useState(0);

  let [laptopCartCount, setlaptopCartCount] = useState(0);
  let [ElectronicsCartCount, setElectronicsCartCount] = useState(0);
  let [girlsCartCount, setgirlsCartCount] = useState(0);
  let [boysCartCount, setboysCartCount] = useState(0);
  let [homeCartCount, sethomeCartCount] = useState(0);

  console.log("ad");

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

        if (props.user) setMobileCartCount(tempArr.length);
        //setAddCartPosts(tempArr)
      });
    };

    f();
  });

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

        if (props.user) {
          setlaptopCartCount(tempArr.length);
        }
      });
    };

    f();
  });

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

        if (props.user) {
          setElectronicsCartCount(tempArr.length);
          console.log("jiii");
        }
      });
    };

    f();
  });

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

        if (props.user) {
          setgirlsCartCount(tempArr.length);
        }
      });
    };

    f();
  });

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

        if (props.user) {
          setboysCartCount(tempArr.length);
        }
      });
    };

    f();
  });

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

        if (props.user) {
          sethomeCartCount(tempArr.length);
        }
      });
    };

    f();
  });

  useEffect(() => {
    setCartCount(
      mobileCartCount +
        laptopCartCount +
        ElectronicsCartCount +
        girlsCartCount +
        boysCartCount +
        homeCartCount
    );
  });

  return (
    <div className="header">
      <img
        className="header-logo"
        src="https://i0.wp.com/mynintendonews.com/wp-content/uploads/2019/06/amazon_logo.jpg?ssl=1"
      />
      <div className="header--search">
        <input
          className="headersearchInput"
          type="text"
          onChange={(e) => {
            setSearchBox(e.currentTarget.value);
          }}
        />
        <SearchIcon
          className="header-searchIcon"
          onClick={() => {
            props.setNavBarSearchBox(searchBox);
          }}
        />
      </div>

      <div className="header-nav">
        <div className="header-option" onClick={() => history.push("/")}>
          Home
        </div>
        <div
          className="header-option"
          onClick={() => history.push("/Myorders")}
        >
          My Orders
        </div>

        <div className="headerOptionBasket">
          <ShoppingBasketIcon
            onClick={() => {
              history.push({
                pathname: "/Addtocart",
              });
            }}
          />
          <span
            className="headerOptionLineTwo headerBasketCount"
            style={{ colors: "red" }}
          >
            {cartCount}
          </span>
        </div>

        <div className="header-option">
          <span className="header-optionLineOne">
            {props.user
              ? props.user.displayName === null
                ? props.user.email
                : props.user.displayName
              : ""}
          </span>

          {props.user ? (
            <span
              className="header-optionLineTwo"
              onClick={() => {
                auth.signOut();
                history.push("/");
              }}
            >
              Sign out
            </span>
          ) : (
            <span
              className="header-optionLineTwo"
              onClick={() => history.push("/Login")}
            >
              Sign In
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
