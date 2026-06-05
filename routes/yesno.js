var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/', function(req, res, next) {
    var url = 'https://yesno.wtf/api';
    request(url, function(error, response, body) {
        var data = JSON.parse(body);
        // data.answer と data.image を画面（view）に渡します
        res.render('yesno', { answer: data.answer, imageUrl: data.image });
    });
});

module.exports = router;