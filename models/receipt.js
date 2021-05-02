// Receipt data schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var receiptSchema = new Schema({
    shop: String,
    buyerID: Schema.Types.ObjectId,
    description: String,
    Price: Number,
    date: Date,
    category: String
}, {collection: 'Receipts'});

mongoose.model('receipts', receiptSchema);

