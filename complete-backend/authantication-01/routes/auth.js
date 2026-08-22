import express from "express";
import User from "../model/user.model.js";
import customResponse from "../utils/customResponse.js";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from 'uuid';

let authRoutes = express.Router();

// signUp user

authRoutes.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  // basic validation
  if ((!name, !email, !password)) {
    return customResponse(res, 400, false, "All field are required");
  }

  // name must be greater than 3 characters
  if (name.length < 3) {
    return customResponse(res, 400, false, "Invelied Name");
  }

  // password must be greater than 6 latter

  if (password.length < 6) {
    return customResponse(
      res,
      400,
      false,
      "Password must be greater than 6 charaters",
    );
  }

  try {
    // checking user not exist already with the same mail
    let existingUser = await User.findOne({ email });

    if (existingUser) {
      return customResponse(
        res,
        400,
        false,
        "User Already Exist, You need to Singn in Instead",
      );
    }

    // for securing password using npm bycrp hash password
    const saltRound = 10;
    const hashPassword = await bcrypt.hash(password, saltRound);

    // creating new user and saving it to database

    let newUser = new User({ name, email, password: hashPassword });
    let savedUser = await newUser.save();

    return customResponse(
      res,
      200,
      true,
      "User Created Succefully",
      null,
      savedUser,
    );
  } catch (error) {
    return customResponse(res, 500, false, "Internal server error", error);
  }
});

// signin

authRoutes.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return customResponse(res, 400, false, "Invail Username or password");
  }

  try {
    // finding user by mail
    const user = await User.findOne({ email });

    if (!user) {
      return customResponse(
        res,
        400,
        false,
        "Invail Username or password, Need to SignUp",
      );
    }

    //finding user by password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return customResponse(res, 400, false, "Invalid email or password");
    }

    // token will generate here

    const token = uuidv4();
    user.token = token;
    const updatedUser = await user.save();



    return customResponse(res, 200, true, "Signin successful", null, updatedUser);
  } catch (error) {
    customResponse(res, 500, false, "Internal server error", error);
  }
});

// screte api 

authRoutes.get('/secret1', async(req, res)=>{

const token = req.headers.token;

if(!token){
  return customResponse(res, 401, false, "Unauthorized: No token provided");
}

const existingUser = await User.findOne({ token });
if(!existingUser){
  return customResponse(res, 401, false, "Unauthorized: Invalid token");
}

return customResponse(res, 200, true, "Access granted to secret API", null, existingUser);


});


export default authRoutes;
