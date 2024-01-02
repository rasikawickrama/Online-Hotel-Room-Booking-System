const express = require('express');
const Price = require('../Database/models/price');
//const { authenticate, authorize } = require('../middleware/auth'); // Adjust the path accordingly


const router = express.Router();

router.get('/',  async (req, res) => {
    const title = req.user; 
    const price = await Price.findone({title})
    try{
        
        res.status(200).json({
            status:'success',
            data:{
                price
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