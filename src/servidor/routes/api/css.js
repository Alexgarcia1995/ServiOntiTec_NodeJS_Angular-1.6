var router = require('express').Router();
var fs = require('fs');
var path = require('path');

router.get('/', function(req, res) {
    return res.sendFile(path.resolve('utils/css/main.css'));
});

module.exports = router;