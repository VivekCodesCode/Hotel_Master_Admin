import React from 'react';
import { Container, Row, Col, Form, Button, Image, ListGroup, InputGroup } from 'react-bootstrap';
import { FaPowerOff } from "react-icons/fa";
import { Link } from 'react-router-dom';
import {
  Header,
  Navbar,
} from 'rsuite';
import "../App.css";
function Navbars(props) {
     return(
       <>
       <Header className="waiter_login_navbar"> 
  <Navbar className="waiter_login_navbar" appearance="inverse">
    <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between'}}>
      <Navbar.Brand className="navbar_head_admin">CyberInstant</Navbar.Brand>
   <Navbar.Brand className="navbar_head_admin_name">{props.name}</Navbar.Brand>
    </div>
  </Navbar>
</Header>


       </> 
     );
}
export default Navbars;