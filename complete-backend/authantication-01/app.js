import express from "express";
import mongoose from "mongoose";

// Schema
import User from "./model/user.model.js";

//routes
import authRoutes from "./routes/auth.js";

const app = express();

// port
const PORT = 3002;

// middleware
app.use(express.json());

//conncet database
mongoose
  .connect(
    "mongodb+srv://parvezdata44_db_user:TC8r03ps8PnNOmFQ@cluster0.fjnmvyq.mongodb.net/auth_revision",
  )
  .then(() => {
    console.log("DataBase Succefully Connected");
  })
  .catch((error) => {
    console.log(error);
  });

  //routes
  app.use(authRoutes);

// backend connection
app.listen(PORT, () => {
  console.log("Backend connected Succefully");
});
