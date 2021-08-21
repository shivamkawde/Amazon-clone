import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Laptop from "./Laptop";
import Mobile from "./Mobile";
import App from "./App";
import { useState } from "react";
import { createContext, useEffect } from "react";
import Electronics from "./Electronics";
import Boysfashion from "./Boysfashion";
import Girlsfashion from "./Girlfashion";
import Addtocart from "./Addtocart";
import Login from "./Login";
import CreateAc from "./CreateAc";
import Header from "./Header";
import Home from "./Home";
import { auth, firestore } from "./Firebase";
import Offers from "./Offers";
import Groceries from "./Groceries";
import Buynow from "./Buynow";
import Myorders from "./Myorders";
let someContext = createContext();
function App1() {
  let [navBarSearchBox, setNavBarSearchBox] = useState("");
  //let[cartCount,setCartCount]=useState(0)
  let [user, setUser] = useState(null);
  let [addCartposts, setAddCartPosts] = useState([]);
  let checkOnline = (user) => setUser(user);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log(user);

      if (user) {
        console.log(user);
        let { displayName, email, uid } = user;
        checkOnline({ displayName, email, uid });
      } else {
        checkOnline(user);
      }
    });
  }, []);

  return (
    <>
      <Router>
        <Switch>
          <someContext.Provider
            value={{
              navBarSearchBox: navBarSearchBox,
              setNavBarSearchBox: setNavBarSearchBox,
              user: user,
              checkOnline: checkOnline,
            }}
          >
            <Route exact path="/Laptop">
              <Laptop />
            </Route>
            <Route exact path="/Electronics">
              <Electronics />
            </Route>
            <Route exact path="/Header">
              <Header />
            </Route>
            <Route exact path="/Mobile">
              <Mobile />
            </Route>
            <Route exact path="/Home">
              <Home />
            </Route>
            <Route exact path="/Addtocart">
              <Addtocart addCartposts={addCartposts} />
            </Route>
            <Route exact path="/Login">
              <Login />
            </Route>
            <Route exact path="/CreateAc">
              <CreateAc />
            </Route>
            <Route exact path="/Offers">
              <Offers />
            </Route>
            <Route exact path="/Myorders">
              <Myorders />
            </Route>

            <Route exact path="/Buynow">
              <Buynow />
            </Route>

            <Route exact path="/Groceries">
              <Groceries />
            </Route>

            <Route exact path="/Boysfashion">
              <Boysfashion />
            </Route>
            <Route exact path="/Girlsfashion">
              <Girlsfashion />
            </Route>
            <Route exact path="/">
              <App />
            </Route>
          </someContext.Provider>
        </Switch>
      </Router>
    </>
  );
}

export default App1;
export { someContext };
