var express = require('express');
var router = express.Router();

/* GET hello page. */
router.get('/', function(req, res, next) {
  res.render('hello', { title: 'Hello', message: 'はじめてのページ作成' });
});

module.exports = router;