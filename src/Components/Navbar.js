import React from 'react';
import { Container, Row, Col, Form, Button, Image, ListGroup, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaPowerOff } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { faCalendarAlt, faUserFriends } from '@fortawesome/free-solid-svg-icons';
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
    <div style={{  width: '100%'}}>
      <Navbar.Brand className="navbar_head_admin">CyberInstant</Navbar.Brand>
     
    </div>
  </Navbar>
</Header>


       </> 
     );
}
export default Navbars;