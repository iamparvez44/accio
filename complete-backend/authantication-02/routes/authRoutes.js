import express from "express";
import customResponse from "../util/customResponse.js";
import User from "../model/user.model.js";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";
import test from "../middlewear/test.js";
import custumTokenMiddlewear from "../middlewear/custumTokenMiddlewear.js";

let userRoutes = express.Router();

// signup

userRoutes.post("/create", async (req, res) => {
  const { name, email, password } = req.body;
  // basic validation
  if (!name || !email || !password) {
    return customResponse(
      res,
      400,
      false,
      "All fields are required",
      "Missing fields",
    );
  }

  // check if name is less the 3 characters

  if (name.length < 3) {
    return customResponse(
      res,
      400,
      false,
      "Name should be at least 3 characters long",
      "Invalid name",
    );
  }

  // check if password is less than 6 characters

  if (password.length < 6) {
    return customResponse(
      res,
      400,
      false,
      "Password should be at least 6 characters long",
      "Invalid password",
    );
  }

  // check if user is already exist

  try {
    let existingUser = await User.findOne({ email });

    if (existingUser) {
      return customResponse(
        res,
        400,
        false,
        "User is already Exist, need sign in instead",
      );
    }

    // creating hash password
    let saltRound = 10;
    const hashPassword = await bcrypt.hash(password, saltRound);

    let newUser = new User({ name, email, password: hashPassword });
    let savedUser = await newUser.save();

    return customResponse(
      res,
      200,
      true,
      "Sign Up Succefully",
      null,
      savedUser,
    );
  } catch (error) {
    console.log(error);
    return customResponse(
      res,
      500,
      false,
      "Internal server error",
      error.message,
    );
  }
});

// log in

userRoutes.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return customResponse(res, 400, false, "Invalid username or password");
  }

  let existingUser = await User.findOne({ email });

  if (!existingUser) {
    return customResponse(res, 400, false, "Invalid username or password");
  }

  let isMatch = await bcrypt.compare(password, existingUser.password);

  if (!isMatch) {
    return customResponse(res, 400, false, "Invalid username or password");
  }

  // generate a token at this point

  let token = uuidv4();
  existingUser.token = token;

  let updatedUser = await existingUser.save();

  return customResponse(res, 200, true, "Login Succefully", null, existingUser);
});

// secret api1

userRoutes.get("/secret1", async (req, res) => {
  let token = req.headers.token;

  if (!token) {
    return customResponse(res, 400, false, "Unauthrized");
  }

  let existingUser = await User.findOne({ token });

  if (!existingUser) {
    return customResponse(res, 400, false, "Unauthrized");
  }

  return customResponse(
    res,
    200,
    true,
    "Secret-1 API succefully fatched",
    null,
    existingUser,
  );


  return customResponse(res, 200, true, "Secret-1 API succefully fatched");
});

// secret api2
userRoutes.get("/secret2", custumTokenMiddlewear, (req, res)=>{
  console.log("secret2 routes accedd");
  return customResponse(
    res,
    200,
    true,
    "succefully secret2 api fetched",
    null,
    req.user
  )
})

// logout

userRoutes.delete("/logout", custumTokenMiddlewear, async (req, res) => {
  let existingUser = req.user;
  existingUser.token = null;
  await existingUser.save();

  return customResponse(res, 200, true, "Logged out successfully");
});

export default userRoutes;
