
function customResponse(res, statusCode, success, message, err= null, data = null){

  return res.status(statusCode).json({
    success,
    message,
    err,
    data
  })

}

export default customResponse;