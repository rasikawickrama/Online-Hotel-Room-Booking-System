const express = require('express');
const Message = require('../Database/models/room');


const router = express.Router();

router.put('/:id',  async (req,res) => {
  try {
    const updateFields = {
      price1: req.body.price1,
      price2: req.body.price2,
      price3: req.body.price3,
      price4: req.body.price4,
      price5: req.body.price5,
      price6: req.body.price6,
      singleroomimage: req.body.singleroomimage,
      doubleroomimage: req.body.doubleroomimage,
      familyroomimage: req.body.familyroomimage,
      executiveroomimage: req.body.executiveroomimage,
      vipsuiteroomimage: req.body.vipsuiteroomimage,
      superiorroomimage: req.body.superiorroomimage,
    };

    const updateMessage = await Message.findByIdAndUpdate(
      req.params.id,
      updateFields,
      { new: true, runValidators: true }
    );

    if (!updateMessage) {
      return res.status(404).json({
        status: 'Failed',
        message: 'Room not found'
      });
    }

    res.status(200).json({
      status: 'Success',
      data: {
        updateMessage: updateMessage
      }
    });
  } catch (err) {
    res.status(500).json({
      status: 'Failed',
      message: err.message
    });
  }
});

module.exports = router;
