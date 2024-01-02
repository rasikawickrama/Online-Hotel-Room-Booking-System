const express = require('express');
const Message = require('../Database/models/message');

const router = express.Router();

router.post('/',async(req,res)=>{
    try{
        const {name,email,contactnumber,message} = (req.body);
        const user = new Message({ name,email,contactnumber,message });
        await user.save();
        res.status(200).json({
            status: 'success',
            data:{
                user
            }
        })
    }catch(err){
        res.status(500).json({
            status:'Failed',
            message: (err)
    });
    }

})

module.exports = router