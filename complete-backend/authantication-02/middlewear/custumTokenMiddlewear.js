import User from "../model/user.model.js";
import customResponse from "../util/customResponse.js";

async function custumTokenMiddlewear(req, res, next){

  let token = req.headers.token

  if(!token){
    return customResponse(
      res,
      400,
      false,
      "Unauthoried"
    )
  }

  let existingUser = await User.findOne({ token });

  if(!existingUser){
    return customResponse(
      res,
      400,
      false,
      "Unauthoried"
    )
  }

  req.user = existingUser;
  next();

}

export default custumTokenMiddlewear;