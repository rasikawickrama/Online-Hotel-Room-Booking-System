import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useLocation,useNavigate } from 'react-router-dom';
import {  useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';


function Guestdetails() {
  
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };

    const [firstname, setFirstname] = useState('');
    const [lastname,setLastname]=useState('');
    const [country,setCountry]=useState('');
    const [address,setAddress]=useState('')
    const [email,setEmail]=useState('');
    const [city,setCity]=useState('');
    const [postalcode,setPostalcode]=useState('');
    const [requests,setRequests]=useState('')
    const [cardnumber, setCardnumber] = useState('');
    const [date,setDate]=useState('');
    const [cvvnumber,setCvvnumber]=useState('');
    const [cardname,setCardname]=useState('')
    const [response,setResponse] = useState('');
    
    const sendToServer = () => {
        axios.post('http://localhost:5000/post-payment', {cardnumber,
        date,
        cvvnumber,
        cardname,
        firstname,
        lastname,
        country,
        address,
        postalcode,
        city,
       requests,
       email})
        .then(res => setResponse(res.data.message))
        .catch(() => setResponse('Error sending to server'));
    };
    
    const [loading, setLoading] = useState(true);
  const [stayDetails, setStayDetails] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const {
      selectroom,
      selectprice,
      children,
      adults,
      checkInDate,
      checkOutDate
    } = location.state;

    setStayDetails({
      selectroom,
      selectprice,
      children,
      adults,
      checkInDate,
      checkOutDate
    });
    setLoading(false);
  }, [location]);
        
  const handleEdit = () => {
    // Redirect to an edit page with the stayDetails object
    navigate('/Booked', { stayDetails });
  };

  const handleRemove = () => {
    setStayDetails(null); // Reset stayDetails to null to clear the fields
    navigate(-1);
  };


  const stripePromise = loadStripe('YOUR_STRIPE_PUBLISHABLE_KEY');
  const handlePayment = async () => {
  const stripe = await stripePromise;
  
    const { selectprice } = stayDetails; // Extract price from stayDetails
    const priceId = selectprice.toString(); // Ensure the price is a string
  
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        { price: priceId, quantity: 1 } // Pass price as a string
      ],
      mode: 'payment',
      successUrl: 'https://yourdomain.com/success ', // Provide your success URL
      cancelUrl: 'https://yourdomain.com/cancel' // Provide your cancel URL
    });
  
    if (error) {
      console.error('Error:', error);
    }
  };
  
    
    return (
    
    
        <div>
        
        
         <section id="home" className="pay-section">

         {loading ? (
          <Spinner animation="grow" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
         <Card activeIndex={index} onSelect={handleSelect}>
        <section class="payed-section">
          <div class="container">
          <div class="row">
          <div class="col-lg-6">
          <div class="hero-text">
      <div class="booking-form">
      <h2>Contact Infor</h2>
            <Form> 
            <Row className="mb-3">
            <Form.Group as={Col}>
            <Form.Control
          type="text"
          name="name"
          placeholder='First Name'
          value={firstname}
          onChange={e => setFirstname(e.target.value)}
          required/>
          </Form.Group>

          <Form.Group as={Col}>
          <Form.Control
          type="text"
          name="name"
          placeholder='Last Name'
          value={lastname}
          onChange={e => setLastname(e.target.value)}
          required/>
           </Form.Group>
           </Row>

           <Form.Group>
           <Form.Control
            type="email"
            name="email"
            placeholder='Email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            required />
          </Form.Group>
          <h2> Address</h2> 
        <Form.Group>
        <Form.Control 
            type="text"
            placeholder='Country'
            value={country}
            onChange={e => setCountry(e.target.value)}
            required/>
             </Form.Group>
             <br/>

            <Form.Group >
            <Form.Control 
            type="text"
            placeholder='Address'
            value={address}
            onChange={e => setAddress(e.target.value)}
            required/>
             </Form.Group>
             <br/>

             <Row className="mb-3">
             <Form.Group as={Col}>
             <Form.Control 
            type="text"
            placeholder='City'
             value={city}
            onChange={e => setCity(e.target.value)}
            required/>
        </Form.Group>
        <Form.Group as={Col}>
        <Form.Control 
            type="text"
            placeholder='Postal Code'
            value={postalcode}
            onChange={e => setPostalcode(e.target.value)}
             required/>
        </Form.Group>
        </Row>

        <br/>
        <h2> Additional Details and Preferences</h2>
        <Form.Group as={Col}>
        <Form.Control 
            type="text"
            placeholder='Please note your requests or special needs'
            value={requests}
            onChange={e => setRequests(e.target.value)}
            required/>
        </Form.Group>
        <br/>
        <h2> Payment Information</h2> 

        <Form.Group>
        <Form.Control 
            type="text"
            placeholder='Card Number'
            value={cardnumber}
            onChange={e => setCardnumber(e.target.value)}
            required/>
        </Form.Group>

             <br/>
             <Row className="mb-3">
             <Form.Group as={Col}>
             <Form.Control 
            type="date"
            placeholder='Expiration date'
            value={date}
            onChange={e => setDate(e.target.value)}
             required/>
        </Form.Group>

        <Form.Group as={Col}>
        <Form.Control 
            type="text"
            placeholder='CVV'
            value={cvvnumber}
            onChange={e => setCvvnumber(e.target.value)}
            required/>
        </Form.Group>
        </Row>
        <br/>

        <Form.Group>
             <Form.Control 
            type="text"
            placeholder='Name on Card'
            value={cardname}
            onChange={e => setCardname(e.target.value)}
            required/>
            </Form.Group>
           <br/>
           {stayDetails && (
        <Form.Group as={Col}>
        <Form.Label>
        <h5>  Room Price: </h5>
        </Form.Label>
        <Form.Control 
            type="text"
            placeholder={stayDetails.selectprice}
            required/>
        </Form.Group>
        )}
            <br/>
        <Form.Group>
        <Button onClick = {sendToServer}> <h3>Complete Bookings </h3></Button>
        <div>{response}</div>
        <br/>
        <Button onClick={handlePayment}><h3>Pay with Stripe</h3></Button>
        </Form.Group>
        <br/>
        </Form>
        </div>
        </div>
        </div>
      
      <div class="col-xl-4 col-lg-5 offset-xl-2 offset-lg-1">
      <h1> Your Stay</h1>
      <section class="detail-section">
      {stayDetails && (
      <Form.Group>
        <Form.Label>
        <h5>  Check ins Date: </h5>
          </Form.Label>
        <Form.Control 
            type="text"
            placeholder={stayDetails.checkInDate}
            required/>
             </Form.Group>
             )}
             <br/>
             {stayDetails && (
            <Form.Group >
            <Form.Label>
        <h5>  Check Out Date: </h5>
          </Form.Label>
            <Form.Control 
            type="text"
            placeholder={stayDetails.checkOutDate}
            required/>
             </Form.Group>
             )}
             <br/>
             <Row className="mb-3">
             {stayDetails && (
             <Form.Group as={Col}>
             <Form.Label>
        <h5>  Booked Room: </h5>
          </Form.Label>
             <Form.Control 
            type="text"
            placeholder={stayDetails.selectroom}
            required/>
        </Form.Group>
        )}
        {stayDetails && (
        <Form.Group as={Col}>
        <Form.Label>
        <h5>  Room Price: </h5>
          </Form.Label>
        <Form.Control 
            type="text"
            placeholder={stayDetails.selectprice}
            required/>
        </Form.Group>
        )}
        </Row>
        <br/>
             <Row className="mb-3">
             {stayDetails && (
             <Form.Group as={Col}>
             <Form.Label>
        <h5>  Guests: Chidren </h5>
          </Form.Label>
             <Form.Control 
            type="text"
            placeholder={stayDetails.children} 
            required/>
        </Form.Group>
        )}
        {stayDetails && (
        <Form.Group as={Col}>
        <Form.Label>
        <h5>  Guests: Adults </h5>
          </Form.Label>
        <Form.Control 
            type="text"
            placeholder={stayDetails.adults}
            required/>
        </Form.Group>
         )}
        </Row>
        <Button variant="primary" onClick={handleEdit}>
        <i className="fas fa-edit"></i> Edit
            </Button>{' '}
        <Button variant="primary" onClick={handleRemove}>
            <i className="fas fa-trash-alt"></i> Remove
            </Button>
            <br/>
           </section>
           <br/>
      <Card className="text-center">
      </Card>
      <br/>
      </div>
      </div>
      </div>
      </section>
      <br/>
      </Card>
      )}
      </section>
      </div>
    
    
      );
    }
  export default Guestdetails;
        

  
  

    
  


  