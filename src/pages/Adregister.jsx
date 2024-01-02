import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Navigate from "../components/Navigate";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { useState } from 'react';
import CardImgOverlay from 'react-bootstrap/esm/CardImgOverlay';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Adregister() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };

    const [formData, setFormData] = useState({
          name: '',
          email: '',
          password: '',
          phonenumber:''
         
      });
      const [error, setError] = useState('');
      const navigate = useNavigate();
  
      const handleChange = (e) => {
          const { name, value } = e.target;
          setFormData({
              ...formData,
              [name]: value
          });
          setError('');  // Reset error on change
      };
  
      const handleSubmit = async (e) => {
          e.preventDefault();
          try {
              await axios.post('http://localhost:5000/adregister', formData);
              console.log('Registration successful');
              setError('');  // Reset error on success
              navigate('/alogin');  // Redirect to login page
          } catch (err) {
              console.error('Registration failed', err.response.data);
              setError(err.response.data.message);  // Set error message
          }
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
  src= "https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/gallery/images/CGC-Restaurant_Food_Noodles_Noodles%202_640x400.jpg"
        alt=""
          />
          
    <CardImgOverlay>
     <div class="text-center">
     <div class="col-sm-4  offset-xl-4">
        <br/>
        <Form onSubmit={handleSubmit}>
        
      <Form.Group>
      <h2>Create Your Jetwin Red Account</h2>
    <Form.Label>
      <h5>Name:</h5>
      </Form.Label> 
      <Form.Control
      type="text"
      name="name"
      value={formData.name}
      onChange={handleChange}
      required/>
      </Form.Group>

     <Form.Group>
    <Form.Label>
     <h5> E mail: </h5>
      </Form.Label>
      <Form.Control
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required />
      </Form.Group>

      <Form.Group>
      <Form.Label>
      <h5> Password: </h5>
      </Form.Label>
      <Form.Control
      type="password"
      name="password"
      onChange={handleChange}
      required/>
    </Form.Group> 
    <Form.Group>
    <Form.Label>
     <h5>Phone Number: </h5> 
      </Form.Label> 
      <Form.Control
      type="text"
      name="phonenumber"
      onChange={handleChange}
      required/>
     </Form.Group>
    <br/>

    <Button type="submit"><h4>Sign Up</h4></Button>
    </Form>
    {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
    </div>
    </CardImgOverlay>
    </CardGroup>
    </section>
    </Card>
    </section>
    </div>
     );
    };
    
    export default Adregister;