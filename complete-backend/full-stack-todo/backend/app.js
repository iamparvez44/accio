import express from 'express'
import mongoose from 'mongoose';


// schema
import Todo from './models/todo.js';


//routes

import todoRoutes from './routes/todoRoutes.js';



const app = express();

app.use(express.json());

let PORT = 3000


mongoose.connect("mongodb+srv://parvezdata44_db_user:TC8r03ps8PnNOmFQ@cluster0.fjnmvyq.mongodb.net/newTry")
.then(()=>{
  console.log("Database is connected succefully")
})
.catch((err)=>console.log("databse connection FAILED", err));




app.use(todoRoutes);


app.listen(PORT, ()=>{
 console.log( `backend is running on ${PORT}`)
});