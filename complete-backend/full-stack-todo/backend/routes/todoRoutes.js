import express from 'express'
import Todo from '../models/todo.js';

let todoRoutes = express.Router();

todoRoutes.post('/create', (req, res)=>{

  let {title, description} = req.body

  if(!title || !description){  
    return res.json({
      message: "title and description are required"
    })
  }

  // we have imported schema and it will be use as class

  let newTodo = new Todo({
    title: title,
    description: description
  })

  newTodo.save()
  .then((createdTodo)=>{

    return res.json({
      message: "new todo has created",
      data: createdTodo
    })

  })
  .catch(err=>{
     console.log(err);

  return res.status(500).json({
    message: "Something went wrong"
  });
  })



})

// get all todos

todoRoutes.get('/getAlltodo', async (req, res)=>{

  let alltodos = await Todo.find()
  res.json({
    message: "All todo succefully fetched",
    data: alltodos
  })

})

export default todoRoutes;