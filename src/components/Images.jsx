import Navigate from "./Navigate";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

function Gallery() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
    const totalImages  = 
    [ "https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/gallery/images/CGC-Excursions_Crescat_640x400.jpg",
      "https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/gallery/images/CGC-Excursions_Gym_640x400.jpg",
      "https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/gallery/images/CGC-Excursions_Pool%202_640x400.jpg",

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
      "https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/gallery/images/CGC-Restaurant_Food_Tea-Lounge_Tea%20Lounge%20Food_640x400.jpg",

      "https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/gallery/images/CGC-Rooms_Executive-Room_Executive%20Room%201_640x400.jpg",
      "https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/gallery/images/CGC-Rooms_Executive-Room_Executive%20Room%202_640x400.jpg",
      "https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/gallery/images/CGC-Rooms_Executive-Suite_Executive%20Suite%201_640x400.jpg",
      "https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/gallery/images/CGC-Rooms_Premium-Room_Premium%20room%201_640x400.jpg",
      "https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/gallery/images/CGC-Rooms_Premium-Room_Premium%20Room%202_640x400.jpg",
      "https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/gallery/images/CGC-Rooms_Premium-Suite_Premium%20Suite%201_640x400.jpg",
      "https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/gallery/images/CGC-Rooms_Premium-Suite_Premium%20Suite%202_640x400.jpg",
      "https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/gallery/images/CGC-Rooms_Presidential-Suite_Presidential%20Suite%201_640x400.jpg",
      "https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/gallery/images/CGC-Gallery-000-Spa_640x400.jpg"

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
        <header>
              <Navigate></Navigate>
              </header>
              
            <br/>
            <CardGroup>
              <Card activeIndex={index} onSelect={handleSelect}>
              <Card.Img src= "https://livedemo00.template-help.com/wt_prod-22403/images/bg-breadcrumbs.jpg">
              </Card.Img>
              </Card>
              </CardGroup>
            <br/>
            <div class="text-center">
              <Navbar className="bg-body-light" >
              <Container >
      <section id="spa" className=" navb-block">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar id="responsive-navbar-nav">
          <Nav className="rd-navbar rd-navbar-original rd-navbar-fixed" data-layout="rd-navbar-fixed" data-sm-layout="rd-navbar-fixed" data-md-layout="rd-navbar-fixed" data-lg-layout="rd-navbar-fixed" data-xl-layout="rd-navbar-static" data-md-device-layout="rd-navbar-fixed" data-lg-device-layout="rd-navbar-fixed">
    <NavDropdown title="All" id="nav-dropdown">
        <div class="text-center mt-3">
              <NavDropdown.Item href="/Excursions" id="nav-dropdown" title="Excursions/Activites">Excursions/Activites</NavDropdown.Item>
              <NavDropdown.Item href="/Res">Resturants & Foods</NavDropdown.Item>
              <NavDropdown.Item href="/Rooms">Rooms</NavDropdown.Item>
              <NavDropdown.Item href="/spa">Spa</NavDropdown.Item>
              </div>
              </NavDropdown>
              </Nav>
             </Navbar>
          </section>
        </Container>
         </Navbar>
         </div>
<section id="spa" className=" gallery-block">
      <br/>
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
        </Card>
</CardGroup>
</section>
    </div>
     );
  }
export default Gallery;