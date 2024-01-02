import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigate from "./Navigate";
import Contactdetails from './Contactdetails';



function Contact() {
  
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
    return (
    
    
        <div className="App">
        <header id='header' className='header.block'>
        <Navigate></Navigate>
        </header>
        
        <div class="header-configure-area">
        <br/>
       <CardGroup>
        <Card activeIndex={index} onSelect={handleSelect}>
        <Card.Img src= "https://livedemo00.template-help.com/wt_prod-22403/images/bg-breadcrumbs.jpg">
        </Card.Img>
        </Card>
        </CardGroup>
        </div>
        <br/>
        <Contactdetails></Contactdetails>
        </div>
    
      );
    }
  export default Contact;
        