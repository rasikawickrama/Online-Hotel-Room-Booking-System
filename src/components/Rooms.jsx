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
      <Card.Img src= "https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/banners/Gallery-Header-resized-D%20.jpg"  className="visible-xs lazyloaded">
      </Card.Img>
      <CardImgOverlay> 
        <div class="text-center">
        <h1>  </h1>
        <br/>
        <br/>
        <h1> Gallery</h1>
      <p> We are a lifestyle brand with the main focus on people, loved ones and friends being at the coolest places, enjoying life’s best moments. We call it inspired living! Is there any other way to go?</p>
      </div>
      </CardImgOverlay> 
      </Card>
      </CardGroup>
      </section>
      <br/>
    
    <section id="spa" className=" gallery-block">
    <h2> Rooms </h2>
<CardGroup>
         <Card activeIndex={index} onSelect={handleSelect}>
         <Card.Body>
  <Card.Img variant="top" src="https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/gallery/images/CGC-Rooms_Executive-Room_Executive%20Room%201_640x400.jpg" />
         </Card.Body>
         </Card>
      <br/>

      <Card>
      <Card.Body>
    <Card.Img variant="top" src="https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/gallery/images/CGC-Rooms_Executive-Room_Executive%20Room%202_640x400.jpg" />
    </Card.Body>
    </Card>
      <br/>

      <Card>
      <Card.Body>
<Card.Img variant="top" src="https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/gallery/images/CGC-Rooms_Executive-Suite_Executive%20Suite%201_640x400.jpg" />
      </Card.Body>
      </Card>
      <br/>
</CardGroup>
    <br/>

    <CardGroup>
      <Card>
      <Card.Body>
  <Card.Img variant="top" src="https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/gallery/images/CGC-Rooms_Premium-Room_Premium%20room%201_640x400.jpg" />
      </Card.Body>
      </Card>
      <br/>

      <Card>
        <Card.Body>
    <Card.Img variant="top" src="https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/gallery/images/CGC-Rooms_Premium-Room_Premium%20Room%202_640x400.jpg" />
        </Card.Body>
        </Card>
      <br/>

      <Card>
        <Card.Body>
<Card.Img variant="top" src="https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/gallery/images/CGC-Rooms_Premium-Suite_Premium%20Suite%201_640x400.jpg" />
        </Card.Body>
        </Card>
      <br/>
    </CardGroup>
    <br/>
<CardGroup>
         <Card>
          <Card.Body>
  <Card.Img variant="top" src="https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/gallery/images/CGC-Rooms_Premium-Suite_Premium%20Suite%202_640x400.jpg" />
          </Card.Body>
         </Card>

      <br/>
         <Card>
      <Card.Body>
    <Card.Img variant="top" src="https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/gallery/images/CGC-Rooms_Presidential-Suite_Presidential%20Suite%201_640x400.jpg" />
      </Card.Body>
       <br/>
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
        <h4>Be our guest at our hotels and let us
bring you the best experiences of your life </h4>
</div>
</CardImgOverlay> 
        </Card>
    </CardGroup>
    </section>
</div>
    );
}
export default Rooms;
    