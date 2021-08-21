
import './App.css';
import { someContext } from './App1';
import Header from './Header';
import Home from './Home';
import {useEffect,useContext,useState} from "react"
import {auth ,firestore} from "./Firebase"
function App() {

  let props=useContext(someContext)
  












  return (
    <div className="App">
    <Header/>
    <Home/>
    </div>
  );
}

export default App;
