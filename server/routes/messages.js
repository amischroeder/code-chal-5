var express = require('express');
var router = express.Router();
var Messages = require('../models/messages.schema.js');

router.get('/', function (req, res) {
    Messages.find({}, function (err, data) {
        if (err) {
            console.log('save error:', err);
            res.sendStatus(500);
        } else {
            console.log('found data:', data);
            res.send(data);
        }
    });
});

router.post('/', function (req, res) {
    var savedMessage = new Messages(req.body);

    savedMessage.save(function (err, data) {
        console.log('saved to the collection:', data);
        if (err) {
            console.log('save error:', err);
            res.sendStatus(500);
        } else {
            res.sendStatus(201);
        }
    });

});

module.exports = router;