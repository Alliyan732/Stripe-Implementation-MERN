// imports
const express = require('express');
const router = express.Router();


// import controllers
var testController = require('../controllers/test');


// import middlewares


// api routes
router.get('/test', testController.getTest);


// export
module.exports = router;