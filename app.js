var express = require('express'),
    app = express(),
    config = require('./config');

app.use(config.baseUrl + '/openingHours', require('./routes/openingHours'));
app.use(config.baseUrl + '/categories', require('./routes/categories'));
app.use(config.baseUrl + '/products', require('./routes/products'));

app.listen(config.port, function () {
    console.log('App started');
});