import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import CardImgOverlay from 'react-bootstrap/esm/CardImgOverlay';

function Excursions() {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };

    return (
<div>
<section id="spa" className=" spa-block">
<CardGroup>
      <Card activeIndex={index} onSelect={handleSelect}>
      <Card.Img src= "https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/banners/Gallery-Header-resized-D%20.jpg">
        </Card.Img>
        <br/>
      <CardImgOverlay> 
        <div class="text-center">
        <br/>
        <br/>
        <br/>
        <h1> Gallery </h1>
      <p> We are a lifestyle brand with the main focus on people, loved ones and friends being at the coolest places, enjoying life’s best moments. We call it inspired living! Is there any other way to go?</p>
      </div>
      </CardImgOverlay>  
      </Card>
      </CardGroup>
      </section>
      <br/>
    
    <section id="spa" className=" gallery-block">
    <h2> Excursions & Activities </h2>
         <CardGroup>
         <Card activeIndex={index} onSelect={handleSelect}>
          <Card.Body>
  <Card.Img variant="top" src="https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/gallery/images/CGC-Excursions_Crescat_640x400.jpg" />
     </Card.Body>  
     </Card>
        <br/>
        <Card>
        <Card.Body>
    <Card.Img variant="top" src="https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/gallery/images/CGC-Excursions_Gym_640x400.jpg" />
        </Card.Body>
       <br/>
      </Card>

       <Card>
      <Card.Body>
<Card.Img variant="top" src="https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/gallery/images/CGC-Excursions_Pool%202_640x400.jpg" />
        </Card.Body>
        </Card>
        <br/>
        </CardGroup>
        <br/>

        <CardGroup>
        <Card>
        <Card.Img variant="top" src="https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/page_bottom/1140x710.jpg" />
        <CardImgOverlay>
        <br/>
        <div class="text-center">
        <br/>
        <h4>Be our guest at our hotels and let us bring you the best experiences of your life </h4>
       </div>
      </CardImgOverlay>
      </Card>
    </CardGroup>
    </section>
    </div>
    );
}
export default Excursions;
    