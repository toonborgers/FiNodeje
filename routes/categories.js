var express = require('express'),
    router = express.Router(),
    fs = require("fs"),
    config = require('../config.js');

//get all categories
router.get('/', function (req, res) {
    fs.readFile(config.stubDir + '/categories/categories.json', 'utf8', function (err, data) {
        if (err) throw err;
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(data);
        res.end();
    });
});

router.get('/:id', function(req, res){
    console.log('Get category ' + req.params.id);

    fs.readFile(config.stubDir + '/categories/' + req.params.id + '.json', 'utf8', function (err, data) {
        if (err) {
            res.writeHead(404);
            res.write('Category ' + req.params.id + ' not found');
            res.end();
            return;
        }
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(data);
        res.end();
    });
});

module.exports = router;