import { useState,useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigate from "../components/Navigate";
import { motion } from 'framer-motion';
import CardImgOverlay from 'react-bootstrap/esm/CardImgOverlay';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone'

function Dining() {
  
    const [index, setIndex] = useState(0);
    const [currentSection, setCurrentSection] = useState(0);
    

    

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
      };

      const [quoteAnimation, setQuoteAnimation] = useState(false);

      const quotedText = `“We really enjoyed the night here at Jetwin Red, plates was amazing, scrumptious food, friendly staff - special thanks to Nishi and Ishan. Affordable price, tasty food. Hope to come back again and again…”`;
    
      const quoteVariants = {
        animate: {
          opacity: [1, 0.5, 1],
          transition: {
            duration: 0.5,
            repeat: Infinity,
          },
        },
      };
    
      

  const sections = [
    {
      title: 'Breeze Bar',
      image: 'https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/misc/grand-breeze-o-530X620.jpg',
      description1:"Lively Poolside Dining",
      location: " Breeze Bar- Jetwin Red",
      description: "Sit back and wind down at our poolside bar for a fun evening or a laid-back afternoon. Sip on some heady concoctions and make the most of the carefree vibe that surrounds you.",
      contactnumber: '(+)94 112467125'
    },
    {
      title: 'Noodles',
      image: 'https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/misc/noodles-grand-530X620.jpg',
      description1:"Signature Southeast Asian and fusion meals.",
      location:"Noodles-Jetwin Red",
      description: "Serving as a bridge between our island and Southeast Asia, our local chefs team up with our Master Vietnamese Chef to toss up a fantastic meal for you. Drop by for an incredible lunch or dinner and enjoy the harmonious fusion in its aromas, flavours and warmth.",
      contactnumber: '(+)94 112467125'
    },
    {
    title: 'Tea Lounge',
    image: 'https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/misc/grand-the-lounge-530X620.jpg',
    description1: "Savour artisan tea during the day and the vibrant bar at night.",
    location:"Tea Lounge-Jetwin Red",
    description: "Embrace the island's deep-rooted passion for tea and life's other pleasures at our Tea Lounge. Indulge in a delightful selection of teas, delectable savouries, and enticing desserts that are available all day, as a talented pianist fills the air with ambient music. At night, the lounge transforms into a captivating whiskey lounge, shifting moods in sync with you.",
    contactnumber: '(+)94 112467125'
  },

  {
    title: ' Cheers Pub',
    image: 'https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/misc/cheers-grand-530X620.jpg',
    description1: "A good ol’ English sports bar.",
    location:"Cheers Pub-Jetwin Red",
    description: "A traditional British pub, with wooden interiors, and bar tables placed a few feet from dinner tables, to match a high-intensity match being screened live. It’s the only place where friends get divided into teams and still drink to it – cheers!",
    contactnumber: '(+)94 112467125'
},

  {
    title: ' The London Grill',
    image: 'https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/misc/the-london-grill-530X620.jpg',
    description1: "Classic fine dining in Colombo.",
    location:"The London Grill-Jetwin Red",
    description: "Experience the epitome of refined taste with an exquisite dining affair at Colombo's oldest fine-dining establishment, The London Grill. Indulge in the sophisticated pleasure of dinner served with cloche service, accompanied by a selection from our master cellar's impressive vintage list.",
    contactnumber: '(+)94 112467125'
},
   
  {
    title: ' Room Service',
    image: 'https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/misc/cg-room-service-530x620-090921.jpeg',
    description1:"A private dining experience",
    location:"Room Service-Jetwin Red",
    description: "When you choose to unwind in the privacy of your own space, indulge in the convenience of our impeccable room service. Allow us to serve delectable culinary delights right to your doorstep, adding an extra layer of comfort and relaxation to your stay.",
    contactnumber: '(+)94 112467125'
},

  {
    title: ' Executive Lounge',
    image: 'https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/misc/grand-executive-lounge-530X620.jpg',
    description1: "Work to lounge. Lounge to work.",
    location:"Executive Lounge-Jetwin Red",
    description: "When you put in so many hours into work, you should definitely enjoy the perks that come with it. This is the essence of our Executive Lounge. Here’s where all your hard work is almost instantly redeemed with an exclusive breakfast, high-tea, happy hours along with 24 hours of uninterrupted service.",
    contactnumber: '(+)94 112467125'
},
  {
    title: ' Coffee Stop',
    image: 'https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/misc/coffee-stop-grand-530X620.jpg',
    description1:"Caffeine, catch ups, and more.",
    location:"Coffee Stop-Jetwin Red",
    description: "Escape the busy city life by taking a break to enjoy a refreshing cup of coffee and a dulcet bite of our popular macaroons. And if you want to catch up with friends for an eventful evening, or talk business in a relaxed setting, the Coffee Stop is your destination fix.",
    contactnumber: '(+)94 112467125'
},

  {
    title: ' The Lagoon',
    image: 'https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/misc/cg-lagoon-530x620-090921.jpeg',
    description1: "An absolute delight for seafood lovers.",
    location:"The Lagoon-Jetwin Red",
    description: "Our seafood restaurant, The Lagoon, takes after the lively atmosphere of local seafood markets with a touch of class. Pick your favourite from the freshest catches of the day and entrust our skilled chefs to prepare it to perfection, tailor-made with your preferred sauce or curry.",
    contactnumber: '(+)94 112467125'
},
    
  {
    title: ' Nuga Gama',
    image: 'https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/misc/cg-nuga-530x620-D-090921.jpeg',
    description1: "A village experience in the city.",
    location:"Nuga Gama-Jetwin Red",
    description: "tep into an enchanting recreation of a traditional Sri Lankan village, nestled amidst the urban landscape. Indulge in the culinary delights of authentic Sri Lankan cuisine, lovingly prepared by famous, local ammes (traditional village cooks), providing a unique dining experience.",
    contactnumber: '(+)94 112467125'
},
     
  {
    title: ' Chutneys',
    image: 'https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/misc/cg-chutneys-530x620-090921A.jpeg',
    description1:"The essence of South Indian food.",
    location: "Chutneys-Jetwin Red",
    description: "Walk into Chutneys, and feel the beautiful aroma of Indian spices take over your senses. A menu of signature dishes prepared by our Indian chefs will keep you coming back for more - satisfying your cravings every time you do.",
    contactnumber: '(+)94 112467125'
},
      
  {
    title: ' Plates',
    image: 'https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/misc/cg-plates-530x620-090921.jpeg',
    description1:"A Multi-Cuisine Journey",
    location:"Plates-Jetwin Red",
    description: "Plates is a multi-country, multi-cuisine experience like no other. Enjoy a global culinary tour within a chic, modern setting and sip on a unique range of beverages infused with local ingredients to complement your meal.",
    contactnumber: '(+)94 112467125'
},


    // Add more sections here following the same structure
    // {
    //   title: 'Next Section Title',
    //   image: 'Image URL',
    //   description: 'Description',
    // },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSection((prevSection) => (prevSection === sections.length - 1 ? 0 : prevSection + 1));
    }, 4000); // Change the duration between sections (in milliseconds) here

    return () => clearInterval(interval);
  }, [sections.length]);
    
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

        <section id="home" className="dining-section">
            <div class="text-center">
          <h2> Dine with us </h2>
          <img class="img-fluid" src="https://livedemo00.template-help.com/wt_prod-22403/images/title-decorative-84x8.png" alt="" width="84" height="8" align="center"></img>
          </div>

          <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        
      >
          <div class="container">
        <div class="row">
        <div class="col-lg-6">
        <div class="hero-text">
    <div class="text-center">
    <h1>{sections[currentSection].title}</h1>
    <h3>{sections[currentSection].description1}</h3>
    <h5><LocationOnIcon></LocationOnIcon> {sections[currentSection].location}</h5> 
    
                  <p>{sections[currentSection].description}</p>
                  <br/>
                  <h6> <PhoneIcon></PhoneIcon> {sections[currentSection].contactnumber}</h6>
                  
    </div>
    </div>
    </div>
    
    <div class="col-xl-4 col-lg-5 offset-xl-2 offset-lg-1">
    <img
                className="img-fluid"
                src={sections[currentSection].image}
                alt=""
                width="500"
                height="100"
                align="center"
              />
     

    </div>
    </div>
    </div>
    </motion.div>
    
    
    <CardGroup>
        <Card>
          <Card.Body>
        <Card.Img variant="top" src="https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/page_bottom/1140x710.jpg" />
        <CardImgOverlay>
        <div class="text-center">
          <br/>
           <h4> Dinner At Plates</h4>
           <br/>
          <h4>
          <motion.span
          variants={quoteVariants}
          initial={false}
          animate={quoteAnimation ? 'animate' : 'initial'}
          onAnimationComplete={() => setQuoteAnimation(false)}
        >
          {quotedText}
        </motion.span>
          </h4>
            
</div>
        </CardImgOverlay> 
        </Card.Body>
        </Card>
    </CardGroup>

         </section>

         
        
      
</div>
  
  );
}
export default Dining;
  