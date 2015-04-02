var express = require('express'),
    app = express(),
    openingHours = require('./routes/openingHours'),
    categories = require('./routes/categories'),
    products = require('./routes/products');

app.use('/api/v1/openingHours', openingHours);
app.use('/api/v1/categories', categories);
app.use('/api/v1/products', products);

app.listen(9000, function () {
    console.log('App started');
});