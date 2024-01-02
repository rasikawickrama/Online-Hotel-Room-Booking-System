import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Service() {
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
          <div class="hero-text"></div>
  <h1>Latest News</h1>
  <div class="text-center">
  <img class="img-fluid" src="https://livedemo00.template-help.com/wt_prod-22403/images/title-decorative-84x8.png" alt="" width="84" height="8" align="center"></img>
          </div>         
          </div>
          </div>
          </div>
</section>
<section id="services" className=" services-block">
</section>
</Carousel>
</section>
);
}
export default Service;