

var mongoose = require('mongoose');
require('../models/db.js');
mongoose.set('useFindAndModify', false);
var Receipt = mongoose.model('receipts');
var Users = mongoose.model('users');
var Submit = mongoose.model('submit1');

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
          // userid:req.body.userid,
         username:req.body.username,
            usertype:req.body.usertype,
            Muzzle1:req.body.Muzzle1,
            Muzzle2:req.body.Muzzle2,
            Muzzle3:req.body.Muzzle3,
            Muzzle4:req.body.Muzzle4,
            Muzzle5:req.body.Muzzle5,
            Muzzle6:req.body.Muzzle6,
            Muzzle7:req.body.Muzzle7,
            Muzzle8:req.body.Muzzle8,
            Muzzle9:req.body.Muzzle9,
            Muzzle10:req.body.Muzzle10,
            Wrinkle10:req.body.Wrinkle10,
            Wrinkle9:req.body.Wrinkle9,
            Wrinkle8:req.body.Wrinkle8,
            Wrinkle7:req.body.Wrinkle7,
            Wrinkle6:req.body.Wrinkle6,
            Wrinkle5:req.body.Wrinkle5,
            Wrinkle4:req.body.Wrinkle4,
            Wrinkle3:req.body.Wrinkle3,
            Wrinkle2:req.body.Wrinkle2,
            Wrinkle1:req.body.Wrinkle1,
            Nostril10:req.body.Nostril10,
            Nostril9:req.body.Nostril9,
            Nostril8:req.body.Nostril8,
            Nostril7:req.body.Nostril7,
            Nostril6:req.body.Nostril6,
            Nostril5:req.body.Nostril5,
            Nostril4:req.body.Nostril4,
            Nostril3:req.body.Nostril3,
            Nostril2:req.body.Nostril2,
            Nostril1:req.body.Nostril1,
        };
        // Add the new receipt to user collection
        let data = new Submit(item);
        console.log(data)

        try {
            await data.save();
        } catch (e) {
            console.log(e); // 30
        }


        console.log(1)
        console.log(data["_id"]);
        res.send(data["_id"]);

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