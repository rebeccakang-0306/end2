// Receipt data schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var submitSchema = new Schema({
    username:  {type: String, required: true, unique: true},
    usertype:String,
    Muzzlue1:Number,
    Muzzlue2:Number,
    Muzzlue3:Number,
    Muzzlue4:Number,
    Muzzlue5:Number,
    Muzzlue6:Number,
    Wrinkle6:Number,
    Wrinkle5:Number,
    Wrinkle4:Number,
    Wrinkle3:Number,
    Wrinkle2:Number,
    Wrinkle1:Number,
}, {collection: 'Submit'});

mongoose.model('submit', submitSchema)

