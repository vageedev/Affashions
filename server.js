const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');

const mongoose = require('mongoose');
const config = require('./DATABASE.js');

const fashionRoutes = require('./Fashion/fashion.route');
const reviewRoutes = require('./Reviews/review.route');
const productRoutes = require('./Products/products.route');

mongoose.Promise = global.Promise;
mongoose.connect(config.DATABASE, {useNewUrlParser: true}).then(
    ()=>{console.log('Fashion Database is connected')},
    err => {console.log('Cannot connect to the Fashion database' + err)}
);


app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/fashion', fashionRoutes);
app.use('/review', reviewRoutes);
app.use('/product', productRoutes);

app.listen(PORT, function () {
    console.log('Server is running on port:', PORT);
});
