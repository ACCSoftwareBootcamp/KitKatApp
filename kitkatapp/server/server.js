const cors = require('cors'); 
const express = require('express');
const app = express(); 

const mongoose = require('mongoose')
const keys = require('./config/keys')

//Establish connection to Mongo Kit Kat database
mongoose.connect(keys.mongoURI)
.then(()=>console.log(`${keys.db} database connection established.`))
.catch(error=>console.log(`${keys.db} database connection not established: ${error}`))

//User Schema
let KitKatUsersSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please enter a username"]
  },
  password: {
    type: String,
    required: [true, "Please enter a password"]
  }
})

//User Model
let UsersModel = mongoose.model('KitKatUser', KitKatUsersSchema)

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))

app.post ('/newUsers', (req, res) => {
  console.log(`User saved to ${keys.db}`, req.body)
  UsersModel.create({
    ...req.body }, 
    function(error, result){
      let message = error ? error : result;
      res.json(JSON.stringify(message));
  });
})

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`app on port ${port}`)
})