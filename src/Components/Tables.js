import React, { useEffect, useState } from 'react';
import { FaPowerOff } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoRefreshCircleSharp } from "react-icons/io5";

import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import { Container, Row, Col, Form, Button, Image, ListGroup } from 'react-bootstrap';
import '../App.css';
import { MdDelete } from "react-icons/md";
import Navbars from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Dropdown from 'react-bootstrap/Dropdown';
import { bindActionCreators } from "redux";
import { actionCreators } from "./State/index";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
//Planning,Shopping,discount,package,warehouse,chat,settings
function Tables() {
  const[waiter_data,set_waiter_data]=useState([])
  const[status,set_status]=useState(Array(69).fill(["Delivery","red"]));
  const dispatch=useDispatch()
  const [name,set_name]=useState("");
  const navigate=useNavigate()
  useEffect(()=>{
     axios.get("https://hotelloginbackend.onrender.com/api/get_waiters").then((res)=>{
      set_waiter_data(res.data);
     })
    
  },[status])
  function delete_user(id,table) {
    set_waiter_data(waiter_data.filter((val,index,arr)=>{
      return index!=id;
    
    }))
   
  }
  function get_name(name) {
   navigate("/WaiterProfile")
   dispatch(actionCreators.set_name(name))
   
  }
  function refresh_table(params) {
    axios.get("https://hotelloginbackend.onrender.com/api/get_waiters").then((res)=>{
     // console.log(res.data);
      set_waiter_data(res.data);
    })
  }
  function completed_orders(params) {
  set_waiter_data(waiter_data.filter((val,index,arr)=>{
    return status[index][1]!=="red";
  }))
  }
  function update_status(index) {
    console.log("status changed")
    set_status(status.map((val,i,arr)=>{
      if(i==index && val[1]=="red") return ["Confirmed","green"];
      else if(i==index && val[1]=="green") return ["Delivery","red"];
      return val
    }))
  }
  //This file is known as App.js
  return (
   <>
   <Navbars name={name}/>
    <div className="d-flex">
    <Sidebar/>
      {/* <div class="sidebar">

        <ul class="nav flex-column mt-5">
          <li class="nav-item">
            <a class="nav-link active" href="#"
              ><img src="./planning.png" alt="" />&nbsp;Live Orders</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"
              ><img src="./shopping-bag.png" alt="" />&nbsp;&nbsp;Order
              History</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <img src="./discount.png" alt="" />&nbsp;&nbsp;Offers</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <img src="./package.png" alt="" />&nbsp;&nbsp;Products</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"
              ><img src="./warehouse.png" alt="" />&nbsp;&nbsp;Stock</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"
              ><img src="./chat.png" alt="" />&nbsp;&nbsp;Message</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"
              ><img src="./settings.png" alt="" />&nbsp;&nbsp;Settings</a
            >
          </li>
        </ul>
      </div> */}

      <div className="main-content container-fluid" id="order-container">
        
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2>Employee Details</h2>
        </div>
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li className="nav-item">
            <a
            style={{background:"none",color:"black"}}
              className="nav-link active"
              id="pills-all-tab"
              data-toggle="pill"
              href="#pills-all"
              role="tab"
              aria-controls="pills-all"
              aria-selected="false"
            >
              All Orders
            </a>
          </li>
          <li className="nav-item" onClick={refresh_table}>
            <a
              className="nav-link"
              id="pills-summary-tab"
             style={{cursor:"pointer"}}
            >
             <button style={{border:"none",height:"30px"}}> Refresh</button>
            </a>
          </li>
         
         
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-all"
            role="tabpanel"
            aria-labelledby="pills-all-tab"
          >
            <div className="table-responsive">
              <table className="table project-list-table table-nowrap align-middle table-borderless">
                <thead>
                  <tr className="shadow-sm">
                    <th
                      style={{
                        borderTopLeftRadius: '10px',
                        borderBottomLeftRadius: '10px',
                      }}
                      scope="col"
                    >
                      Emp Image
                    </th>
                    <th scope="col">Employee Name</th>{
                      //This is a table and this is a index...
                    }
                    <th scope="col">Phone number</th>
                    <th scope="col">Delete</th>
                    <th scope="col">Edit Profile</th>
                    <th scope="col">Status</th>
                   
                   
                  </tr>
                </thead>
                <tbody>
                  {waiter_data.map((val, index) => (
                    <tr key={index} className="shadow-sm">
                      <th
                        style={{
                          borderTopLeftRadius: '10px',
                          borderBottomLeftRadius: '10px',
                        }}
                        scope="row"
                        className="ps-4"
                      >
                       <img className='waiter_table_pimage' src={val.image} height="40px" width="40px"/>
                      </th>
                      <td>{val.name}</td>
                      <td>{val.phone}</td>
                      <td><MdDelete style={{cursor:"pointer"}}/></td>
                     
                      <td onClick={()=>get_name(val.name)} style={{cursor:"pointer"}}>
                        <span className="badge text-bg-warning mb-0">
                          <i className="fa-regular fa-circle-dot">&nbsp;</i>
                          View Profile
                        </span>
                      </td>
                      <td>Active</td>
                     
                    </tr>
                  ))}
                  {
        !waiter_data.length&&(
          <div className='no_order'>
          <h1>
          No Orders Yet!!
          </h1>
          </div>
        )
      }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Tables;