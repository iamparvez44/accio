function customResponse(
  res,
  statusCode,
  success,
  message,
  error = null,
  data = null,
) {
  return res.status(statusCode).json({
    success,
    message,
    error,
    data,
  });
}

export default customResponse
