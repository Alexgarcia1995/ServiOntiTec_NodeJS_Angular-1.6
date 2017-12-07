var router = require('express').Router();
var email= require("../../utils/email");

router.post('/', function(req, res) {
    email.sendEmail(req,res)
});

router.get('/', function(req, res, next) {
    return res.json({tags: "He llegado"});
});

module.exports = router;