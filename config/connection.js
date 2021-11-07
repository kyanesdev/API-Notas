const mongoose = require('mongoose');
require('dotenv').config();

var MONGO_DB = process.env.MONGO_DB_URI;

//MONGO_DB.toString();
const connectionString = MONGO_DB;
mongoose.connect(connectionString)
  .then(() => {
    console.log('Connected database')
  }).catch(err => {
    console.log(err)
  })

  