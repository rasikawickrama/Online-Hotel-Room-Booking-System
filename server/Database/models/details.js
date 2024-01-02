const mongoose = require('mongoose');

const DetailsSchema = new mongoose.Schema({


    title:{
        type:String
      },


  imageUrl: { type: String 
  },
  
  imageData: { type: Buffer 
  },

  offers: [
    {
      type: String,
      details: String, // Or any other fields related to the offer
    }
  ],
  offer: [
    {
      type: String,
      details: String, // Or any other fields related to the offer
    }
  ],
  offer3: [
    {
      type: String,
      details: String, // Or any other fields related to the offer
    }
  ],

  offer4: [
    {
      type: String,
      details: String, // Or any other fields related to the offer
    }
  ],
  
    price: {
        type:String
        
    }
    
    
});
const Details = mongoose.model('Details', DetailsSchema);

module.exports = Details;
    