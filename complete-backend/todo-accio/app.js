import express from "express";

import { uid } from "uid";

const app = express();

app.use(express.json());

const toDoArr = [];

// this api is to add todo
app.post("/create", (req, res) => {
  let { title, description } = req.body;

  if (!title || !description) {
    return res.json({ message: "title or descrioption is empty" });
  }

  let newTodo = {
    id: uid(),
    title: title,
    description: description,
  };

  toDoArr.push(newTodo);

  res.json({
    message: "new todo successfully added",
    data: toDoArr,
  });
});

// this api is to get all the todos

app.get("/AllTodos", (req, res) => {
  res.json({
    message: "succefully fetched all the todos",
    data: toDoArr,
  });
});

// get todo by ID, this is basicaly to get the single todo

app.get('/sigleTodo', (req, res)=>{

let {id} = req.query

if(!id){
  return res.json({message: "id is missing"})
}

let foundItem = toDoArr.find(item => item.id == id)

if(!foundItem){
  return res.json({message: "id is miss-matched"})
}

res.json({
  message: "sigle todo succefully fatched",
  data: foundItem
})

})


// this api is to update the existing todo
app.put('/updateTodo', (req, res)=>{

  let id = req.query.id

  if(!id){
    return res.json({message: "id not found"})
  }

  let {title, description} = req.body

  if(!title || !description){
    return res.json({message: "cannot update because to invelied input"})
  }

  let updateTodo = toDoArr.find(item=> item.id == id)

  if(!updateTodo){
    return res.json({message: "Todo not found"})
  }

  updateTodo.title = title
  updateTodo.description = description

  res.json({
    message: "todo update Successfully",
    data: updateTodo
  })




})


// this api is to delete the todo task

app.delete("/removeTodo", (req, res)=>{

  let id = req.query.id

  if(!id){
    return res.json({message:"id is invelied to delete the todo "})
  }

  let idx = toDoArr.findIndex(item=> item.id == id)

  if(idx== -1){
    return res.json({message: "delete todo not found"})
  }

  toDoArr.splice(idx, 1);

res.json({
  message: "todo deleted successfully",
  data: toDoArr
})



})





app.listen(3000, () => {
  console.log("port is running on 3000 port");
});
