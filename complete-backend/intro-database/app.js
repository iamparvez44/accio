import express from 'express'
import mongoose from 'mongoose';


// schema
import Todo from './models/todoSchema.js';


const app = express();

app.use(express.json());





mongoose.connect("mongodb+srv://parvezdata44_db_user:Pz5QYz5YpkEVvgLN@cluster0.fjnmvyq.mongodb.net/todo-learning")
.then(()=>{console.log("Database connected")})
.catch(()=>{console.log("Database conncetion failed")});


app.listen(3001, ()=>{
  console.log("backend started");
})




// mongodb+srv://parvezdata44_db_user:Pz5QYz5YpkEVvgLN@cluster0.fjnmvyq.mongodb.net/todo-learning

