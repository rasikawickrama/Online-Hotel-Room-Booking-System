import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


function Homesectionfour() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  


  return (
    <section id="home" className="hero-block">
    <CardGroup>
      <Card activeIndex={index} onSelect={handleSelect}>
      <Card.Body>
      <Card.Img variant="top" src="https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/gallery/00-bentota-gallery-stay-deluxe-sandu-suite-624x400.jpg" />
      </Card.Body>
      </Card>
      
      <Card>
      <Card.Body>
      <Card.Img variant="top" src="https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/gallery/Executive-Lounge_624x400.jpg" />
      </Card.Body>
      </Card>

      <Card>
      <Card.Body>
      <Card.Img variant="top" src="https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/gallery/04-bentota-gallery-luxury-beach-view-624x400-D.jpg" />
      </Card.Body>
      </Card>
      </CardGroup>

    <CardGroup>
      <Card>
      <Card.Body>
      <Card.Img variant="top" src="https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/gallery/06-Cinnamon-Lakeside_Business_Facilities_The-Library-2.jpg" height ="6" width= "5" />
      </Card.Body>
      </Card>

      <Card>
      <Card.Body>
      <Card.Img variant="top" src="https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/gallery/06-Cinnamon-Lakeside_Business_Facilities_8Degrees-1.jpg" />
      </Card.Body>
      </Card>

      <Card>
      <Card.Body>
  <Card.Img variant="top" src="https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/gallery/06-Cinnamon-Lakeside_Business_Cuisunes_The-Lounge-1.jpg"  />
      </Card.Body>
      </Card>
      </CardGroup>
      
       <Card>
       <CardGroup>
       <Card>
    <Card.Img variant="top" src="https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/page_bottom/1140x710.jpg" className="crop-image" />
       </Card>
       </CardGroup>
       </Card>   
    </section>
  );
}
export default Homesectionfour;
    