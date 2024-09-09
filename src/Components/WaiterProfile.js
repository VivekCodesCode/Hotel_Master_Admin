import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button, Image, ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaPowerOff } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { faCalendarAlt, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import Navbars from './Navbar';
import { useSelector } from "react-redux";
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Sidebar from './Sidebar';

const WaiterProfile = () => {
  const [waiter_data, set_waiter_data] = useState({
    name: "",
    phone: "",
    email: "",
    image: "",
  });
  const [show, setShow] = useState(false);
  const[popup_name,set_popupname]=useState("")
const navigate =useNavigate()
  const Name = useSelector((state) => state.amount);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  async function handleClose_andUpdate(params) {
   if(params==="update"){ await axios.put("https://hotelloginbackend.onrender.com/api/update_waiter",[Name,waiter_data]).then((res)=>{
       navigate("/");
    })
  }
    else if(params==="delete"){
      await axios.post("https://hotelloginbackend.onrender.com/api/delete_waiter",Name).then((res)=>{
        navigate("/");
     })
    }
  
   
   
  }
  useEffect(() => {
    function call_api() {
      console.log(Name);
      axios.get(`https://hotelloginbackend.onrender.com/api/get_waiter_details/${Name}`).then((res) => {
        set_waiter_data({
          ...waiter_data,
          name: res.data.name,
          phone: res.data.phone,
          email: res.data.email,
          image: res.data.image,
          password:res.data.password
        });
        set_popupname(res.data.name)
      });
    }
    if (Name) {
      call_api();
    }
  }, [Name]);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    set_waiter_data({
      ...waiter_data,
      [name]: value, // Update the corresponding field
    });
  };

 async function update_waiter(params) {
   //await axios.put("https://hotelloginbackend.onrender.com/api/update_waiter",[Name,waiter_data]);
  }
  return (
    <>
     <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to update {popup_name}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>handleClose_andUpdate("update")}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Header */}
      <Navbars />
      <div className="waiter_profile_maincontainer d-flex">
        <Sidebar/>

        {/* Main Content Area */}
        <Container className="waiter_profile-container mx-30">
          <Row className="mt-5 mx-30">
            {/* User Profile Section */}
            <Col md={6}>
              <h2 className="waiter_profile-heading">User Profile</h2>
              <hr style={{ borderTop: '3px solid #ff5733' }} />
              <div className="align-items-center mb-3">
                <Image
                  src={waiter_data.image}
                  roundedCircle
                  className="me-3 waiter_profile-avatar"
                  alt="User Avatar"
                  style={{ height: "110px", width: "110px" }}
                />
                <Form className="waiter_profile-form mt-4">
                  <Form.Group controlId="fullName" className="waiter_profile-formGroup">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      value={waiter_data.name}
                      name="name"
                      type="text"
                      className="waiter_profile-input"
                      onChange={handleInputChange} // Handle changes
                    />
                  </Form.Group>

                  <Form.Group controlId="mobileNumber" className="mt-3 waiter_profile-formGroup">
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control
                      value={waiter_data.phone}
                      name="phone"
                      type="input"
                      className="waiter_profile-input"
                      onChange={handleInputChange} // Handle changes
                    />
                  </Form.Group>

                  <Form.Group controlId="emailAddress" className="mt-3 waiter_profile-formGroup">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      value={waiter_data.email}
                      name="email"
                      type="email"
                      className="waiter_profile-input"
                      onChange={handleInputChange} // Handle changes
                    />
                  </Form.Group>

                  <Form.Group controlId="joinedOn" className="mt-3 waiter_profile-formGroup">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="text" value={waiter_data.password} className="waiter_profile-input" disabled />
                  </Form.Group>

                  <Form.Group controlId="savings" className="mt-3 align-items-center waiter_profile-formGroup">
                    <Form.Label className="me-3">Savings</Form.Label>
                    <Form.Control type="text" value="20" className="me-2 waiter_profile-input" />
                    <Button 
                     onClick={handleShow}
                    variant="outline-warning" className="mt-2">
                      Update Waiter
                    </Button>
                    <Button variant="outline-danger" onClick={()=>{handleClose_andUpdate("delete")}} className='mx-5 my-2'>Remove Waiter</Button>{' '}
                  </Form.Group>
                </Form>
              </div>
            </Col>

            {/* Booking History Section */}
            <Col md={6}>
              <h4 className="waiter_profile-heading">History and Recent Bookings</h4>
              <ListGroup className="mt-3">
                <ListGroup.Item className="waiter_profile-listItem mt-4">
                  <div className="d-flex justify-content-between">
                    <div>
                      <strong>Sea Grill of Merrick Park</strong> <br />
                      <span className="waiter_profile-status reserved">Reserved</span> <br />
                      <small>
                        <FontAwesomeIcon icon={faCalendarAlt} /> 17 December 2022 | 12:15 PM
                      </small>{" "}
                      <br />
                      <small>
                        <FontAwesomeIcon icon={faUserFriends} /> 2 Guests
                      </small>
                    </div>
                    <div className="text-end">
                      <small>Saved: $2</small>
                    </div>
                  </div>
                </ListGroup.Item>
                <hr style={{ borderTop: '3px solid #ff5733' }} />

                <ListGroup.Item className="waiter_profile-listItem">
                  <div className="d-flex justify-content-between">
                    <div>
                      <strong>Sea Grill North Miami Beach</strong> <br />
                      <span className="waiter_profile-status cancelled">Cancelled</span> <br />
                      <small>
                        <FontAwesomeIcon icon={faCalendarAlt} /> 17 December 2022 | 12:15 PM
                      </small>{" "}
                      <br />
                      <small>
                        <FontAwesomeIcon icon={faUserFriends} /> 2 Guests
                      </small>
                    </div>
                    <div className="text-end">
                      <small>Saved: $0</small>
                    </div>
                  </div>
                </ListGroup.Item>
                <hr style={{ borderTop: '3px solid #ff5733' }} />

                <ListGroup.Item className="waiter_profile-listItem">
                  <div className="d-flex justify-content-between">
                    <div>
                      <strong>Villagio Restaurant and Bar</strong> <br />
                      <span className="waiter_profile-status completed">Completed</span> <br />
                      <small>
                        <FontAwesomeIcon icon={faCalendarAlt} /> 17 December 2022 | 12:15 PM
                      </small>{" "}
                      <br />
                      <small>
                        <FontAwesomeIcon icon={faUserFriends} /> 2 Guests
                      </small>
                    </div>
                    <div className="text-end">
                      <small>Saved: $2</small>
                    </div>
                  </div>
                </ListGroup.Item>

                <div className="waiter_profile-actionButtons mt-4 d-flex gap-2">
                  <h5>Select user status:</h5>
                  <Button variant="outline-danger" className="me-2">
                    Delete User
                  </Button>
                  <Button variant="outline-secondary" className="me-2">
                    Make Inactive
                  </Button>
                </div>

                <Button
                  
                  variant="warning"
                  size="lg"
                  className="waiter_profile-saveButton mt-3"
                >
                  Save/Update Details
                </Button>
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default WaiterProfile;
