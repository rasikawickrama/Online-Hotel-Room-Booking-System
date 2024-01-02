import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';



function Homesecone() {
  const [index, setIndex] = useState(0);
  
const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  

  
  
  

  return (
    <section id="home" className="hero-block">
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
       <img
          className ='d-block w-100'
          src= "https://livedemo00.template-help.com/wt_prod-22403/images/services-01-654x409.jpg"
          alt ="first slide"/>
        <Carousel.Caption>
        <section class="he-section">
        <div class="container">
            <div class="row">
        <div class="col-lg-6">
        <div class="hero-text">
        <h1>Your Perfect Accommodation</h1>
        <p>Hotel offers comfortable accommodation with a wide variety of rooms, 
          additional services, andamenities available to all our guests.
          We offer the highest level hospitality and great customer service. </p>
        <Button><h3>Learn More</h3></Button>{' '}
        </div>
        </div>
        <div class="col-xl-4 col-lg-5 offset-xl-2 offset-lg-1">
        </div>
        </div>
        </div>
        </section>
        </Carousel.Caption>
        </Carousel.Item>

<Carousel.Item>
      <img className ='d-block w-100'
  src= "https://livedemo00.template-help.com/wt_prod-22403/images/about-us-1-720x459.jpg"
          alt ="first slide"/>
        <Carousel.Caption>
        <section class="he-section">
        <div class="container">
            <div class="row">
        <div class="col-lg-6">
        <div class="hero-text">
        <h1>Diverse Facilities</h1>
       <p>At our hotel, you can always feel comfortable in your room, having the 
        right surroundings to relax and reload as it is utmost important. 
        We offer a wide variety of hotel facilities including including what you require. 
        </p>
        <Button><h3>Learn More</h3></Button>{' '}
        </div>
        </div>
        <div class="col-xl-4 col-lg-5 offset-xl-2 offset-lg-1">
        </div>
        </div>
        </div>
        </section>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
      <img
          className ='d-block w-100'
  src= "https://be.synxis.com/shs-ngbe-image-resizer/images/hotel/42169/images/room/cinnamon_grand_colombo_executive_room_(2).jpg"
          alt ="first slide"
          />
        <Carousel.Caption>
        <section class="he-section">
        <div class="container">
            <div class="row">
        <div class="col-lg-6">
                    <div class="hero-text">
        <h1>150+ Rooms to Choose From</h1>
  <p>Our hotel has a wide variety of greately furnished and fully equipped rooms for every guest.
    Whether you are travelling on busiesss or with family, we have what you need to enjoy your stay.
  </p>
  <Button><h3>Learn More</h3></Button>{' '}
  </div>
  </div>
  <div class="col-xl-4 col-lg-5 offset-xl-2 offset-lg-1">
  </div>
  </div>
  </div>
  </section>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </section>
  );
}

export default Homesecone;