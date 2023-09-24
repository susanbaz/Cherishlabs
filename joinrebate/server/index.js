// Import the dotenv module at the top
require('dotenv').config();
const express = require('express');
const morgan = require('morgan'); // Add this line
const app = new express();
const PORT = process.env.PORT || 5000; // Correct the capitalization of 'PORT'
const cors=require('cors')
const client = require('./db/client');// Add this line
const usersRouter = require('./api/users');
const productsRouter = require('./api/products');
const ordersRouter = require('./api/orders');
const reviewsRouter = require('./api/reviews');
const categoriesRouter = require('./api/categories');
const messagesRouter = require('./api/messages');
const billingsRouter = require('./api/billings');
const shippingRouter = require('./api/shippings');
const paymentsRouter = require('./api/payments');
const addtocartRouter = require('./api/addtocart');
const addtowishlistRouter = require('./api/addtowishlist');
 // Add this line



app.use(morgan('dev'));
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));  // this line


//import route handlers 
app.use('/api/users', usersRouter); // Add this line
app.use('/api/products', productsRouter); // Add this line
app.use('/api/orders', ordersRouter); // Add this line
app.use('/api/reviews', reviewsRouter);// Add this line
app.use('/api/categories', categoriesRouter); // Add this line
app.use('/api/messages', messagesRouter); // Add this line
app.use('/api/billings', billingsRouter); // Add this line
app.use('/api/shippings', shippingRouter); // Add this line
app.use('/api/payments', paymentsRouter); // Add this line
app.use('/api/addtocart', addtocartRouter); // Add this line
app.use('/api/addtowishlist', addtowishlistRouter); // Add this line




//set up API endpoints




app.listen(PORT, () => {
    client.connect()
   
    console.log(`app listening at http://localhost:${PORT}`)
});
