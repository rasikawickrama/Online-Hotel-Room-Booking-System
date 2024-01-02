import './Appa.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigate from './components/Navigate';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About';
import Contact from './components/contact';
import Images from './components/Images';
import Registration from './pages/Registration';
import Login from './pages/Login';
import Adregister from './pages/Adregister';
import Alogin from './pages/alogin';
import Excursions from './components/Excursions';
import Resturants from './components/Res';
import Rooms from './components/Rooms';
import Spa from './components/Spa';
import PriceDetails from './pages/PriceDetails';
import Booked from './pages/Booked';
import Payment from './pages/payment';
import Adminup from'./pages/Adminup';
import Dining from'./pages/Dining'


function App() {
  
  return (
    <div>
      <>
      <header id='header'>
      <Navigate></Navigate>
      </header>
      
    <Router>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/" element={<Navigate />} />
        <Route path ="/About" element ={<About />}/>
        <Route path ="/Contact" element={<Contact />} />
        <Route path ="/Images" element={<Images/>} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Adregister" element={<Adregister/>} />
        <Route path='/alogin' element={<Alogin/>}/>
        <Route path='/Excursions' element={<Excursions/>} />
        <Route path='/Res' element={<Resturants/>} />
        <Route path='/Rooms' element={<Rooms/>} />
        <Route path='Spa' element={<Spa/>} />
        <Route path='/PriceDetails' element={<PriceDetails/>} />
        <Route path='/Booked' element={<Booked/>} />
        <Route path='/Payment' element={<Payment/>} />
        <Route path='/Adminup' element={<Adminup/>} />
        <Route path='/Dining' element={<Dining/>} />
      </Routes> 
    </Router>
        </>
</div>
);
  }

export default App;
