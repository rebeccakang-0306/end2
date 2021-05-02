var express = require('express');
var router = express.Router();

const userController = require('../controllers/users-controller.js')
const receiptController = require('../controllers/receipt-controller.js')

/*Get home page */
router.get('/', function(req, res, next) {
  res.render('main');
});

/* USERS ROUTES */
router.get('/get-user', userController.listAllUser);
router.post('/insert-user', userController.createUser);
router.post('/user-login', userController.userLogin);
router.post('/update-user-info/:id', userController.updateUserInfo);
router.post('/delete-user', userController.deleteUser);
router.get('/find-given-user/:id', userController.findGivenUser);


/* RECEIPTS ROUTES */
router.get('/get-receipt', receiptController.listAllReceipt);
router.post('/create-receipt', receiptController.createReceipt);
router.post('/delete-receipt', receiptController.deleteReceipt);
router.post('/delete-survey', receiptController.deleteSurvey);
router.post('/update-receipt', receiptController.updateReceipt);
router.post('/submit-survey', receiptController.submitRate);
router.get('/get-Survey', receiptController.listAllResult);
/* EXPORTS */
module.exports = router;
