import mongoose from "mongoose";

let todoSchema = mongoose.Schema({
  title: {
    type: String
  },
  description: {
    type: String
  }
});

let Todo = mongoose.model("Todo", todoSchema);

export default Todo;

