const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({

      firstname:{
        type: String,
        required: true
      },

      lastname:{
        type: String,
        required: true
      },

      email: {
        type: String,
        required: true,
        unique: true,     // Ensures email addresses are unique in the collection
        lowercase: true,  // Stores the email in lowercase
        trim: true,        // Removes leading and trailing whitespaces
        match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    },
       
       country:{
        type: String,
        required: true 
       }, 

    address: {
        type: String,
        required: true 
    },
    city:{
        type: String,
        required: true 
    },

    postalcode:{
        type: String,
        required: true  
    },

    requests:{
        type: String,
        required: true 
    },


    cardnumber: {
        type: Number,
        required: true
    },

    date: {
        type: Date,
        required: true
      },
      cvvnumber: {
        type: Number,
        required: true
    },
    cardname: {
        type: String,
        required: true
    }
});

const Payment = mongoose.model('Payment', PaymentSchema);

module.exports = Payment;
