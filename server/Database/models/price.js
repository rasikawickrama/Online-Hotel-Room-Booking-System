const mongoose = require('mongoose');
const PriceSchema = new mongoose.Schema({
    
    
    title:{
        type:String,
        required:true
    },
    price: {
        type:String,
        required:true
    }
});
const Price = mongoose.model('Price', PriceSchema);

module.exports = Price;