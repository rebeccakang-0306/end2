var express = require('express');
var router = express.Router();

const receiptController = require('../controllers/receipt-controller.js')

/*Get home page */
router.get('/', function(req, res, next) {
    res.render('index');
});

//Needs changes
router.get('/:id', receiptController.listAllReceipt);
router.get('/:id', receiptController.listAllResult);

module.exports = router;
