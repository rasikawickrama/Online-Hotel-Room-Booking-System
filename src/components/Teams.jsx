import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Figure from 'react-bootstrap/Figure';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Team() {
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
<h2>Our Team</h2>
<div class="text-center">
<img class="img-fluid" src="https://livedemo00.template-help.com/wt_prod-22403/images/title-decorative-84x8.png" 
alt="" width="84" height="8" align="center"></img>
</div>         
</div>
</div>
</div>
</section>
</Carousel>

<CardGroup>
      <Card>
       <Card.Body>
        <Figure>
      <Figure.Image
      src="https://livedemo00.template-help.com/wt_prod-22403/images/team-07-300x300.jpg"
      />
      <Figure.Caption>
      <section class="hero-section">
        <div class="container">
        <div class="row">
        <div class="col-lg-6">
        <div class="hero-text">
        <div class="text-center">
      <h6>
          Sadra Ferguson
      </h6>
      <h5>
         General Manager
      </h5>
      </div>
      </div>
      </div>
      </div>
      </div>
    </section>
      </Figure.Caption>
    </Figure>
    </Card.Body>
    </Card>

      <Card>
      <Card.Body>
        <Figure>
      <Figure.Image
        src="https://livedemo00.template-help.com/wt_prod-22403/images/team-08-300x300.jpg"
      />
      <Figure.Caption>
      <section class="hero-section">
        <div class="container">
        <div class="row">
        <div class="col-lg-6">
        <div class="hero-text">
        <div class ="text-center">
          <h6> Ronald Chen </h6>
          <h5> Assistant Manager </h5>
        </div>
        </div>
        </div>
        </div>
        </div>
        </section>
      </Figure.Caption>
      </Figure>
      </Card.Body>
      </Card>

      <Card>
      <Card.Body>
        <Figure>
      <Figure.Image
      src="https://livedemo00.template-help.com/wt_prod-22403/images/team-09-300x300.jpg"
      />
      <Figure.Caption>
      <section class="hero-section">
        <div class="container">
        <div class="row">
        <div class="col-lg-6">
        <div class="hero-text">
        <div class= "center">
        <h6>
            Frances Watson
        </h6>
        <h5> 
          Front Office Manager
        </h5>
        </div>
        </div>
        </div>
        </div>
        </div>
    </section>
       </Figure.Caption>
       </Figure>
       </Card.Body>
      </Card>

      <Card>
      <Card.Body>
        <Figure>
      <Figure.Image
        
        src="https://livedemo00.template-help.com/wt_prod-22403/images/team-10-300x300.jpg"
      />
      <Figure.Caption>
      <section class="hero-section">
        <div class="container">
        <div class="row">
        <div class="col-lg-6">
        <div class="hero-text">
        <div class="text-center">
        <h6>
         Joe Myers
        </h6>
        <h5>
        Concierge
        </h5>
        </div>
        </div>
        </div>
        </div>
    </div>
    </section>
      </Figure.Caption>
      </Figure>
      </Card.Body>
      </Card>
    </CardGroup>

    <CardGroup>
      <Card>
      <Card.Body>
        <Figure>
      <Figure.Image
        src="https://livedemo00.template-help.com/wt_prod-22403/images/team-12-300x300.jpg"
      />
      <Figure.Caption>
      <section class="hero-section">
        <div class="container">
        <div class="row">
        <div class="col-lg-6">
        <div class="hero-text">
        <div class="text-center">
        <h6>Brenda Lopez</h6>
        <h5>Booking Manager</h5>
        </div>
        </div>
        </div>  
        </div>
        </div>
        </section>
      </Figure.Caption>
      </Figure>
      </Card.Body>
      </Card>
      <Card>
      <Card.Body>
        <Figure>
      <Figure.Image
        src="https://livedemo00.template-help.com/wt_prod-22403/images/team-13-300x300.jpg"/>
      <Figure.Caption>
      <section class="hero-section">
        <div class="container">
        <div class="row">
        <div class="col-lg-6">
        <div class="hero-text">
        <div class ="text=center">
        <h6>Deborah Stewart</h6>
        <h5>Accountant</h5>
        </div>
    </div>
    </div> 
    </div>
    </div>
    </section>
    </Figure.Caption>
    </Figure>
    </Card.Body>
    </Card>

      <Card>
      <Card.Body>
      <Figure>
      <Figure.Image
      src="https://livedemo00.template-help.com/wt_prod-22403/images/team-14-300x300.jpg"
      />
      <Figure.Caption>
      <section class="hero-section">
        <div class="container">
        <div class="row">
        <div class="col-lg-6">
        <div class="hero-text">
        <div class="text-center">
        <h6> Partrick Douglas</h6>
        <h5> Porter</h5>
        </div>
        </div>
        </div> 
        </div>
        </div>
        </section>
        </Figure.Caption>
        </Figure>
        </Card.Body>
        </Card>

        <Card>
        <Card.Body>
        <Figure>
        <Figure.Image
        src="https://livedemo00.template-help.com/wt_prod-22403/images/team-15-300x300.jpg"
      />
      <Figure.Caption>
      <section class="hero-section">
        <div class="container">
        <div class="row">
        <div class="col-lg-6">
        <div class="hero-text">
            <div class="text-center">
        <h6>Sam Marshall </h6>
        <h5> Floor Manager</h5> 
        </div>
        </div>
        </div>
        </div>
        </div>
        </section>
      </Figure.Caption>
      </Figure>
      </Card.Body>
      </Card> 
      </CardGroup>
</section>

);
}
export default Team;