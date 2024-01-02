import Navigate from "../components/Navigate";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import CardImgOverlay from 'react-bootstrap/esm/CardImgOverlay';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import InputGroup from 'react-bootstrap/InputGroup'
import { useNavigate } from 'react-router-dom';



const roomPrices = {
  'Single Room': 'Rs.16,023.00', // Set the price for each room type
  'Double Room': 'Rs.32,047.00',
  'Family Room': 'Rs.37,608.00',
  'Executive Room':'Rs.39,568.00',
  'Vip Suite Room': 'Rs.40,548.00',
  'Superior Room': "Rs.41,529.00"
  
};


function Booked() {

    const [index, setIndex] = useState(0);

    
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
    
    const [count, setCount] = useState(0);
    const [count1, setCounts] = useState(0);
    const [selectroom, setRoom] = useState('');
    const [selectprice,setPrice] =useState('')
    const [children,setChildren]=useState('')
    const [adults, setAdults] = useState('');
    const [checkOutDate,setCheckOutDate]=useState('')
    const [checkInDate, setCheckInDate] = useState('');
    const [response,setResponse] = useState('');
    const navigate = useNavigate();

    const handleRoomSelect = (e) => {
      const room = e.target.value;
      setRoom(room);

      const price = roomPrices[room];
    if (price) {
      setPrice(price);
    } else {
      setPrice('');
    }
  };


    const sendToServer = () => {
        axios.post('http://localhost:5000/post-bookings', {selectroom,
        selectprice,
        children,
        adults,
        checkInDate,
        checkOutDate})
        
        .then(res => setResponse(res.data.message))
        
        .catch(() => setResponse('Error sending to server'));
        navigate('/payment', {
          state: {
              selectroom,
              selectprice,
              children,
              adults,
              checkInDate,
              checkOutDate
          }
      });
    };

  return (
        <div>
            <header>
          <Navigate></Navigate>
          </header>
          
          <section id="home" className="reg-section">
          <Card activeIndex={index} onSelect={handleSelect}>
          <section class="reg-section">

          <CardGroup>
          <Card.Img
          className ='d-block w-80'
  src= "https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/gallery/images/CGC-Restaurant_Food_Noodles_Noodles%202_640x400.jpg"
        alt=""
          />
<CardImgOverlay>
<div class="text-center">

<br/>
<h2>Book a Room</h2>
<br/>
          <Form>
          <Row className="mb-3">
          <Form.Group as={Col}>
          <Form.Label>
       <h5>   check In: </h5>
          </Form.Label>  
          <Form.Control
           placeholder='Check In Date'
           type="date"
           value={checkInDate}
           onChange={e => setCheckInDate(e.target.value)}
           required
           style={{ WebkitAppearance: 'textfield' }}     />
        </Form.Group>
           
           
        <Form.Group as={Col}>
        <Form.Label>
        <h5>  check Out: </h5>
          </Form.Label>
          <Form.Control
          type="date"
          name="dob"
          value={checkOutDate}
          onChange={e => setCheckOutDate(e.target.value)}
           required/>
        </Form.Group> 
    
        <Form.Group as={Col}>
        <Form.Label>
         <h5>  Select Room: </h5>
        </Form.Label>
        <Form.Select aria-label="Default select example"
        type="text"
        value={selectroom}
        onChange={handleRoomSelect}
        required>
      <option>Open this select menu</option>
      <option> Single  Room</option>
      <option >Double  Room</option>
      <option>Family  Room</option>
      <option >Executive Room</option>
      <option >Vip Suite Room</option>
      <option > Superior Room</option>
    </Form.Select>
    </Form.Group>
    <Form.Group as={Col}>
    <Form.Label>
    <h5>  Select Price: </h5>
    </Form.Label>
    <Form.Control 
    type="text"
    value={selectprice}
    onChange={e => setPrice(e.target.value)}
    required>
    </Form.Control>
    </Form.Group>
    </Row>
            <Row className="mb-2">
            <Form.Group as={Col}>
            <Form.Label>
            <h5>   Children: {count}  </h5> 
          </Form.Label>
          <InputGroup className="mb-3">
          <Button onClick={() => { setCount(count + 1); setChildren(count + 1); }}>
          <h3> + </h3>
          </Button>
          <br/>
          <br/>
          <Button onClick={() => { setCount(count - 1); setChildren(count - 1); }}>
          <h3> - </h3>
          </Button> 
          </InputGroup>    
          </Form.Group>
          
        <Form.Group as={Col}>
        <Form.Label> 
      <h5>   Adults: {count1} </h5>
          </Form.Label>
        <Form.Group>
        <InputGroup className="mb-3">
        <Button onClick={() => { setCounts(count1 + 1); setAdults(count1 + 1); }}>
        <h3> + </h3>
        </Button>
        <Button onClick={() => { setCounts(count1 - 1); setAdults(count1 - 1); }}>
        <h3> - </h3>
        </Button> 
        </InputGroup> 
        <br />
        </Form.Group>
        <br />
        </Form.Group>
        </Row>
        <br/>
        <Button onClick = {sendToServer} ><h4>View Your booking Details & Payment</h4></Button>
        <div>{response}</div>
        </Form>
        <br/>
        </div>
       </CardImgOverlay>
          </CardGroup>
          </section>
          </Card>
</section>

</div>
     );
    };
    
    export default Booked;