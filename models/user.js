// Receipt data schema
var mongoose = require('mongoose');
require('./receipt.js');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    username:  {type: String, required: true, unique: true},
    password: {type: String, required: true},
    firstname: String,
    lastname: String,
    usertype:String,
}, {collection: 'Users'});

mongoose.model('users', userSchema)

