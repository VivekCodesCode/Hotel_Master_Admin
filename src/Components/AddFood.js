import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Navbars from './Navbar';

function AddWaiter() {
  const [show, setShow] = useState(false);
 const[cardData,setCardData]=useState([])
  const handleClose = async() => {
    setShow(false);
   console.log(set_food_data);
   await axios.post("https://hotelloginbackend.onrender.com/api/add_food",set_food_data)
  }
  const handleShow = () => setShow(true);
  const[set_food_data,set_set_food_data]=useState({
   title:"",
   shortDescription:"",
   fullDescription:"",
  
   image:"",
   price:"",
   quantity:1,
   rating:3,
  })
  useEffect(()=>{
       
    axios.get("https://hotelloginbackend.onrender.com/api/product").then((res)=>{
     //console.log(res.data.data.productData)
     setCardData(()=>res.data.data.productData);
     console.log(cardData)
 
    })
    
 },[]);
  function onchange_listner(params) {
    const {name,value}=params.target;
   set_set_food_data({
    ...set_food_data,[name]:value
   })

  }
  async function delete_food(id) {
    window.location.reload();
   await   axios.post("https://hotelloginbackend.onrender.com/api/delete_food",{ID:id}).then(()=>{
    axios.get("https://hotelloginbackend.onrender.com/api/product").then((res)=>{
        //console.log(res.data.data.productData)
        setCardData(()=>res.data.data.productData);
        console.log(cardData)
    
       })
   })
  

  }

  return (
    <>
  <Navbars/>
      <Button variant="primary" onClick={handleShow}>
        Add Food
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Waiter</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
              onChange={onchange_listner}
              name='title'
                type="email"
                placeholder="Enter Waiter Name"
                autoFocus
              />
            </Form.Group>
             <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>shortDescription</Form.Label>
              <Form.Control
               onChange={onchange_listner}
              name='shortDescription'
                type="name"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group> <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>fullDescription</Form.Label>
              <Form.Control
               onChange={onchange_listner}
               name='fullDescription'
                type="name"
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
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Price</Form.Label>
              <Form.Control
               onChange={onchange_listner}
              name='price'
                type="name"
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
            Add Item          
          </Button>
        </Modal.Footer>
      </Modal>
      <div className='food_main_container  d-flex  flex-wrap'>
      {
        
        cardData.map((val,i,arr)=>{
           return (<Card className='col-12 col-md-6 col-lg-3' key={i}  style={{ width: '18rem' }}>
      <Card.Img variant="top" height="130px" src={val.image} />
      <Card.Body>
        <Card.Title>{val.title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button onClick={()=>delete_food(val._id)} variant="danger">Delete</Button>
      </Card.Body>
    </Card>)
        })
      }
      </div>
    </>
  );
}

export default AddWaiter;