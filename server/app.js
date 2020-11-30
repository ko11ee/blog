const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const keys = require('./keys')
const app = express()


// mongoose.connect('keys.MONGO_URI')
//     .then(() => console.log('mongodb connected...'))
//     .catch(error => console.error(error))

    try {
          mongoose.connect(
          keys.MONGO_URI,
          { useNewUrlParser: true, useUnifiedTopology: true },
          () => console.log(" Mongoose is connected")
        );
      } catch (e) {
        console.log("could not connect");
      }    




app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


module.exports = app
