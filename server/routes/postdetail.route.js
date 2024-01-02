const express = require('express');
const Message = require('../Database/models/details');
const axios = require('axios');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        // Destructure fields from the request body
        const { title, imageUrl, offers,offer,offer3,offer4,price } = req.body;
       // Extract base64 data and convert it to Buffer
       const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
       const imageData = Buffer.from(response.data, 'binary');
   
        // Create a new instance of the Message model
        const message = new Message({ title, imageUrl, offers,offer,offer3,offer4, price,imageData });

        // Save the message to the database
        await message.save();

        // Return a success response with the saved message data
        res.status(200).json({
            status: 'success',
            data: {
                message
            }
        });
    } catch (err) {
        // Log the error for debugging purposes
        console.error(err);

        // Return an error response
        res.status(500).json({
            status: 'failed',
            message: 'Failed to save the message' // You can modify the message as needed
        });
    }
});

module.exports = router;
