const express = require('express');
const Guest = require('../Database/models/guest');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const {
      checkInDate,
      checkOutDate,
      selectroom,
      selectprice,
      children,
      adults
      
    } = req.body;

    console.log(req.body); // Check the received data in console

    const user = new Guest({
      checkInDate,
      checkOutDate,
      selectroom,
      selectprice,
      children,
      adults
    });

    await user.save();

    res.status(200).json({
      status: 'success',
      data: {
        user
      }
    });
  } catch (err) {
    console.error(err); // Log the error for debugging purposes
    res.status(500).json({
      status: 'Failed',
      message: err.message // Send the error message in response
    });
  }
});

module.exports = router;
