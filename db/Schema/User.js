let mongo = require('mongoose')

let Schema = mongo.Schema;

let User =  new Schema({
    login:String,
    password:String,
    email:String
});

module.exports = mongo.model('People',User);