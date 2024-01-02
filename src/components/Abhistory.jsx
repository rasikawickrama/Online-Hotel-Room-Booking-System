import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import CardImgOverlay from 'react-bootstrap/esm/CardImgOverlay';




function Abhistory() {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  
  return (
    <section id="home" className="about-block">
    <Card activeIndex={index} onSelect={handleSelect}>
    <Card.Img />
        <Card.Body>
        <section class="hero">
        <div class="container">
        <div class="row">
        <div class="col-lg-6">
        <div class="hero-text">
    
    <h3> Our History </h3>
    <br/>
      <h5> Established in the year 2005</h5>
      <br/>
<h5>With a total 15 properties</h5>
<br/>
<h5>3 hotels in Colombo, Sri Lanka</h5>
<br/>
<h5>8 resorts in the rest of Sri Lanka</h5>
<br/>
<h5>4 resorts in the Maldives</h5>
      
      </div>
      </div>
    <div class="col-xl-4 col-lg-5 offset-xl-2 offset-lg-1">
    <div>
<img class="img-fluid" src="https://livedemo00.template-help.com/wt_prod-22403/images/about-us-2-420x280.jpg" 
    alt="" width="500" height="100" align="center"></img>
    </div>
    <br/>
    <div class="">
<img class="img-fluid" src="https://livedemo00.template-help.com/wt_prod-22403/images/about-us-3-420x280.jpg"
   alt=""  width="500"height="100" align="center"></img>
   </div>
   <br/>
   <div>
<img class="img-fluid" src="https://livedemo00.template-help.com/wt_prod-22403/images/about-us-4-420x280.jpg"
   alt="" width="500" height="100" align="center"></img>
   </div>
   </div>
   </div>
   </div>
  </section>
  </Card.Body>
  </Card>
  <br/>
  <section class="aboutus">
  <Card>
    <CardGroup>
        <Card>
          <Card.Img variant="top" src="https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/page_bottom/1140x710.jpg" className="crop-image" />
          <CardImgOverlay>
        <br/>
        <div class="text-center">
          <br/>
        <h4> Jetwin Red buffet. It was really goood. The service was incredible from "Anuradha". Love the 
          ambience and the vibe while dining . The place looks majestic. Food was really great. Superb for a 
          good dine in. will recommend for other people as well.
         <br/> <br/> - Many Grand moments await  you! </h4>
</div>
</CardImgOverlay> 
         </Card>
         </CardGroup>
        </Card>
       </section>
    </section>
  );
}

export default Abhistory;