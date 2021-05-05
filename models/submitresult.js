// Receipt data schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var submitSchema = new Schema({
    username:  {type: String, required: true, unique: true},
    usertype:String,
    Muzzle1:Number,
    Muzzle2:Number,
    Muzzle3:Number,
    Muzzle4:Number,
    Muzzle5:Number,
    Muzzle6:Number,
    Wrinkle6:Number,
    Wrinkle5:Number,
    Wrinkle4:Number,
    Wrinkle3:Number,
    Wrinkle2:Number,
    Wrinkle1:Number,
}, {collection: 'Submit'});

mongoose.model('submit', submitSchema)

