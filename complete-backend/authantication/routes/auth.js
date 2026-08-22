import express from "express";
import User from "../model/user.model.js";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from 'uuid';

import customResponse from "../utils/customResponse.js";

const authRoutes = express.Router();

// signup route
authRoutes.post("/signup", async (req, res) => {
  let { name, email, password } = req.body;

  // basic validation
  if (!name || !email || !password) {
    // return res.json({ message: "All file are required" });
    return customResponse(res, 400, false, "All field are required");
  }

  //check name is minimun 3 character
  if (name.length < 3) {
    return customResponse(
      res,
      400,
      false,
      "Name must be atleast 3 character along",
    );
  }

  // check password is minimum 6 character
  if (password.length < 6) {
    return customResponse(
      res,
      400,
      false,
      "Password must be more than 6 charaters",
    );
  }

  try {
    // check if user already exist
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return customResponse(
        res,
        400,
        false,
        "User already exist, please login instead",
      );
    }

    // hash password creation
    const saltRounds = 10;
    const hashPassword = await bcrypt.hash(password, saltRounds);

    // create new user
    const newUser = new User({ name, email, password: hashPassword });
    const savedUser = await newUser.save();

    return customResponse(
      res,
      200,
      true,
      "User created succefully",
      null,
      savedUser,
    );
  } catch (error) {
    return customResponse(res, 500, false, "Internal server error", error);
  }
});

// singin route
authRoutes.post("/signin", async (req, res) => {
  let { email, password } = req.body;

  try {
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return customResponse(res, 400, false, "Invalid email or password");
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return customResponse(res, 400, false, "Invalid email or password");
    }

    //user us succefully loggedIn here now creating the token

    let token = uuidv4();

    console.log(token);

    return customResponse(res, 200, true, "Signin successful", null, user);
  } catch (error) {
    return customResponse(res, 500, false, "Internal server error", error);
  }
});

// secret1 get api
authRoutes.get("/secret1", (req, res) => {
  return customResponse(
    res,
    200,
    true,
    "You have succefully fetch secret-1 APi",
  );
});

// secret2 get api
authRoutes.get("/secret2", (req, res) => {
  return customResponse(
    res,
    200,
    true,
    "You have succefully fetch secret-2 APi",
  );
});

export default authRoutes;
