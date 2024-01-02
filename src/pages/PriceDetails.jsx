import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigate from "../components/Navigate";

import PD from './PD'

function Pricedetails() {
  
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
    
    return (
        <div>
        <header>
        <Navigate></Navigate>
        </header>
        <br/>
      <section class="hero-section">
       <CardGroup>
        <Card activeIndex={index} onSelect={handleSelect}>
        <Card.Img src= "https://livedemo00.template-help.com/wt_prod-22403/images/bg-breadcrumbs.jpg">
        </Card.Img>
        </Card>
        </CardGroup>
        </section>
         <br/>
         <PD></PD>
      <br/>
</div>
  
  );
}
export default Pricedetails;
  