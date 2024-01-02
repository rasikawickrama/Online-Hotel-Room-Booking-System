import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Facebook from '@mui/icons-material/Facebook';
import Twitter from '@mui/icons-material/Twitter';
import Instagram from '@mui/icons-material/Instagram';
import Google from '@mui/icons-material/Google';
import Linked from '@mui/icons-material/LinkedIn';
import axios from 'axios';
import CardImgOverlay from 'react-bootstrap/esm/CardImgOverlay';

function Contactdetails() {
  
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
    
    const[message, setMessage] = useState('');
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[contactnumber,setContactnumber]=useState('')
    const [response,setResponse] = useState('');

    const sendToServer = () => {
        axios.post('http://localhost:5000/post-message', {name,email,contactnumber,message})
        .then(res => setResponse(res.data.message))
        .catch(() => setResponse('Error sending to server'));
    };
    
    return (
    <div>
        <section id="home" className="con-section">
         <Card activeIndex={index} onSelect={handleSelect}>
        <section class="contact-section">
          <div class="container">
          <div class="row">
          <div class="col-lg-6">
          <div class="hero-text">
      <div class="text-center">
      <h1> Let Us Help You!</h1>
      <img class="img-fluid" src="https://livedemo00.template-help.com/wt_prod-22403/images/title-decorative-84x8.png" alt="" width="84" height="8" align="center"></img>
      </div>
      <p> If you wish to get in touch with us for bookings, queries, comments or anything else you may need, please feel free to contact us via any of the following ways:</p>
      <div class="text-center">
    <div class="booking-form">
            <Form> 
          <Form.Group>
        <Form.Label>
        <h5>  Name </h5>
        </Form.Label>  
          <Form.Control
          type="text"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
          required/>
           </Form.Group>

         <Form.Group>
        <Form.Label>
         <h5> E mail </h5>
          </Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
         required />
          </Form.Group>

          <Form.Group>
          <Form.Label>
          <h5>  Contact Number </h5>
          </Form.Label>
          <Form.Control
          type="text"
          name="contact number"
          value={contactnumber}
          onChange={e => setContactnumber(e.target.value)}
          required/>
        </Form.Group> 

        <Form.Group>
            <Form.Label>
            <h5>  Message </h5>
            </Form.Label>
            <Form.Control 
            type="text"
            value={message}
            onChange={e => setMessage(e.target.value)}
             required/>
        </Form.Group>
        
        <br/>
        <Form.Group>
        <Button  onClick = {sendToServer}><h3> Send Message </h3></Button>
        <div>{response}</div>
        </Form.Group>
        <br/>
        </Form>
        </div>
        </div>
        </div>
        </div>
     <div class="col-xl-4 col-lg-5 offset-xl-2 offset-lg-1">
      <Card className="text-center">
      <Card.Header><h2>Corporate Contact</h2>
      <h6>Head Office Address</h6> 
      </Card.Header>
        <Card.Body>
        <Card.Text>
          <h6> Jetwin Red Hotel Management Limited </h6>
          <h6>   No. 05, Justice Akbar Mawatha.</h6>
          <h6>Colombo 02,</h6>
          <h6>Sri Lanka.</h6>
          <h6>+94 - 11 - 2161161 </h6>
          <h6>+94 - 11 - 2320862 </h6>
        </Card.Text>
        </Card.Body>
      <Card.Header>
                   <h2>Jetwin Red Hotels & Resorts - City Sector</h2>
                   <h6>Contact Center Address</h6>             
      </Card.Header>
      <Card.Body>
        <Card.Text>
        <h6> 117, Sir Chittampalam A. Gardiner Mawatha, </h6>
        <h6>   Colombo 02,</h6>
        <h6>Sri Lanka</h6>
        <h6>T: +94 11 2 161 161 Ext: 1</h6>
        </Card.Text>
      </Card.Body>
      <Card.Header><h2>E-Mail</h2></Card.Header>
      <Card.Body>
      <Card.Text>
      <h6>
      <a href="mailto:jetwinred@demolink.org">mail@demolink.org</a>
    </h6>
    </Card.Text>
      </Card.Body>
      <Card.Header><h2>Opening Areas</h2></Card.Header>
      <Card.Body>
        <Card.Text>
        <h6>  Mon–Fri: 9:00 am–6:00 pm </h6>
        <h6> Sat–Sun: 11:00 am–4:00  pm </h6>
        </Card.Text>
     </Card.Body>
      <Card.Header><h2>Follow Us</h2></Card.Header>
      <Card.Body>
        <Card.Text>
        <h6>  
          <a href="https://www.facebook.com/example" target="_blank" rel="noopener noreferrer">
        <Facebook/> </a></h6>
      <h6>
      <a href="https://www.twitter.com/example" target="_blank" rel="noopener noreferrer">
        <Twitter/> </a></h6>
      <h6>
      <a href="https://www.instagram.com/example" target="_blank" rel="noopener noreferrer">
        <Instagram/> </a></h6>
      <h6> 
      <a href=" http://localhost:3000" target="_blank" rel="noopener noreferrer">
        <Google/> </a></h6>
      <h6> 
      <a href="https://www.linkedin.com/company/example" target="_blank" rel="noopener noreferrer">
        <Linked/>  </a></h6>
        </Card.Text>
        </Card.Body>
    </Card>
      </div>
      </div>
      </div>
     </section>
    </Card>
     <br/>
    <Card>
     <Card.Img src= "https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/page_bottom/1140x710.jpg"/>
     <CardImgOverlay>
        
        <div class="text-center">
          <br/>
          <br/>
        <h4> Get in touch!  </h4>
</div>
</CardImgOverlay> 
      
      </Card>
    </section>
    </div>
    
    
      );
    }
  export default Contactdetails;
        