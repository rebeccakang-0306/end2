const mongoose = require('mongoose');

const uri = "mongodb+srv://yinankang:Kyn123568@cluster0.smfwj.mongodb.net/Comp90055?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true },function(err) {
    if(!err) {
        console.log('Connected to mongo.');
    } else {
        console.log('Failed to connect to mongo.', err);
    }
});

require('./receipt.js');
require('./user.js');
require('./submitresult.js');