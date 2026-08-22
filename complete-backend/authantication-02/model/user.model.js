import mongoose from "mongoose";

let userSchema = mongoose.Schema({


  name:{
    type: String,
    require: true
  },

  email: {
    type: String,
    require: true,
    unique: true
  },

  password: {
    type: String,
    require: true
  },

  token: {
    type: String,
    default: null
  }

})

let User = mongoose.model("User", userSchema);

export default User;