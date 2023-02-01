const ErrorHander = require("../utils/errorhander");
module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";
  if (err.statusCode == 500) console.log("bhai yaha error js me hu ");
  // Wrong Mongodb Id error
  if (err.name == "CastError") {
    const message = ` Resource Not Found. Invalid: ${err.path}`;
    err = new ErrorHander(message, 400);
  }
  // Mongoose Dublicate key Error
  if (err.code === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
    err = new ErrorHander(message, 400);
  }
  // Wrong JWT error
  if (err.name === "JsonWebTokenError") {
    const message = `Json Web Token Is Invalid, Try Again`;
    err = new ErrorHander(message, 400);
  }
  // JWT Expire Error
  if (err.name === "TokenExpiredError") {
    const message = `Json Web Token Is Expired, Try Again`;
    err = new ErrorHander(message, 400);
  }
  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};
