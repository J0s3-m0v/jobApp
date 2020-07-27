var mongoose =require('mongoose');
var Schema = mongoose.Schema;

var JobSchema = Schema({

    title:String,
    description: String,
    keywords: String,
    location: String

});

module.exports = mongoose.model('Job',JobSchema);