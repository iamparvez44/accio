import express from "express";

import mongoose from "mongoose";

// todo schema model will create here

 import Todo from "./model/todoSchema.js";

 // importing model folder wala schema



const DB_URL =
  "mongodb+srv://parvezdata44_db_user:TC8r03ps8PnNOmFQ@cluster0.fjnmvyq.mongodb.net/";

let app = express();

app.use(express.json());

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("Databse conncet succefully");
  })
  .catch((err) => console.log("failed to connect Database", err));

  
 

  // get api

  app.post('/create', (req, res)=>{

    let {title, description} = req.body

    if(!title || !description){
      return res.json({
        "message": "title or description is empty"
      })
    }

    let newTodo = new Todo({
      title: title,
      description: description
    }) 

    newTodo.save()
    .then((data)=>{
      return res.json({
        message:"new todo created",
        data: data
      })
    })
    .catch(err=>console.log("eror aa gya", err))

  })

  //get api here we will get our data

  app.get("/getalltodos", async (req, res)=>{

    let alltodos = await Todo.find()

    res.json({
      message: "here are the all stored todo in databse",
      data: alltodos
    })

  })


  // get single todo

  app.get('/singletodo/:id', async (req, res)=>{


    let id = req.params.id

    let foundTodo = await Todo.findOne({_id: id})

   if(!foundTodo){
    return res.json({
      message: "id not found"
    })
   }

   res.json({
    message: "sigle todo found successfully",
    data: foundTodo
   })


  })

  // update single todo

  app.put('/updateTodo/:id', async (req, res)=>{

    let id = req.params.id

    let updateTodo = await Todo.findOne({_id: id})

    let {title, description} = req.body

    if(!title || !description){
      return res.json({message: "there missing in title or description"})
    }

    updateTodo.save()
    .then((updatedData)=>{
      res.json({message: "your data successfully", data: updatedData})
    })
    .catch((err)=>{
      res.json({
        message: "failed to update data",
        data: err
      })
    })


    res.json({
      message: "todo updated succesfully",
      data: updateTodo
    })

    

  })

app.listen(3002, () => {
  console.log("backend server has started on 3002 port");
});
