import React from "react";
import "./Home.css";

import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import LaptopIcon from "@material-ui/icons/Laptop";
import SpeakerGroupIcon from "@material-ui/icons/SpeakerGroup";
import FaceOutlinedIcon from "@material-ui/icons/FaceOutlined";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import { firestore } from "./Firebase";
import { someContext } from "./App1";
import { useContext } from "react";
function Home() {
  let history = useHistory();
  let props = useContext(someContext);
  return (
    <div className="home">
      <div className="catagries">
        <div
          className="mobile"
          onClick={() => {
            history.push("./Mobile");
          }}
        >
          <b>Mobiles </b>
          <PhoneAndroidIcon />
        </div>
        <div
          className="mobile"
          onClick={() => {
            history.push("./Electronics");
          }}
        >
          <b>Electronics</b>
          <SpeakerGroupIcon />
        </div>
        <div
          className="mobile"
          onClick={() => {
            history.push("./Laptop");
          }}
        >
          <b>Laptops</b>
          <LaptopIcon />
        </div>
        <div
          className="mobile"
          onClick={() => {
            history.push("./Boysfashion");
          }}
        >
          <b>Boy'sFashion</b>
          <FaceOutlinedIcon />
        </div>

        <div
          className="mobile"
          onClick={() => {
            history.push("./Girlsfashion");
          }}
        >
          <b>Girls'sFashion</b>
          <FaceOutlinedIcon />
        </div>
        <div
          className="mobile"
          onClick={() => {
            history.push("./Offers");
          }}
        >
          <b>Offers</b>
          <LocalOfferIcon />
        </div>
        <div
          className="mobile"
          onClick={() => {
            history.push("./Groceries");
          }}
        >
          <b>Groceries</b>
          <LocalMallIcon />
        </div>
      </div>
      <h3>Top Deals</h3>
      <div className="topDeals">
        <div className="topDealsItems">
          <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&hei=1112&fmt=jpeg&qlt=80&.v=1604021663000"></img>

          <p>iphoen 12 (3/32) </p>
          <h5>price-90,000 Rs</h5>

          <button
            className="addToCart"
            onClick={() => {
              if (props.user) {
                firestore.collection("homecart").add({
                  image:
                    "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&hei=1112&fmt=jpeg&qlt=80&.v=1604021663000",
                  desc: "iphoen 12 (3/32)",
                  price: 90000,
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

        <div className="topDealsItems">
          <img src="https://images.jdmagicbox.com/quickquotes/images_main/b076bl3v2y_kiddeo_kids_girls_full_sleeve_t_shirts_pack_of_5_5_6_years__67098369_1.jpg" />

          <p>Girls top </p>
          <h5>price-700 Rs</h5>

          <button
            className="addToCart"
            onClick={() => {
              if (props.user) {
                firestore.collection("homecart").add({
                  image:
                    "https://images.jdmagicbox.com/quickquotes/images_main/b076bl3v2y_kiddeo_kids_girls_full_sleeve_t_shirts_pack_of_5_5_6_years__67098369_1.jpg",

                  desc: "Girls top",
                  price: 700,
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

        <div className="topDealsItems">
          <img src="https://cdn.shopify.com/s/files/1/0316/5362/5992/products/35_1024x1024_2x_bb15b8ae-f7bb-4921-90d6-a6a47ad31152_530x@2x.jpg?v=1580378556" />

          <p>Shirts </p>
          <h5>price-1,000 Rs</h5>

          <button
            className="addToCart"
            onClick={() => {
              if (props.user) {
                firestore.collection("homecart").add({
                  image:
                    "https://cdn.shopify.com/s/files/1/0316/5362/5992/products/35_1024x1024_2x_bb15b8ae-f7bb-4921-90d6-a6a47ad31152_530x@2x.jpg?v=1580378556",

                  desc: "Shirts",
                  price: 1000,
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
        <div className="topDealsItems">
          <img src="https://i.pinimg.com/originals/cd/68/4b/cd684b4f5825664a04d094df50b7a151.jpg" />
          <p>Raymond black suit</p>
          <h5>price-10,000 Rs</h5>

          <button
            className="addToCart"
            onClick={() => {
              if (props.user) {
                firestore.collection("homecart").add({
                  image:
                    "https://i.pinimg.com/originals/cd/68/4b/cd684b4f5825664a04d094df50b7a151.jpg",

                  desc: "Raymond black suit",
                  price: 10000,
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
        <div className="topDealsItems">
          <img src="data:image/jpeg;base64,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" />

          <p>Apple mack book </p>
          <h5>price-10,000 Rs</h5>

          <button
            className="addToCart"
            onClick={() => {
              if (props.user) {
                firestore.collection("homecart").add({
                  image:
                    "data:image/jpeg;base64,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",

                  desc: "Apple mack book",
                  price: 100000,
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
        <div className="topDealsItems">
          <img src="data:image/jpeg;base64,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" />

          <p>vivo y21 (3/32) </p>
          <h5>price-15,000 Rs</h5>

          <button
            className="addToCart"
            onClick={() => {
              if (props.user) {
                firestore.collection("homecart").add({
                  image:
                    "data:image/jpeg;base64,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",

                  desc: "vivo y21",
                  price: 150000,
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
      </div>

      <h3>Best Sellers in Computers & Accessories </h3>
      <div className="bestSeelingComputer">
        <div>
          <img src="data:image/jpeg;base64,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"></img>

          <img src="https://m.media-amazon.com/images/I/51A1vwtYr+L._SL1200_.jpg"></img>
          <img src="data:image/jpeg;base64,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"></img>
          <img src="https://m.media-amazon.com/images/I/81NoPCOJh+L._SL1500_.jpg"></img>
          <img src="https://in-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/F/6/F6V27AA-1_T1598518088.png"></img>
        </div>
      </div>

      <h3>Up to 80% off | Bestselling cushion covers</h3>
      <div className="cushioncovers">
        <div className="cushioncoversInfo">
          <img src="https://d2x02matzb08hy.cloudfront.net/img/home_decor/hero_image/781216719/23_A.jpg"></img>

          <p>Read color</p>
          <h5>Price-799</h5>
          <button
            className="addToCart"
            onClick={() => {
              if (props.user) {
                firestore.collection("homecart").add({
                  image:
                    "https://d2x02matzb08hy.cloudfront.net/img/home_decor/hero_image/781216719/23_A.jpg",
                  desc: "Read color cushion",
                  price: 799,
                  uid: props.user.uid,
                });
              } else {
                alert("please Login");
              }
            }}
          >
            Add to Cart
          </button>
        </div>
        <div className="cushioncoversInfo">
          <img src="https://5.imimg.com/data5/HY/IV/MY-30775592/printed-cushion-covers-500x500.jpg"></img>
          <p>Combo</p>
          <h5>Price-1199</h5>
          <button
            className="addToCart"
            onClick={() => {
              if (props.user) {
                firestore.collection("homecart").add({
                  image:
                    "https://5.imimg.com/data5/HY/IV/MY-30775592/printed-cushion-covers-500x500.jpg",
                  desc: "Combo cushion",
                  price: 1199,
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

        <div className="cushioncoversInfo">
          <img src="https://m.media-amazon.com/images/I/71yIKraeX2L._SL1000_.jpg" />
          <p>Combo</p>
          <h5>Price-1199</h5>
          <button
            className="addToCart"
            onClick={() => {
              if (props.user) {
                firestore.collection("homecart").add({
                  image:
                    "https://m.media-amazon.com/images/I/71yIKraeX2L._SL1000_.jpg",
                  desc: " cushion",
                  price: 1199,
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
      </div>
    </div>
  );
}

export default Home;
