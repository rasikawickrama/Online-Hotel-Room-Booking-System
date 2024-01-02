import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import React, {  useEffect } from 'react';
import axios from 'axios';




function Homesectiontwo() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  
  const [rooms, setMessages] = useState([]);
  const [error, setError] = useState('');


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


  return (
    <div>
    <section id="home" className="hero-block">
      <section class="hero-section">
        <div class="container">
        <div class="row">
        <div class="col-lg-6">
        <div class="hero-text">
    <h1>Our Best Rooms</h1>
    <div class="text-center">
    <img class="img-fluid" src="https://livedemo00.template-help.com/wt_prod-22403/images/title-decorative-84x8.png" 
    alt="" width="84" height="8" align="center"></img>
        </div>
        </div>
        </div>
    
    <div class="col-xl-4 col-lg-5 offset-xl-2 offset-lg-1">
    <Button type="submit" href="/Rooms"><h3>View All Rooms</h3></Button>
    </div>
    </div>
    </div>
    </section>
    
         <CardGroup>
         <Card activeIndex={index} onSelect={handleSelect}>
         <Card.Body>
        {rooms.map((room, index) => (
                    <img src={room.singleroomimage}alt={room.title}></img> 
                  ))}
        <section class="hero-section">
        <div class="container">
        <div class="row">
        <div class="col-lg-6">
        <div class="hero-text">
          <h5>Single Room</h5>
          </div>
          </div>
          <div class="col-xl-4 col-lg-5 offset-xl-2 offset-lg-1">
               {rooms.map((room, index) => (
                    <h6 key={index}>{room.price1}</h6>
               ))}
    </div>
    </div>
    </div>
    </section>
        </Card.Body>
        </Card>

      <Card>
      <Card.Body>
        {rooms.map((room, index) => (
                    <img src={room.doubleroomimage}alt={room.title}></img> 
                ))}
        <section class="hero-section">
        <div class="container">
        <div class="row">
        <div class="col-lg-6">
        <div class="hero-text">
          <h5> Double Room</h5>
          </div>
    </div>
          <div class="col-xl-4 col-lg-5 offset-xl-2 offset-lg-1">
               {rooms.map((room, index) => (
                    <h6 key={index}>{room.price2}</h6>
               ))}
    </div>
    </div>
    </div>
    </section>
    </Card.Body>
    </Card>

      <Card>
      <Card.Body>
        {rooms.map((room, index) => (
                    <img src={room.familyroomimage}alt={room.title}></img> 
                ))}
        <section class="hero-section">
        <div class="container">
        <div class="row">
        <div class="col-lg-6">
        <div class="hero-text">
          <h5> Family Room </h5>
          </div>
          </div>
          <div class="col-xl-4 col-lg-5 offset-xl-2 offset-lg-1">
          {rooms.map((room, index) => (
                    <h6 key={index}>{room.price3}</h6> 
                ))}
    </div>
    </div>
    </div>
    </section>
    </Card.Body>
    </Card>
    </CardGroup>

    <CardGroup>
      <Card>
      <Card.Body>
        {rooms.map((room, index) => (
                    <img src={room.executiveroomimage}alt={room.title}></img> 
                ))}
        <section class="hero-section">
        <div class="container">
        <div class="row">
        <div class="col-lg-6">
        <div class="hero-text">
          <h5> Executive Room</h5>
          </div>
    </div>
          <div class="col-xl-4 col-lg-5 offset-xl-2 offset-lg-1">
          {rooms.map((room, index) => (
                    <h6 key={index}>{room.price4}</h6> 
                ))}
    </div>
    </div>
    </div>
    </section>
        </Card.Body>
         </Card>

      <Card>
      <Card.Body>
        {rooms.map((room, index) => (
                    <img src={room.vipsuiteroomimage}alt={room.title}></img> 
                ))}
        <section class="hero-section">
        <div class="container">
        <div class="row">
        <div class="col-lg-6">
        <div class="hero-text">
          <h5> Vip Suite Room </h5>
          </div>
    </div>
          <div class="col-xl-4 col-lg-5 offset-xl-2 offset-lg-1">
          {rooms.map((room, index) => (
                    <h6 key={index}>{room.price5}</h6> 
                ))}
    </div>
    </div>
    </div>
    </section>
        </Card.Body>
        </Card>

      <Card>
      <Card.Body>
        {rooms.map((room, index) => (
                    <img src={room.superiorroomimage}alt={room.title}></img> 
                ))}
        <section class="hero-section">
        <div class="container">
        <div class="row">
        <div class="col-lg-6">
        <div class="hero-text">
          <h5> Superior Room </h5>
          </div>
          </div>
          <div class="col-xl-4 col-lg-5 offset-xl-2 offset-lg-1">
          {rooms.map((room, index) => (
                    <h6 key={index}>{room.price6}</h6> 
                ))}
          </div>
          </div>
          </div>
          </section>
    </Card.Body>
    </Card>
    </CardGroup>
    </section>
{error && <p style={{color: 'red'}}>{error}</p>}
</div>
  );
  }
export default Homesectiontwo;
    