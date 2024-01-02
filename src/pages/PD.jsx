import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {  useEffect } from 'react';
import axios from 'axios';
import '../components/Appa.css'; 
import '../Appa.css'
import Button from 'react-bootstrap/Button';
import CardImgOverlay from 'react-bootstrap/esm/CardImgOverlay';
import { useLocation } from 'react-router-dom';

function PD() {
    const [rooms, setMessages] = useState([]);
    const [error, setError] = useState('');
    const [details, setDetails] = useState([]);
    const [stayDetails, setStayDetails] = useState(null);
    const location = useLocation();

useEffect(() => {
  if (location.state) {
    const { title, 
      imageUrl, 
      offers, 
      offer,
      offer3,
      offer4,
      price } = location.state;
      
    setStayDetails({
      title,
      imageUrl,
      offers,
      offer,
      offer3,
      offer4,
      price
    });
  }
}, [location]);

    useEffect(() => {
        axios.get('http://localhost:5000/get-message')
            .then(res => {
                if (res.data.status === 'success' && res.data.data.rooms) {
                    setMessages(res.data.data.rooms);
                } else {
                    setError('Unexpected response format from server');
                }
            })
            .catch(() => setError('Error fetching from server'));
    }, []);

    useEffect(() => {
      axios.get('http://localhost:5000/get-details')
          .then(res => {
              if (res.data.status === 'success' && res.data.data.details) {
                  setDetails(res.data.data.details);
              } else {
                  setError('Unexpected response format from server');
              }
          })
          .catch(() => setError('Error fetching from server'));
  }, []); 
                        



    return (


        <div>
          <section id="home" className="hero-section">
            <div class="text-center">
          <h1> Standared Pricing </h1>
          <img class="img-fluid" src="https://livedemo00.template-help.com/wt_prod-22403/images/title-decorative-84x8.png" alt="" width="84" height="8" align="center"></img>
          </div>
          </section>
          <section id="home" className="room-section">
          

      <CardGroup>
      <Card >
      <Card.Body>
          <Card.Title><h3>Basic</h3></Card.Title>
          <Card.Text > 
          {rooms.map((room, index) => (
                    <h2 key={index}>{room.title1}</h2> // Assuming each message has a 'content' field
                ))}
             {rooms.map((room, index) => (
                    <img src={room.singleroomimage}alt={room.title}></img> // Assuming each message has a 'content' field
                ))}
                   
                   {rooms.map((room, index) => (
                     <h5 key={index}>{room.offerswifi}</h5>
                   ))}
                     {rooms.map((room, index) => (
                    <h4 key={index}>{room.price1}</h4> // Assuming each message has a 'content' field
                ))}
                <Button type="submit" href="/Registration"><h3>Book Now</h3></Button>

          {rooms.map((room, index) => (
                    <h2 key={index}>{room.title2}</h2> // Assuming each message has a 'content' field
                ))}
              {rooms.map((room, index) => (
                    <img src={room.doubleroomimage}alt={room.title}></img> // Assuming each message has a 'content' field
                ))}
               {rooms.map((room, index) => (
                     <h5 key={index}>{room.offerswifi}</h5>
                   ))}
               {rooms.map((room, index) => (
                    <h4 key={index}>{room.price2}</h4> // Assuming each message has a 'content' field
                ))}
                <Button type="submit" href="/Registration"><h3>Book Now</h3></Button>
                </Card.Text>         
          </Card.Body>
      </Card>

      <Card>
        <Card.Body>
          <Card.Title><h3>Standard</h3> </Card.Title>
          <Card.Text>
          {rooms.map((room, index) => (
            <h2 key={index}>{room.title3}</h2>
            ))}
        {rooms.map((room, index) => (
                    <img src={room.familyroomimage}alt={room.title}></img> // Assuming each message has a 'content' field
                ))}
                
                {rooms.map((room, index) => (
                     <h5 key={index}>{room.offerswifi}</h5>
                   ))}
              {rooms.map((room, index) => (
                     <h5 key={index}>{room.offersbreakfast}</h5>
                   ))}
              
              {rooms.map((room, index) => (
                    <h4 key={index}>{room.price3}</h4> // Assuming each message has a 'content' field
                ))}
            <Button type="submit" href="/Registration"><h3>Book Now</h3></Button>
            </Card.Text>
        </Card.Body>
      </Card>
      
      <Card>
      <Card.Body>
          <Card.Title><h3>Gold</h3></Card.Title>
          <Card.Text>
          {rooms.map((room, index) => (
                    <h2 key={index}>{room.title4}</h2> // Assuming each message has a 'content' field
                ))}
             {rooms.map((room, index) => (
                    <img src={room.executiveroomimage}alt={room.title}></img> // Assuming each message has a 'content' field
                ))}
                
             {rooms.map((room, index) => (
                     <h5 key={index}>{room.offerswifi}</h5>
                   ))}
              {rooms.map((room, index) => (
                     <h5 key={index}>{room.offersbreakfast}</h5>
                   ))}
              {rooms.map((room, index) => (
                     <h5 key={index}>{room.offersrooms}</h5>
                   ))}
             {rooms.map((room, index) => (
                    <h4 key={index}>{room.price4}</h4> // Assuming each message has a 'content' field
                ))}
            
            <Button type="submit" href="./Registration"><h3>Book Now</h3></Button>

          </Card.Text>
        </Card.Body>
      </Card>

      <Card>
      <Card.Body>
          <Card.Title><h3>Platinum</h3></Card.Title>
          <Card.Text>
          {rooms.map((room, index) => (
                    <h2 key={index}>{room.title5}</h2> // Assuming each message has a 'content' field
                ))}
                {rooms.map((room, index) => (
                    <img src={room.vipsuiteroomimage}alt={room.title}></img> // Assuming each message has a 'content' field
                ))}
            {rooms.map((room, index) => (
                     <h5 key={index}>{room.offerswifi}</h5>
                   ))}
              {rooms.map((room, index) => (
                     <h5 key={index}>{room.offersbreakfast}</h5>
                   ))}
              {rooms.map((room, index) => (
                     <h5 key={index}>{room.offersrooms}</h5>
                   ))}
            {rooms.map((room, index) => (
                     <h5 key={index}>{room.offerscar}</h5>
                   ))}
            {rooms.map((room, index) => (
                    <h4 key={index}>{room.price5}</h4> // Assuming each message has a 'content' field
                ))}
         <Button type="submit" href="/Registration"><h3>Book Now</h3></Button>   

            {rooms.map((room, index) => (
                    <h2 key={index}>{room.title6}</h2> // Assuming each message has a 'content' field
                ))}
                {rooms.map((room, index) => (
                    <img src={room.superiorroomimage}alt={room.title}></img> // Assuming each message has a 'content' field
                ))}
            {rooms.map((room, index) => (
                     <h5 key={index}>{room.offerswifi}</h5>
                   ))}
              {rooms.map((room, index) => (
                     <h5 key={index}>{room.offersbreakfast}</h5>
                   ))}
              {rooms.map((room, index) => (
                     <h5 key={index}>{room.offersrooms}</h5>
                   ))}
            {rooms.map((room, index) => (
                     <h5 key={index}>{room.offerscar}</h5>
                   ))}
            {rooms.map((room, index) => (
                    <h4 key={index}>{room.price6}</h4> // Assuming each message has a 'content' field
                ))}
                <Button type="submit" href="/Registration"><h3>Book Now</h3></Button>  
         
             
                {stayDetails && (
                <>
                <h2>{stayDetails.title}</h2>
                <img src={stayDetails.imageUrl} alt={stayDetails.title} />
                <h5>{stayDetails.offers}</h5>
                <h5>{stayDetails.offer}</h5>
                <h5>{stayDetails.offer3}</h5>
                <h5>{stayDetails.offer4}</h5>
                <h4>{stayDetails.price}</h4>
        <Button type="submit" href="/Registration"><h3>Book Now</h3></Button>
      </>
    )}
    {details.map((detail, index) => (
      <div key={index}>
      </div>
    ))}
        </Card.Text>
        </Card.Body>
        </Card>
</CardGroup>


    <CardGroup>
        <Card>
          <Card.Body>
        <Card.Img variant="top" src="https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/page_bottom/1140x710.jpg" />
        <CardImgOverlay>
        <div class="text-center">
          <br/>
          <br/>
          <br/>
        <h1>Stay With Us. </h1>
        </div>
        </CardImgOverlay> 
        </Card.Body>
        </Card>
        </CardGroup>

</section>
{error && <p style={{color: 'red'}}>{error}</p>}
</div>
  
  );
}
export default PD;
  