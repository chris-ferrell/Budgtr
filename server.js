const express = require('express');
const app = express();
// ROUTERS below
const budgetRouter = require('./controller/budgetRouter')
//Middle ware
app.set('view engine', 'ejs');

//routers setup
app.use('/budget', budgetRouter);




app.get('/', (req,res) => {
    res.send('Hit main Route!!!');
});


app.listen('3000', (req,res) => {
    console.log('listening... ');
});