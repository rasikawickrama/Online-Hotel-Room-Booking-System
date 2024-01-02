import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import GroupIcon from '@mui/icons-material/Group';
import WcIcon from '@mui/icons-material/Wc';
import PaymentIcon from '@mui/icons-material/Payment';

function Abservice() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <section id="home" className="hero-block">
    <Carousel activeIndex={index} onSelect={handleSelect}>
    
     
     <section class="hero-section">
        <div class="container">
            <div class="row">
        <div class="col-lg-7">
     </div>
     </div>
     </div>
     </section>
<section id="services" className=" services-block">
<CardGroup>
      <Card>
      
      <div class="text-center">
      <div className="HomeIcon"> 
        < ThumbUpOffAltIcon >
        </ThumbUpOffAltIcon>
        </div>    
        </div>
        
        <Card.Body>
        <Card.Title>Stylish Accommodation</Card.Title>
          <Card.Text>Allow our carefully curated collection of local attractions and experiences
            to help you cutomize the perfect vacation.
          </Card.Text>
          </Card.Body>
        </Card>

      <Card>
      <div class="text-center">
      <div className="HomeIcon"> 
      < GroupIcon >
       </GroupIcon>
       </div>
       </div>
        <Card.Body>
          <Card.Title>Qualified Employess </Card.Title>
          <Card.Text>
           Our hotel have Qualified employess. They do works carefully for customers satisfied.
          </Card.Text>
          </Card.Body>
          </Card>
      
      <Card>
      <div class="text-center">
      <div className="HomeIcon"> 
      <WcIcon></WcIcon>
      </div>
      </div>
        <Card.Body>
          <Card.Title>Happy Clients</Card.Title>
          <Card.Text>
          Our Clients are very happy after coming our Jetwin Red.
          </Card.Text>
        </Card.Body>
        
      </Card>
      <Card>
      <div class="text-center">
      <div className="HomeIcon"> 
      <PaymentIcon></PaymentIcon>
      </div>
      </div>
        <Card.Body>
          <Card.Title>Payment Methods</Card.Title>
          <Card.Text>
          We have online payment Method. you can book a room and pay that price using your card.
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
    </section>
</Carousel>
</section>
);
}
export default Abservice;