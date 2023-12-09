// Stripe Route

var express = require('express');
var router = express.Router();

var StripeController = require('../controllers/stripe');

router.post('/process_payment',  StripeController.processPayment);
router.get('/stripe_api_key', StripeController.sendstripeApiKey);

module.exports = router;