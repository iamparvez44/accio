import express from "express";
import mongoose from "mongoose";

//schema
import User from "./model/user.model.js";

//routes
import authRoutes from "./routes/auth.js";

let app = express();

//midlewares
app.use(express.json());



let PORT = 3001;

app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://parvezdata44_db_user:TC8r03ps8PnNOmFQ@cluster0.fjnmvyq.mongodb.net/auth",
  )
  .then(() => {
    console.log("Database is connected succefully");
  })
  .catch((error) => {
    console.log(error);
  });
  

//routes call
app.use(authRoutes);

app.listen(PORT, () => {
  console.log("backend is connected succefully");
});
