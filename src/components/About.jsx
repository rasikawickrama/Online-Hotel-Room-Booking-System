import { useState } from 'react';
import './Appa.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigate from "./Navigate";
import Abservice from './Abservice';
import Team from   './Teams';
import Abhistory from './Abhistory'

function About() {
  
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
    
  return (
    
    
      <div className="App">
      <header id='header' className='header.block'>
      <Navigate></Navigate>
      </header>
      <br/>
      <br/>
      
    <CardGroup>
      <Card activeIndex={index} onSelect={handleSelect}>
      <Card.Img src= "https://livedemo00.template-help.com/wt_prod-22403/images/bg-breadcrumbs.jpg">
      </Card.Img>
      </Card>
      </CardGroup>
      <br/>
    
      <section class="hero-section">
        <div class="container">
        <div class="row">
        <div class="col-lg-6">
        <div class="hero-text">
    <div class="text-center">
    <img class="img-fluid" src="https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/about_us/434x437.jpg" 
    alt="" width="500" height="100" align="center"></img>
    </div>
    </div>
    </div>
    
    <div class="col-xl-4 col-lg-5 offset-xl-2 offset-lg-1">
      <h1> We are Jetwin Red</h1>
      <img class="img-fluid" src="https://livedemo00.template-help.com/wt_prod-22403/images/title-decorative-84x8.png" alt="" width="84" height="8" align="center"></img>
      <p> Rooted in the essence of who we are, we embarked on a phenomenal journey, drawing inspiration from the exquisite spice that embodies our heritage: Ceylon Cinnamon. A delightful flavour and comforting aroma enchant this precious ingredient, 
        and we intend to infuse a rejuvenating spirit into every experience the world discovers with us.
      Today, we present a modern Sri Lanka that embraces a contemporary mindset and a 
      welcoming ambience with each of our hotels and resorts. As a collective, they positioned us on the global stage, transcending boundaries and redefining Sri Lankan hospitality.

      </p>
    </div>
    </div>
    </div>
  </section>
  <Abservice></Abservice>
  <Team></Team>
  <Abhistory></Abhistory>
  </div>
  
    );
  }
export default About;
    