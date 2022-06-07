const express = require('express');
const app = express();

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use('/api/stuff', (req, res, next) => {
    res.status(201).json({
        message: 'ok !'
      });   
    next()
});

app.post('/Balance', (req, res, next) => {
    


    var balance = require ('./balance.js');
    walletAddress = req.body['walletAddress']
    balance.getBalanceETH(walletAddress).then(res => {console.log(res)});
    //balance.getBalanceETH('0x3866DaD7fb9672e54daD3e4378aEd0Ed3B747866').then(name => {
    //    console.log(name);
    //    })

    res.status(201).json(req.body);
    next()
  });

module.exports = app;
