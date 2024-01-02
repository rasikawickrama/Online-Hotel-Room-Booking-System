const mongoose = require('mongoose');

// Define a new schema for user registration
const AdminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['user', 'admin'],  // Only allow these values
        default: 'admin'           // Default to 'user' role
    },
    email: {
        type: String,
        required: true,
        unique: true,     // Ensures email addresses are unique in the collection
        lowercase: true,  // Stores the email in lowercase
        trim: true,        // Removes leading and trailing whitespaces
        match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 128
    },
    phonenumber: {
        type: String,
        match: /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/,
        
        
    },
    
    createdAt: {
        type: Date,
        default: Date.now
    },
   
    
});

// Create a model from the schema
const Admin = mongoose.model('Admin', AdminSchema);

// Export the User model
module.exports = Admin;
