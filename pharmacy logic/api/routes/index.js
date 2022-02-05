const router = require('express').Router();
const authenticator = require('../helpers/authchecker').authenticator;
const prescriptions = require('./prescriptions');
const drugs = require('./drugs');
const grn =require('./goodReceivedNotes');
const orders= require('./orders');
const requests=require('./requests');
const drugBatch = require('./drugBatch');

// use the auth middleware to check for jwt token
// router.use(authenticator);

router.use('/prescriptions', prescriptions);
router.use('/drugs', drugs);
router.use('/grn',grn);
router.use('/orders',orders);
router.use('/requests',requests);
router.use('/drugsBatch',drugBatch);


// default route
router.use('/', (req, res)  => {
  //  res.status(404).send("Sorry Koombiyo-Pharmacy couldn't find that page !");
});

module.exports = router;