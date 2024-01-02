import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import CardImgOverlay from 'react-bootstrap/esm/CardImgOverlay';

function Rooms() {
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
      <CardImgOverlay> 
        <div class="text-center">
        <br/>
        <br/>
        <br/>
        <h1>Gallery</h1>
      <p> We are a lifestyle brand with the main focus on people, loved ones and friends being at the coolest places, enjoying life’s best moments. We call it inspired living! Is there any other way to go?</p>
      </div>
      </CardImgOverlay>
      </Card>
      </CardGroup>
      </section>
      <br/>
    <section id="spa" className=" gallery-block">
    <h2> Spa </h2>
    <CardGroup>
         <Card>
          <Card.Body>
  <Card.Img  src="https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/gallery/images/CGC-Gallery-000-Spa_640x400.jpg" />
  </Card.Body>
  </Card>
  </CardGroup>
  </section>
</div>
);
}
export default Rooms;
    