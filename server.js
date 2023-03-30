const express = require('express');
const app = express();
// ROUTERS below
const budgetRouter = require('./controller/budgetRouter')
//Middle ware
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:false}));
//routers setup
app.use('/budgets', budgetRouter);




app.get('/', (req,res) => {
    res.send('Hit main Route!!!');
});


app.listen('3000', (req,res) => {
    console.log('listening... ');
});