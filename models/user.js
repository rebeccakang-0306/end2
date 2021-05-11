// Receipt data schema
var mongoose = require('mongoose');
require('./receipt.js');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    username:  {type: String, required: true, unique: true},
    password: {type: String, required: true},
    dogShow: String,
    dogOwner: String,
    pugOwner:String,
    workDog:String,
    usertype:{type: String, required: true},
}, {collection: 'Users'});

mongoose.model('users', userSchema)

