const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./Database/connect');
const cors = require('cors');


const getMessageRoute = require('./routes/getmessage.route');
const updateMessageRoute = require('./routes/updateroom.route');
const registerRoute = require('./routes/register.route');
const adregisterRoute = require('./routes/adregister.route');
const aloginRoute = require('./routes/alogin.route');
const login = require('./routes/login.route');
const getDetailsRoute = require('./routes/getdetail.route');
const postMessageRoute = require('./routes/postmessage.route');
const PostBookingsRoute = require('./routes/postbookings.route');
const PostPaymentRoute = require('./routes/postpayment.route');
const PostDetailsRoute = require('./routes/postdetail.route');


require('dotenv').config();
connectDB(process.env.MONGODB_URL);

const app =express();
const PORT = 5000;
app.use(cors());
app.use(bodyParser.json());

app.listen(PORT, () =>{
    console.log(`Server is running on http://localhost:${PORT}`);
});

app.use('/post-message',postMessageRoute);
app.use('/get-message',getMessageRoute);
app.use('/get-details',getDetailsRoute);
app.use('/post-bookings',PostBookingsRoute);
app.use('/update-message',updateMessageRoute);
app.use('/post-payment',PostPaymentRoute);
app.use('/post-details',PostDetailsRoute);
app.use('/register',registerRoute);
app.use('/login',login);
app.use('/adregister',adregisterRoute);
app.use('/alogin',aloginRoute);





