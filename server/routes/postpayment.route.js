const express = require('express');
const Payment = require('../Database/models/payment');

const router = express.Router();

router.post('/',async(req,res)=>{
    try{
        const {cardnumber,date,cvvnumber,cardname,
            firstname,
            lastname,
            email,
            address,
            city,
            country,
            postalcode,
            requests} = (req.body);
        const user = new Payment({cardnumber,date,cvvnumber,cardname,
            firstname,
            lastname,
            email,
            address,
            city,
            country,
            postalcode,
            requests});
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