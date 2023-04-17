'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

var transactionItemSchema = Schema( {
  description: String,
  ammount: Number,
  category: String,
  date: Date,
} );

module.exports = mongoose.model( 'transactionItemSchema', transactionItemSchema );
