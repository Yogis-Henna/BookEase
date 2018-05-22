const mongoose = require('mongoose');
const db = require('./index.js');

mongoose.Promise = global.Promise;

const listSchema = new mongoose.Schema({
 
  name: String,
  emailid: String,
  event: String,
  package: String,
  duration: Number
});

const lists = mongoose.model('list', listSchema);
module.exports = lists
