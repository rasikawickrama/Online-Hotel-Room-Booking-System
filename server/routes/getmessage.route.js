const express = require('express');
const Room = require('../Database/models/room');
//const { authenticate, authorize } = require('../middleware/auth'); // Adjust the path accordingly


const router = express.Router();

router.get('/',  async (req, res) => {
    const rooms = await Room.find({})
    try{
        res.status(200).json({
            status:'success',
            data:{
                rooms
            }
        })
    }catch(err){
        res.status(500).json({
            status:'Failed',
            message: err
    })
    }
})

module.exports = router