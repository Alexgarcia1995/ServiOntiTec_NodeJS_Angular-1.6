var router = require('express').Router();
var email= require("../../utils/email");

router.post('/', function(req, res, next) {
    console.log(req.body);
    var prueba = JSON.stringify(req.body);
    //console.log(prueba);
    email.sendEmail(prueba);
    //////////////// Send the email to client
    // var arrArgument = array(
    //     'type' = 'contact',
    //     'token' = '',
    //     'inputName' = $prueba['inputName'],
    //     'inputEmail' = $prueba['inputEmail'],
    //     'inputMessage' = $prueba['inputMessage']
    // );
    return res.json(prueba);
});

router.get('/', function(req, res, next) {
    console.log("Hola");
    return res.json({tags: "He llegado"});
});

module.exports = router;