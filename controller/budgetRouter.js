const express  = require('express');
const router = express();
// grabbing models modules
const budget = require('../models/budget.js');


//GET /budgets
router.get('/', (req,res) => {
    // res.render('index');
    res.render('budget_index.ejs', {
        allBudgets:budget
    })
});
// GET /budgets/:index
router.get('/:index', (req,res) => {
    // res.render('Show');
})
// GET /budgets/new
router.get('/new', (req,res) => {
    //res.render('new');
})
// POST /budgets
router.post('', (req,res) => {

})
module.exports = router;