const express = require('express');
const router = express.Router();
const User = require('../models/TransactionItem')

isLoggedIn = (req,res,next) => {
    if (res.locals.loggedIn) {
      next()
    } else {
      res.redirect('/login')
    }
  }

router.get('/transaction',
    isLoggedIn,
    async (req, res, next) => {
        res.render('transaction');
 });
    
module.exports = router;