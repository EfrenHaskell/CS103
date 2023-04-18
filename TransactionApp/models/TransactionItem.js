'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
//const ObjectId = mongoose.Schema.Types.ObjectId;

var transactionItemSchema = Schema( {
  description: String,
  amount: String,
  category: String,
  date: String,
} );

module.exports = mongoose.model( 'transactionItemSchema', transactionItemSchema );
