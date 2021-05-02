// Receipt data schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var submitSchema = new Schema({
    username:  {type: String, required: true, unique: true},
    usertype:String,
    photo1f:Number,
    photo1s:Number,
    photo2f:Number,
    photo2s:Number,
    photo3f:Number,
    photo3s:Number,
    photo4f:Number,
    photo4s:Number,
    photo5f:Number,
    photo5s:Number,
    photo6f:Number,
    photo6s:Number,
    photo7f:Number,
    photo7s:Number,
    photo8f:Number,
    photo8s:Number,
    photo9f:Number,
    photo9s:Number,
}, {collection: 'Submit'});

mongoose.model('submit', submitSchema)

