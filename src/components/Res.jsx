import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import CardImgOverlay from 'react-bootstrap/esm/CardImgOverlay';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';


function Resturants() {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };


    const totalImages  = 
  [
    "https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/gallery/images/CGC-Restaurant_Food_Breeze-Bar_Breeze%20Bar%201_640x400.jpg",
    "https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/gallery/images/CGC-Restaurant_Food_Breeze-Bar_Breeze%20Bar%202_640x400.jpg",
    "https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/gallery/images/CGC-Restaurant_Food_Breeze-Bar_Breeze%20Bar%20Food%201_640x400.jpg",
    "https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/gallery/images/CGC-Restaurant_Food_Breeze-Bar_Breeze%20Bar%20Food%202_640x400.jpg",
    "https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/gallery/images/CGC-Restaurant_Food_Cafe%CC%81_The%20Cafe%201_640x400.jpg",
    "https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/gallery/images/CGC-Restaurant_Food_Cafe%CC%81_The%20Cafe%202_640x400.jpg",
    "https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/gallery/images/CGC-Restaurant_Food_Cheers-Pub_Cheers%20Pub%201_640x400.jpg",
    "https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/gallery/images/CGC-Restaurant_Food_Cheers-Pub_Cheers%20Pub%202_640x400.jpg",
    "https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/gallery/images/CGC-Restaurant_Food_Cheers-Pub_Cheers%20Pub%20Food%201_640x400.jpg",
    "https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/gallery/images/CGC-Restaurant_Food_Cheers-Pub_Cheers%20Pub%20food%202_640x400.jpg",
    "https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/gallery/images/CGC-Restaurant_Food_Chutneys_Chutneys%201_640x400.jpg",
    "https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/gallery/images/CGC-Restaurant_Food_Chutneys_Chutneys%202_640x400.jpg",
    "https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/gallery/images/CGC-Restaurant_Food_Chutneys_Chutneys%20Food%201_640x400.jpg",
    "https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/gallery/images/CGC-Restaurant_Food_Chutneys_Chutneys%20Food%202_640x400.jpg",
    "https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/gallery/images/CGC-Restaurant_Food_Coffee-Stop_Coffee%20Stop%201_640x400.jpg",
    "https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/gallery/images/CGC-Restaurant_Food_Coffee-Stop_Coffee%20Stop%202_640x400.jpg",
    "https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/gallery/images/CGC-Restaurant_Food_Coffee-Stop_Coffee%20Stop%20Food%201_640x400.jpg",
    "https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/gallery/images/CGC-Restaurant_Food_Coffee-Stop_Coffee%20Stop%20Food%202_640x400.jpg",
    "https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/gallery/images/CGC-Restaurant_Food_Echo_Echo%201_640x400.jpg",
    "https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/gallery/images/CGC-Restaurant_Food_Echo_Echo%202_640x400.jpg",
    "https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/gallery/images/CGC-Restaurant_Food_Echo_Echo%20Food%202_640x400.jpg",
    "https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/gallery/images/CGC-Restaurant_Food_Echo_Echo%20Foof%202_640x400.jpg",
    "https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/gallery/images/CGC-Restaurant_Food_Lagoon_The%20Lagoon%201_640x400.jpg",
    "https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/gallery/images/CGC-Restaurant_Food_Lagoon_The%20Lagoon%202_640x400.jpg",
    "https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/gallery/images/CGC-Restaurant_Food_Lagoon_The%20Lagoon%20Fish%20Display_640x400.jpg",
    "https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/gallery/images/CGC-Restaurant_Food_Lagoon_The%20Lagoon%20Food_640x400.jpg",
    "https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/gallery/images/CGC-Restaurant_Food_London-Grill_The%20London%20Grill%201_640x400.jpg",
    "https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/gallery/images/CGC-Restaurant_Food_London-Grill_The%20London%20Grill%202_640x400.jpg",
    "https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/gallery/images/CGC-London-Grill_The%20London%20Grill%20Food%201_640x400.jpg",
    "https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/gallery/images/CGC-London-Grill_The%20London%20Grill%20Food%202_640x400.jpg",
    "https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/gallery/images/CGC-Restaurant_Food_Noodles_Noodles%20Food%201_640x400.jpg",
    "https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/gallery/images/CGC-Restaurant_Food_Noodles_Noodles%20Food%202_640x400.jpg",
    "https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/gallery/images/CGC-Restaurant_Food_Nuga-Gama_Nuga%20Gama%201_640x400.jpg",
    "https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/gallery/images/CGC-Restaurant_Food_Nuga-Gama_Nuga%20Gama%202_640x400.jpg",
    "https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/gallery/images/CGC-Restaurant_Food_Nuga-Gama_Nuga%20Gama%20Food%201_640x400.jpg",
    "https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/gallery/images/CGC-Restaurant_Food_Nuga-Gama_Nuga%20Gama%20Food%202_640x400.jpg",
    "https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/gallery/images/CGC-Restaurant_Food_Tao-Chinese_Tao%20Chinese%201_640x400.jpg",
    "https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/gallery/images/CGC-Restaurant_Food_Tao-Chinese_Tao%20Chinese%202_640x400.jpg",
    "https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/gallery/images/CGC-Restaurant_Food_Tao-Chinese_Tao%20Chinese%20Food%201_640x400.jpg",
    "https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/gallery/images/CGC-Restaurant_Food_Tao-Chinese_Tao%20Chinese%20Food_640x400.jpg",
    "https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/gallery/images/CGC-Restaurant_Food_Tea-Lounge_Tea%20Lounge%20Beverage_640x400.jpg",
    "https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/gallery/images/CGC-Restaurant_Food_Tea-Lounge_Tea%20Lounge%20Food_640x400.jpg"




  ];
      const imagesPerRow = 3;
      const imagesPerPage = imagesPerRow * 2;
      const [imagesToShow, setImagesToShow] = useState(imagesPerPage);
      const [loading, setLoading] = useState(false);
      const handleLoadMore = () => {
        setLoading(true);
        setTimeout(() => {
        setImagesToShow(imagesToShow + imagesPerPage);
        setLoading(false); 
    }, 1000); 
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
    <h2> Resturants & Foods </h2>

    <div>
          <div className="row">
            {totalImages.slice(0, imagesToShow).map((image, index) => (
              <div key={index} className="col-md-4 mb-3">
                <Card>
                  <Card.Body>
                    <Card.Img variant="top" src={image} />
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>


          {imagesToShow < totalImages.length && (
            <div className="text-center mt-3">
              <Button onClick={handleLoadMore}disabled={loading}>
            {loading ? (
              <>
                <Spinner
                  as="span"
                  animation="grow"
                  size="sm"
                  role="status"
                  aria-hidden="true"/>
                <span className="ms-2"><h3>Loading...</h3></span>
              </>
            ) : (
              <h3>Load More</h3>
            )}</Button>
            </div>
          )}
        </div>
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
export default Resturants;
    