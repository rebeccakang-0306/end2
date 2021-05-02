

var mongoose = require('mongoose');
require('../models/db.js');
mongoose.set('useFindAndModify', false);
var Receipt = mongoose.model('receipts');
var Users = mongoose.model('users');
var Submit = mongoose.model('submit');

var listAllReceipt = async (req, res) => {
    try {
        const all_receipts = await Receipt.find();
        res.send(all_receipts);

    } catch (err) {
        res.status(400);
        return res.send("Database query failed");
    }
};

var createReceipt = async (req, res) => {
    // Create new receipt from user input form
    try{
        let item = {
            buyerID: req.body.buyerID,
            shop: req.body.shop,
            description: req.body.description,
            Price: req.body.price,
            category: req.body.category,
            date: req.body.date
        };
        console.log(item);
        // Add the new receipt to user collection
        let data = new Receipt(item);
        await data.save();
        await Users.findById(req.body.buyerID,function(err, doc) {
            if (err) {
                console.error('error, no users found');
            }
            doc.receipts.push(data._id);
            doc.save();
        });
        res.send("success");
    }catch(e){
        res.status(400);
        res.send("Cannot add receipt");
    }


};

var listUserReceipt = async (req, res) => {
    var id = req.params.id;
    try {
        const all_receipts = await Users.findById(id).populate('receipts').select('receipts');

        res.send(all_receipts);

    } catch (err) {
        res.status(400);
        return res.send("Database query failed");
    }
};

var listUserReceiptByDate = async (req, res) => {
    var id = req.params.id;
    var startDate = req.params.startDate;
    var endDate = req.params.endDate;
    console.log(req.params);
    try {
        //check that date is not empty
        if(startDate === '' || endDate === '') {
            return res.status(400).json({
                status:'failure',
                message: 'Please ensure you pick two dates'
            })
        }

        const all_receipts = await Receipt.find({
            buyerID: id,
            date: {
                $gte: new Date(new Date(startDate).setHours(0, 0, 0)),
                $lt: new Date(new Date(endDate).setHours(23, 59, 59))
            }
        }).sort({ date: 'asc'})
        console.log(all_receipts);

        res.send(all_receipts);

    } catch (err) {
        res.status(400);
        return res.send("Database query failed");
    }
};

var updateReceipt = async (req, res) => {
    var id = req.body._id;
    var category = req.body.category;
    console.log(id);

    try {
        const receipt = await Receipt.findById(id);
        if (!receipt) {
            res.status(400);
            console.log("Receipt not found");
            return res.send("Author not found");
        }

        receipt.category = category;

        await receipt.save();
        res.redirect('/');
    } catch (err) {
        res.status(400);
        console.log(err);
        return res.send("Database query failed");
    }

    res.redirect('/');
};

var listAllResult = async (req, res) => {
    try {
        const all_result = await Submit.find();
        console.log(all_result);
        res.send(all_result);

    } catch (err) {
        res.status(400);
        return res.send("Database query failed");
    }
};

var deleteReceipt = async (req, res) => {
    let id = req.body.id;
    try{
        await Receipt.findByIdAndRemove(id).exec();
        res.redirect('/userpage');
    }catch(e){
        res.status(400);
        res.send("Deletion failed.");
    }

};

var deleteSurvey = async (req, res) => {
    let id = req.body.id;
    try{
        await Submit.findByIdAndRemove(id).exec();
        res.redirect('/userpage');
    }catch(e){
        res.status(400);
        res.send("Deletion failed.");
    }

};

var submitRate = async (req, res) => {
    // Create new receipt from user input form
    console.log("1111111")
    try{
        let item = {
            username:req.body.username,
            usertype:req.body.usertype,
            photo1f:req.body.photo1f,
            photo1s:req.body.photo1s,
            photo2f:req.body.photo2f,
            photo2s:req.body.photo2s,
            photo3f:req.body.photo3f,
            photo3s:req.body.photo3s,
            photo4f:req.body.photo4f,
            photo4s:req.body.photo4s,
            photo5f:req.body.photo5f,
            photo5s:req.body.photo5s,
            photo6f:req.body.photo6f,
            photo6s:req.body.photo6s,
            photo7f:req.body.photo7f,
            photo7s:req.body.photo7s,
            photo8f:req.body.photo8f,
            photo8s:req.body.photo8s,
            photo9f:req.body.photo9f,
            photo9s:req.body.photo9s,
        };
        // Add the new receipt to user collection
        let data = new Submit(item);
        await data.save();
        res.alert('Thanks');


        await Users.findById(req.body.username,function(err) {
            if (err) {
                console.error('error, no users found');
            }
            console.log(data["_id"]);
            res.send(data["_id"]);

        });
        res.send("success");
    }catch(e){
        res.status(400);
    }
    res.redirect('/');


};




module.exports.listAllReceipt = listAllReceipt;
module.exports.updateReceipt = updateReceipt;
module.exports.listUserReceipt = listUserReceipt;
module.exports.createReceipt = createReceipt;
module.exports.deleteReceipt = deleteReceipt;
module.exports.deleteSurvey = deleteSurvey;
module.exports.listUserReceiptByDate = listUserReceiptByDate;
module.exports.submitRate = submitRate;
module.exports.listAllResult = listAllResult;