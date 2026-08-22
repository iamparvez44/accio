import express from 'express'
import mongoose from 'mongoose';

// Schema
import User from './model/user.model.js';

// routes
import userRoutes from './routes/authRoutes.js';



let app = express();




// middleware to convert data from json to js
app.use(express.json());

// port number
let PORT = 3003;

// database connection 
mongoose.connect("mongodb+srv://parvezdata44_db_user:TC8r03ps8PnNOmFQ@cluster0.fjnmvyq.mongodb.net/mctdayfirst")
.then(()=>{
  console.log("Databse CONNECTED succefully")
})
.catch((error)=>{
  console.log(error, "Database NOT connected !, server issue")
})

// routes
app.use(userRoutes);

// backend connection
app.listen(PORT, ()=>{
  console.log("Backend succefully connected");
})