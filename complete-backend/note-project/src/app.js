
const express = require('express');

const app = express();
app.use(express.json())  // middleware

const notes = [];

/* title, description  */

// this is post api

app.post('/notes', (req, res)=>{  // simple a post api which recieve the data from frontend

  notes.push(req.body)

  res.status(201).json({
    messege: "note created successfully"
  })

})

// now this is get api to fectch all the notes using frontend

app.get('/notes', (req, res)=>{

  res.status(200).json({
    messege: "notes fetch successfully",
    notes: notes
  })


})

module.exports = app;