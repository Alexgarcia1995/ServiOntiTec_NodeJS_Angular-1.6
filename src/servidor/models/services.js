var mongoose = require('mongoose');

var listSchema = new mongoose.Schema({
        name: String,
        city: String,
        lat: String,
        long:String
});

mongoose.model('services', listSchema);