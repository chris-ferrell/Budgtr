const express  = require('express');
const router = express();
// grabbing models modules
const budget = require('../models/budget.js');

router.get('/', (req,res) => {
    // res.render('here');
});


module.exports = router;