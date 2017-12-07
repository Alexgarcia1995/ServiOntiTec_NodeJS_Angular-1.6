var router = require('express').Router();
var fs = require('fs');
var path = require('path');

router.get('/', function(req, res) {
    return res.sendFile(path.resolve('utils/css/footer-distributed-with-address-and-phones.css'));
});

module.exports = router;