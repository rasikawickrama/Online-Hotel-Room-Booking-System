import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Navigate from "../components/Navigate";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { useState } from 'react';
import CardImgOverlay from 'react-bootstrap/esm/CardImgOverlay';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

function Login() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
    
      const [formData, setFormData] = useState({
          email: '',
          password: ''
      });
      const [error, setError] = useState('');
      const [success, setSuccess] = useState(false);  // New state to track successful login
      const navigate = useNavigate();
  
      const handleChange = (e) => {
          const { name, value } = e.target;
          setFormData({
              ...formData,
              [name]: value
          });
          setError('');  // Reset error on change
      };
      // Assuming your login logic

  
  
      const handleSubmit = async (e) => {
          e.preventDefault();
          try {
              await axios.post('http://localhost:5000/login', formData).then(res => {
                
                  localStorage.setItem('jwtToken', res.data.token);
                  const decodedToken = jwtDecode(res.data.token);  // Decode the token
                  const userRole = decodedToken.role;  // Extract the role
                  console.log('Login successful');
                  setError('');
                  setSuccess(true);
  
                  // Check the role and navigate accordingly
                  switch (userRole) {  // Change this line to use userRole
                      case 'admin':
                          navigate('/getall');
                          break;
                      case 'user':
                          navigate('/Booked');
                          break;
                      default:
                          console.error('Unknown role');
                          setError('Invalid role');
                  }
                  });
          } catch (err) {
              console.error('Login failed', err.response.data);
              setError(err.response.data.message);
              setSuccess(false);
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
          alt=""/>
          
    <CardImgOverlay>
     <div class="text-center">
     <div class="col-sm-4  offset-xl-4">
      <br/>
        <Form onSubmit={handleSubmit}>
        <h2>Welcome to Jetwin Red! Please login</h2>
    
    <Form.Group>
    <Form.Label>
     <h5> E mail:</h5>
      </Form.Label>
      <Form.Control
        type="email"
        name="email"
        value={formData.email} onChange={handleChange}
        required />
      </Form.Group>
      
      <Form.Group>
      <Form.Label>
       <h5> Password:</h5>
      </Form.Label>
      <Form.Control
      type="password"
      name="password"
      value={formData.password} onChange={handleChange}
      required/>
    </Form.Group> 
    
    <br/>
    <Button type="submit"><h4>Sign In</h4></Button>
    </Form>
    {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>Login successful!</p>} 
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
    
    export default Login;