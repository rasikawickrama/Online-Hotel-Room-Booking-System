import Navigate from "../components/Navigate";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { useState } from 'react';
import GuestDetails from './guestdetails';


function Payment() {

    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };


    return (
        <div>
          <header>
          <Navigate></Navigate>
          </header>
          
          <section id="home" className="reg-section">
          <Card activeIndex={index} onSelect={handleSelect}>
          <section class="reg-section">
          <CardGroup>
          <Card.Img
          className ='d-block w-80'
          src= "https://livedemo00.template-help.com/wt_prod-22403/images/bg-breadcrumbs.jpg"
          alt=""/>
          </CardGroup>
          </section>
          </Card>
          </section>
          <br/>
          <GuestDetails></GuestDetails>
          </div>
          );
          };
          export default Payment;