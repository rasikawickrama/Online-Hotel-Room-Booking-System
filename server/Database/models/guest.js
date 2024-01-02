const mongoose = require('mongoose');

const GuestSchema = new mongoose.Schema({
  checkInDate: {
    type: Date,
    required: true
  },
  checkOutDate: {
    type: Date,
    required: true
  },
  selectroom: {
    type: String,
    required: true
  },
  selectprice: {
    type: String,
    required: true
    // Add additional validation rules if needed
  },
  children: {
    type: Number,
    default: 0 // Default value can be set if needed
  },
  adults: {
    type: Number,
    default: 0 // Default value can be set if needed
  }
});

const Guest = mongoose.model('Guest', GuestSchema);

module.exports = Guest;
