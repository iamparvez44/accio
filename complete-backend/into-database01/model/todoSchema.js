import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({

  title: {

    type: String

  }, 

  description: {
    type: String
  }

});

const Todo = mongoose.model("Todo-01", todoSchema);

export default Todo;

