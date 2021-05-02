var express = require('express');
var router = express.Router();

const userController = require('../controllers/users-controller.js');
const receiptController = require('../controllers/receipt-controller.js');

// To be developed later

router.post(':id/list-receipt', function(req, res, next) {
    console.log("id is:" + req.params.id);
    console.log("list-receipt function");
    res.render('userpage');
});

router.get('/', function(req, res, next) {
    res.render('userpage');
});

router.get('/list-user-receipt/:id', receiptController.listUserReceipt);

router.get('/list-submit-result',receiptController.listAllResult)

router.get('/list-user-receipt-bydate/:id/:startDate/:endDate', receiptController.listUserReceiptByDate);

router.get('/list-receipt', receiptController.listAllReceipt);


module.exports = router;
