import React from 'react'
import { useLocation } from 'react-router-dom'
import {firestore} from "./Firebase"
import "./Mobile.css"
import "./Buynow.css"
import { FiberSmartRecordRounded } from '@material-ui/icons'
import {useState,useContext,useRef} from "react";
import { someContext } from './App1'
import Header from './Header'
import CheckIcon from '@material-ui/icons/Check';

function Buynow() {

    let location =useLocation()

    let [Payment,setPayment]=useState("")

    let props=useContext(someContext)
    const inputName = useRef(null);

    const inputAddress = useRef(null);

    const inputPincode = useRef(null);
    const inputCity = useRef(null);

    const inputState = useRef(null);
    let[orderDoneBox,setOrderDoneBox]=useState(false);
    console.log(Payment)
    
    return (
        <>
        <Header/>
        {orderDoneBox?<> <h3 className="thanku">Thank You </h3><div className="orderDone">Order Successfull Done <CheckIcon/></div></>:
        <div style={{ border: "1px solid grey" }} >
        <div className="mobileCard">
          <img src={location.state.image}></img>
          <h3 style={{ marginRight: "10px" }}>{location.state.Battery}</h3>
          <h3 style={{ marginRight: "10px" }}>{location.state.name}</h3>
          <h3 style={{ marginRight: "10px" }}>{location.state.ram}</h3>
          <h3 style={{ marginRight: "10px" }}>{location.state.rom}</h3>
          <h3 style={{ marginRight: "10px" }}>{location.state.model}</h3>
          <h3 style={{ marginRight: "10px" }}>{location.state.company}</h3>
          <h3 style={{ marginRight: "10px" }}>{location.state.desc}</h3>
        </div>
        <h1></h1>
        <h1 className="price" style={{ marginRight: "10px" }}>
          {" "}
          Price- {location.state.price} Rs
        </h1>

        <div className="form">
        <input type="text" ref={inputName} className="Fullname" placeholder="Enter Name" ></input>
        <input type="text" ref={inputAddress} className="Fullname" placeholder="Enter Address" ></input>
        <input type="text" ref={inputPincode} className="Fullname" placeholder="Enter Pincode" ></input>
        <input type="text" ref={inputCity} className="Fullname" placeholder="Enter City" ></input>
        <input type="text" ref={inputState} className="Fullname" placeholder="Enter State" ></input>
    
        <select className="payment"  onChange={(e)=>{setPayment(e.currentTarget.value)
         
        }}>
        <option> Select Payment 
             </option>
             <option> Google Pay
             </option>
             <option>
                 Phoen Pay
             </option>
             <option>
                 Amazon Pay
             </option>
             <option>
                 COD
             </option>
            
            </select>
        <input type="text" className="Fullname" value={location.state.price} placeholder="Enter Address" ></input>
        <button className="orderBtn" onClick={()=>{

                   console.log(inputName.current.value)
               if(inputName.current.value!==""&&inputAddress!==""&&inputPincode!==""&&inputState!=="")
               {


                setOrderDoneBox(true)
                firestore.collection("orders").add({
                     name:inputName.current.value,
                     city:inputCity.current.value,
                     pincode:inputPincode.current.value,
                     paymentmethod :Payment,
                     address:inputAddress.current.value,
                     idname:props.user.email,
                     price:location.state.price,
                      uid:props.user.uid,
                     image:location.state.image,
                     month:new Date().getMonth()+1,
                     date:new Date().getDate(),
                     year:new Date().getFullYear()

 
    
                })
                  
               }
           else{
            alert("fill All Field")
          
        }

            
        }}>Order</button>
        </div>
        </div>
    
       


         



}

        </>
    )
}

export default Buynow
