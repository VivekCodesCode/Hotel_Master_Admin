import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function AddWaiter() {
  const [show, setShow] = useState(false);

  const handleClose = async() => {
    setShow(false);
   console.log(waiter_data);
   await axios.post("https://hotelloginbackend.onrender.com/api/add_waiter",waiter_data)
  }
  const handleShow = () => setShow(true);
  const[waiter_data,set_waiter_data]=useState({
   name:"",
   password:"",
   phone:"",
   email:"",
   image:""
  })
  function onchange_listner(params) {
    const {name,value}=params.target;
   set_waiter_data({
    ...waiter_data,[name]:value
   })

  }

  return (
    <>
  
      <Button variant="primary" onClick={handleShow}>
        Add Employee
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Waiter</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
              onChange={onchange_listner}
              name='name'
                type="email"
                placeholder="Enter Waiter Name"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
               onChange={onchange_listner}
               name='email'
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group> <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Password</Form.Label>
              <Form.Control
               onChange={onchange_listner}
              name='password'
                type="password"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group> <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Phone</Form.Label>
              <Form.Control
               onChange={onchange_listner}
               name='phone'
                type="email"
                placeholder="Enter Phone number"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Image</Form.Label>
              <Form.Control
               onChange={onchange_listner}
              name='image'
                type="email"
                placeholder="Give Image"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Add waiter          
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddWaiter;