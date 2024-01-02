import './Appa.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homesecone from './Homesecone';
import Homesectwo from './Homesectwo';
import Service from './Service';
import News from './News'
import Newssec from './Newssec';
import Homesecthree from './Homesecthree';
import Homesecfour from './Homesecfour';
import Newsdes from './Newsdes';
import Navigate from "./Navigate";


function Home() {
    
  return (
    <div className="App">
      <>
      <header id='header' className='header.block'>
      <Navigate></Navigate>
      </header>
      <br/>
    <div class="header-configure-area">
             <Homesecone></Homesecone>
    </div>  
        <section class="hero-section">
        <div class="container">
        <div class="hero-text">
             <Homesectwo></Homesectwo>            
             <Service></Service>
             <News></News>                   
             <Newssec></Newssec> 
             <Homesecthree></Homesecthree> 
             <Newsdes></Newsdes> 
             <Homesecfour></Homesecfour>  
        </div>
        </div>
   </section>
   </>
</div>
  );
}

export default Home;
