// Receipt data schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var submitSchema1 = new Schema({
    username:String,
    usertype:String,
    Muzzle1:Number,
    Muzzle2:Number,
    Muzzle3:Number,
    Muzzle4:Number,
    Muzzle5:Number,
    Muzzle6:Number,
    Muzzle7:Number,
    Muzzle8:Number,
    Muzzle9:Number,
    Muzzle10:Number,
    Wrinkle10:Number,
    Wrinkle9:Number,
    Wrinkle8:Number,
    Wrinkle7:Number,
    Wrinkle6:Number,
    Wrinkle5:Number,
    Wrinkle4:Number,
    Wrinkle3:Number,
    Wrinkle2:Number,
    Wrinkle1:Number,
    Nostril10:Number,
    Nostril9:Number,
    Nostril8:Number,
    Nostril7:Number,
    Nostril6:Number,
    Nostril5:Number,
    Nostril4:Number,
    Nostril3:Number,
    Nostril2:Number,
    Nostril1:Number,
}, {collection: 'Submit1'});

mongoose.model('submit1', submitSchema1)

