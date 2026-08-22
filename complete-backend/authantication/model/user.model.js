import mongoose from "mongoose";

const UserSchema = mongoose.Schema({

  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    require: true
  },
  
  token:{
    type: String,
    default: null
  }

});

const User = mongoose.model("User", UserSchema);
export default User;