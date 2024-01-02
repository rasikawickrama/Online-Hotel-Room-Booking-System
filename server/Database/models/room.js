const mongoose = require('mongoose');
const RoomSchema = new mongoose.Schema({
    
   
    price1:{
        type:String,
        required:true
    },
    price2:{
        type:String,
        required:true
    },
    price3:{
        type:String,
        requried:true
    },
    price4:{
        type:String,
        requried:true
    },
    price5:{
        type:String,
        requried:true
    },
    price6:{
        type:String,
        requried:true
    },

    singleroomimage:{
        data: Buffer, // Using Buffer to store image data
        contentType: String
    
    },

    doubleroomimage:{
        data: Buffer, // Using Buffer to store image data
        contentType: String
    },
    familyroomimage:{
        data: Buffer, // Using Buffer to store image data
        contentType: String
    
    },

    executiveroomimage:{
        data: Buffer, // Using Buffer to store image data
        contentType: String
    },
    vipsuiteroomimage:{
        data: Buffer, // Using Buffer to store image data
        contentType: String
    },
    superiorroomimage:{
        data: Buffer, // Using Buffer to store image data
        contentType: String
    },
     
    
});
const Room = mongoose.model('Room', RoomSchema);

module.exports = Room;