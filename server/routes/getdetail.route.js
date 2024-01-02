const express = require('express');
const Details = require('../Database/models/details');
//const { authenticate, authorize } = require('../middleware/auth'); // Adjust the path accordingly


const router = express.Router();

router.get('/',  async (req, res) => {
    const details = await Details.find({})
    try{
        res.status(200).json({
            status:'success',
            data:{
                details
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