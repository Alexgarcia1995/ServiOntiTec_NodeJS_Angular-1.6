var router = require('express').Router();
var mongoose = require('mongoose');
var Listado = mongoose.model('services');
var array=[];

router.get('/', function(req, res) {
    var original = Promise.resolve(Listado.db.collections.services.find().toArray());
    var cast = Promise.resolve(original);
    cast.then(function(value) {
        res.send(value);
    });
});

module.exports = router;