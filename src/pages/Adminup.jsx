import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigate from "../components/Navigate";
import CardImgOverlay from 'react-bootstrap/esm/CardImgOverlay';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from 'axios';
import Toast from 'react-bootstrap/Toast';
import { useNavigate } from 'react-router-dom';


function Adminup() {
  
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
    
  const [id, setId] = useState('');
  const [price1, setPrice1] = useState('');
  const [price2, setPrice2] = useState('');
  const [price3, setPrice3] = useState('');
  const [price4, setPrice4] = useState('');
  const [price5, setPrice5] = useState('');
  const [price6, setPrice6] = useState('');
  const [singleroomimage, setSingleroomimage]= useState('');
  const [doubleroomimage, setDoubleroomimage] = useState('');
  const [familyroomimage, setFamilyroomimage] = useState('');
  const [executiveroomimage, setExecutiveroomimage]= useState('');
  const [vipsuiteroomimage, setVipsuiteroomimage] = useState('');
  const [superiorroomimage, setSuperiorroomimage] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [price, setPrice] = useState('');
  const [title,setTitle]=useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [offers, setOffers] = useState([]);
  const [offer,setOffer] =useState([]);
  const [offer3,setOffer3] =useState([]);
  const [offer4,setOffer4] =useState([]);
  const [roomDetails, setRoomDetails] = useState([]);
  const [response,setResponse] = useState('');
  const navigate = useNavigate();
    

    const handleOffersChange = (e) => {
      const offersString = e.target.value; // Get the input value as a string
      const offersArray = offersString.split(','); // Split the string by commas to create an array
      setOffers(offersArray);
    };
    // Function to handle removing an offer from the state
    
    const handleOfferChange = (e) => {
      const offerString = e.target.value; // Get the input value as a string
      const offerArray = offerString.split(','); // Split the string by commas to create an array
      setOffer(offerArray);
    };

    const handleOffer3Change = (e) => {
      const offer3String = e.target.value; // Get the input value as a string
      const offer3Array = offer3String.split(','); // Split the string by commas to create an array
      setOffer3(offer3Array);
    };
    const handleOffer4Change = (e) => {
      const offer4String = e.target.value; // Get the input value as a string
      const offer4Array = offer4String.split(','); // Split the string by commas to create an array
      setOffer4(offer4Array);
    };


        const sendToServer = () => {
        axios.post('http://localhost:5000/post-details', {title,
        imageUrl,
        offers,
        offer,
        offer3,
        offer4,
        price})

        .then((res) => {
        const newRoom = { title, 
          imageUrl, 
          offers, 
          offer, 
          offer3, 
          offer4, 
          price };
        setRoomDetails([...roomDetails, newRoom]);
      })
        .catch(() => setResponse('Error sending to server'));

        navigate('/PriceDetails', {
          state: {
              title,
              imageUrl,
              offers,
              offer,
              offer3,
              offer4,
              price
          }
      });
    };

     const updatePrice1 = () => {
    if (id && price1) {
      axios.put(`http://localhost:5000/update-message/${id}`, {  price1 })
        .then(response => {
          console.log('Updated price1:', response.data);
          setToastMessage('Updated Single Room Price successfully.');
        setShowToast(true);
        })
        .catch(error => {
          console.error('Error updating price1 on server:', error);
        });
    } else {
      console.warn('Please provide ID and price1.');
    }
  };

  const updatePrice2 = () => {
    if (id && price2) {
      axios.put(`http://localhost:5000/update-message/${id}`, {  price2 })
        .then(response => {
          console.log('Updated price2:', response.data);
          setToastMessage('Updated Double Room Price successfully.');
        setShowToast(true);
        })
        .catch(error => {
          console.error('Error updating price2 on server:', error);
        });
    } else {
      console.warn('Please provide ID and price2.');
    }
  };

  const updatePrice3 = () => {
    if (id && price3) {
      axios.put(`http://localhost:5000/update-message/${id}`, {  price3 })
        .then(response => {
          console.log('Updated price3:', response.data);
          setToastMessage('Updated Family Room Price successfully.');
        setShowToast(true);
        })
        .catch(error => {
          console.error('Error updating price3 on server:', error);
        });
    } else {
      console.warn('Please provide ID and price3.');
    }
  };

  const updatePrice4 = () => {
    if (id && price4) {
      axios.put(`http://localhost:5000/update-message/${id}`, {  price4 })
        .then(response => {
          console.log('Updated price4:', response.data);
          setToastMessage('Updated Executive Room Price successfully.');
        setShowToast(true);
        })
        .catch(error => {
          console.error('Error updating price4 on server:', error);
        });
    } else {
      console.warn('Please provide ID and price4.');
    }
  };
  const updatePrice5 = () => {
    if (id && price5) {
      axios.put(`http://localhost:5000/update-message/${id}`, {  price5 })
        .then(response => {
          console.log('Updated price5:', response.data);
          setToastMessage('Updated Vip Suite Room Price successfully.');
        setShowToast(true);
        })
        .catch(error => {
          console.error('Error updating price5 on server:', error);
        });
    } else {
      console.warn('Please provide ID and price5.');
    }
  };
  const updatePrice6 = () => {
    if (id && price6) {
      axios.put(`http://localhost:5000/update-message/${id}`, {  price6 })
        .then(response => {
          console.log('Updated price6:', response.data);
          setToastMessage('Updated Superior Room Price successfully.');
        setShowToast(true);
        })
        .catch(error => {
          console.error('Error updating price6 on server:', error);
        });
    } else {
      console.warn('Please provide ID and price6.');
    }
  };



  const updateImage1 = () => {
    if (id && singleroomimage) {
      axios.put(`http://localhost:5000/update-message/${id}`, {  singleroomimage })
        .then(response => {
          console.log('Updated singleroomimage:', response.data);
          setToastMessage('Updated Single Room Image successfully.');
        setShowToast(true);
        })
        .catch(error => {
          console.error('Error updating singleroomimage on server:', error);
        });
    } else {
      console.warn('Please provide ID and singleroomimage.');
    }
  };
     
const updateImage2 = () => {
    if (id && doubleroomimage) {
      axios.put(`http://localhost:5000/update-message/${id}`, {  doubleroomimage })
        .then(response => {

          console.log('Updated doubleroomimage:', response.data);
          
          setToastMessage('Updated double room image successfully.');
        setShowToast(true);
        })
        .catch(error => {
          console.error('Error updating doubleroomimage on server:', error);
        });
    } else {
      console.warn('Please provide ID and doubleroomimage.');
    }
  };
     
  const updateImage3 = () => {
    if (id && familyroomimage) {
      axios.put(`http://localhost:5000/update-message/${id}`, {  familyroomimage })
        .then(response => {
          console.log('Updated familyroomimage:', response.data);
          setToastMessage('Updated Family Room Image successfully.');
        setShowToast(true);
        })
        .catch(error => {
          console.error('Error updating familyroomimage on server:', error);
        });
    } else {
      console.warn('Please provide ID and familyroomimage.');
    }
  };
  const updateImage4 = () => {
    if (id && executiveroomimage) {
      axios.put(`http://localhost:5000/update-message/${id}`, {  executiveroomimage })
        .then(response => {
          console.log('Updated executiveroomimage:', response.data);
          setToastMessage('Updated Executive Room Image successfully.');
        setShowToast(true);
        })
        .catch(error => {
          console.error('Error updating executiveroomimage on server:', error);
        });
    } else {
      console.warn('Please provide ID and executiveroomimage.');
    }
  };

  const updateImage5 = () => {
    if (id && vipsuiteroomimage) {
      axios.put(`http://localhost:5000/update-message/${id}`, {  vipsuiteroomimage })
        .then(response => {
          console.log('Updated vipsuiteroomimage:', response.data);
          setToastMessage('Updated Vip Suite Room Image successfully.');
        setShowToast(true);
        })
        .catch(error => {
          console.error('Error updating vipsuiteroomimage on server:', error);
        });
    } else {
      console.warn('Please provide ID and vipsuiteroomimage.');
    }
  };

  const updateImage6 = () => {
    if (id && superiorroomimage) {
      axios.put(`http://localhost:5000/update-message/${id}`, {  superiorroomimage })
        .then(response => {
          console.log('Updated superiorroomimage:', response.data);
          setToastMessage('Updated Superior Room Image successfully.');
          setShowToast(true);
        })
        .catch(error => {
          console.error('Error updating superiorroomimage on server:', error);
        });
    } else {
      console.warn('Please provide ID and superiorroomimage.');
    }
  };
  


  
  

return (
        <div>
        <header>
        <Navigate></Navigate>
        </header>
      <section class="heros-section">
       <CardGroup>
        <Card activeIndex={index} onSelect={handleSelect}>
        <Card.Img src= "https://livedemo00.template-help.com/wt_prod-22403/images/bg-breadcrumbs.jpg">
        </Card.Img>
        </Card>
        </CardGroup>
        </section>
        <br/> 

        <section id="home" className="reg-section">
          <Card activeIndex={index} onSelect={handleSelect}>
          <section class="reg-section">
          <CardGroup>
          <Card.Img
          className ='d-block w-80'
  src= "https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/gallery/images/CGC-Restaurant_Food_Noodles_Noodles%202_640x400.jpg"
        alt=""/>
<CardImgOverlay>
<br/>
<h2>Update Booking Details</h2>
        <Form>
        <Row className="align-items-center">
          <Col sm={3} className="my-1">
            <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
              Enter ID
            </Form.Label>
            <Form.Control placeholder="Enter ID" value={id} onChange={e => setId(e.target.value)}/>
         </Col> 
         <Row>
         <h2>Update pricing</h2>
         <Col sm={4} className="my-1">
               <InputGroup  className="my-1">
        <Form.Control
          placeholder="Enter Single Room Price"
          aria-label="Recipient's username with two button addons" value={price1} onChange={e => setPrice1(e.target.value)}/>
        <Button variant="outline-secondary" type="button" onClick={updatePrice1}>Update Price 1</Button>
        </InputGroup>
        </Col>

         <Col sm={4} className="my-1">
               <InputGroup  className="my-1">
        <Form.Control
          placeholder="Enter Double Room Price"
          aria-label="Recipient's username with two button addons" value={price2} onChange={e => setPrice2(e.target.value)}/>
        <Button variant="outline-secondary" type="button" onClick={updatePrice2}>Update Price 2</Button>
        </InputGroup>
      </Col>

      <Col sm={4} className="my-1">
               <InputGroup  className="my-1">
        <Form.Control
          placeholder="Enter Family Room Price"
          aria-label="Recipient's username with two button addons" value={price3} onChange={e => setPrice3(e.target.value)}/>
        <Button variant="outline-secondary" type="button" onClick={updatePrice3}>Update Price 3</Button>
        
      </InputGroup>
      </Col>
</Row>


<Row >
  <Col sm={4} className="my-1">
               <InputGroup  className="my-1">
        <Form.Control
          placeholder="Enter Executive Room Price"
          aria-label="Recipient's username with two button addons" value={price4} onChange={e => setPrice4(e.target.value)}/>
        <Button variant="outline-secondary" type="button" onClick={updatePrice4}>Update Price 4</Button>
                </InputGroup>
  </Col>

      <Col sm={4} className="my-1">
               <InputGroup  className="my-1">
        <Form.Control
          placeholder="Enter Vip Suite Room Price"
          aria-label="Recipient's username with two button addons" value={price5} onChange={e => setPrice5(e.target.value)}/>
        <Button variant="outline-secondary" type="button" onClick={updatePrice5}>Update Price 5</Button>
                </InputGroup>
      </Col>

 <Col sm={4} className="my-1">
               <InputGroup  className="my-1">
        <Form.Control
          placeholder="Enter Superior Room Price"
          aria-label="Recipient's username with two button addons" value={price6} onChange={e => setPrice6(e.target.value)}/>
        <Button variant="outline-secondary" type="button" onClick={updatePrice6}>Update Price 6</Button>
               </InputGroup>
      </Col>

</Row>
</Row>
<Row className="align-items-center">
  <div className= "align-center">
  <h2>Update Images</h2>
           </div>
         <Row>
  <Col sm={4} className="my-1">
               <InputGroup  className="my-1">
        <Form.Control
          placeholder="Enter Single Room Image"
          aria-label="Recipient's username with two button addons" value={singleroomimage} onChange={e => setSingleroomimage(e.target.value)}/>
        <Button variant="outline-secondary" type="button" onClick={updateImage1}>Update Single Room Image</Button>
               </InputGroup>
  </Col>

 <Col sm={4} className="my-1">
               <InputGroup  className="my-1">
        <Form.Control
          placeholder="Enter Double Room Image"
          aria-label="Recipient's username with two button addons" value={doubleroomimage} onChange={e => setDoubleroomimage(e.target.value)}/>
        <Button variant="outline-secondary" type="button" onClick={updateImage2}>Update Double Room Image</Button>
               </InputGroup>
      </Col>

      <Col sm={4} className="my-1">
               <InputGroup  className="my-1">
        <Form.Control
          placeholder="Enter Family Room Image"
          aria-label="Recipient's username with two button addons" value={familyroomimage} onChange={e => setFamilyroomimage(e.target.value)}/>
        <Button variant="outline-secondary" type="button" onClick={updateImage3}>Update Family Room Image</Button>
        </InputGroup>
      </Col>
      

      <Col sm={4} className="my-1">
               <InputGroup  className="my-1">
        <Form.Control
          placeholder="Enter Executive Room Image"
          aria-label="Recipient's username with two button addons" value={executiveroomimage} onChange={e => setExecutiveroomimage(e.target.value)}/>
        <Button variant="outline-secondary" type="button" onClick={updateImage4}>Update Executive Room Image</Button>
        </InputGroup>
      </Col>
      <Col sm={4} className="my-1">
               <InputGroup  className="my-1">
        <Form.Control
          placeholder="Enter Vip Suite Room Image"
          aria-label="Recipient's username with two button addons" value={vipsuiteroomimage} onChange={e => setVipsuiteroomimage(e.target.value)}/>
        <Button variant="outline-secondary" type="button" onClick={updateImage5}>Update Vip Suite Room Image</Button>
        </InputGroup>
      </Col>

      <Col sm={4} className="my-1">
              <InputGroup  className="my-1">
        <Form.Control
          placeholder="Enter Superior Room Image"
          aria-label="Recipient's username with two button addons" value={superiorroomimage} onChange={e => setSuperiorroomimage(e.target.value)}/>
        <Button variant="outline-secondary" type="button" onClick={updateImage6}>Update Superior Room Image</Button>
               </InputGroup>
      </Col>
      </Row>
      
      <Col md={5}>
      <Toast show={showToast} onClose={() => setShowToast(false)}>
      <Toast.Header>
      <strong className="me-auto"><h6>Success </h6></strong>
      </Toast.Header>
      <Toast.Body className={showToast ? 'toast-show-animation' : 'toast-hide-animation'}>{toastMessage}</Toast.Body>
     </Toast>
     </Col>
     </Row>
</Form>
</CardImgOverlay>
</CardGroup>
</section>
</Card>

<Card activeIndex={index} onSelect={handleSelect}>
          <section class="reg-section">
          <CardGroup>
      <Card.Img
          className ='d-block w-80'
  src= "https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/gallery/images/CGC-Restaurant_Food_Noodles_Noodles%202_640x400.jpg"
        alt=""/>
<CardImgOverlay>
<br/>
    <h2>Add New Room </h2>
  <div class="col-sm-5  offset-xl-3">
  <br/>
    <div class="booking-form">
            <Form> 
          <Form.Group>
        <Form.Label>
        <h5>  Room  </h5>
          </Form.Label>  
          <Form.Control
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required/>
           </Form.Group>

         <Form.Group>
        <Form.Label>
         <h5> Image </h5>
        </Form.Label>
        <Form.Control
         type="text"
         placeholder="Enter Image URL"
         value={imageUrl}
         onChange={e => setImageUrl(e.target.value)}/>
        </Form.Group>

          <Row className="mb-3">
          <Form.Group as={Col}>
          <Form.Label>
          <h5>  Offer 1</h5>
          </Form.Label>
          <Form.Control
          type="text"
          value={offers.join(',')}
          onChange={handleOffersChange}
          required/>
          </Form.Group> 

          <Form.Group as={Col}>
          <Form.Label>
          <h5>  Offer 2 </h5>
          </Form.Label>
          <Form.Control
          type="text"
          value={offer.join(',')}
          onChange={handleOfferChange}
          required/>
          </Form.Group> 

          <Form.Group as={Col}>
          <Form.Label>
          <h5>  Offer 3 </h5>
          </Form.Label>
          <Form.Control
          type="text"
          value={offer3.join(',')}
          onChange={handleOffer3Change}
          required/>
          </Form.Group> 


        <Form.Group as={Col}>
          <Form.Label>
          <h5>  Offer 4 </h5>
          </Form.Label>
          <Form.Control
  type="text"
  value={offer4.join(',')}
  onChange={handleOffer4Change}
  required
/>

        </Form.Group> 
</Row>
           <Form.Group>
            <Form.Label>
            <h5>  Price </h5>
            </Form.Label>
            <Form.Control 
            type="text"
            
            value={price}
            onChange={e => setPrice(e.target.value)}
             required/>
        </Form.Group>
        <br/>
        <Form.Group>
        <Button  onClick = {sendToServer}><h3> Add New Room  </h3></Button>

        <div>{response}</div>
        </Form.Group>
        <br/>
        </Form>
        </div>
        </div>
        {roomDetails.map((room, index) => (
        <div key={index}>
          <h3>{room.title}</h3>
          <h3>{room.imageUrl}</h3>
          <h3>{room.offers}</h3>
          <h3>{room.offer}</h3>
          <h3>{room.offer3}</h3>
          <h3>{room.offer4}</h3>
          {/* Display other room details */}
        </div>
      ))}
       </CardImgOverlay>
       </CardGroup>
       </section>

</Card>

</section>
</div>
  
  );

}
export default Adminup;
  