import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Wifi from '@mui/icons-material/Wifi';
import Pool from '@mui/icons-material/Pool';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import CarRentalIcon from '@mui/icons-material/CarRental';

function Homeservice() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <section id="home" className="hero-block">
    <Carousel activeIndex={index} onSelect={handleSelect}>
     <Carousel.Item></Carousel.Item>
     
     <section class="hero-section">
        <div class="container">
            <div class="row">
        <div class="col-lg-7">
                    <div class="hero-text"></div>
<h1>Our Services</h1>
<div class="text-center">
<img class="img-fluid" src="https://livedemo00.template-help.com/wt_prod-22403/images/title-decorative-84x8.png" alt="" width="84" height="8" align="center"></img>
</div>         
</div>
</div>
</div>
</section>
<section id="services" className=" services-block">
<CardGroup>
      <Card>
      <div class="text-center">
      <div className="HomeIcon"> 
        <Wifi >
        </Wifi>
        </div>    
        </div>
        <Card.Body>
          <Card.Title>Wifi</Card.Title>
          <Card.Text> Our free Wi-Fi internet service is available 24-hours in lobby, meeting room,
             facilities and guest rooms to hel you stay connected wherever you are.
          </Card.Text>
        </Card.Body>
        </Card>

      <Card>
      <div class="text-center">
      <div className="HomeIcon"> 
       <Pool >
       </Pool>
       </div>
       </div>
      <Card.Body>
          <Card.Title>Swimming Pool</Card.Title>
          <Card.Text>
          The recreation area of our hotel includes a customly designed swimming pool under 
          a glass vault and a bath VIP-complex for six people.
          </Card.Text>
        </Card.Body>
       </Card>
      
      <Card>
      <div class="text-center">
      <div className="HomeIcon"> 
      <RestaurantIcon>
      </RestaurantIcon>
      </div>
      </div>
        <Card.Body>
          <Card.Title>Resturants</Card.Title>
          <Card.Text>
          The restaurants of our hotel will gratify the taste of the most exacting guests. Here, you can taste some culinary masterpieces by our chef.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card>
      <div class="text-center">
      <div className="HomeIcon"> 
      <CarRentalIcon>
      </CarRentalIcon>
      </div>
      </div>
        <Card.Body>
          <Card.Title>Car Rentals</Card.Title>
          <Card.Text>
          We work with the best car rental companies in United States of America, 
          bringing you discount car rental rates and a wide variety of car rental classes.
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
    </section>
</Carousel>
</section>
);
}
export default Homeservice;