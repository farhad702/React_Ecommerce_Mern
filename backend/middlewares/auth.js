const jwt = require("jsonwebtoken");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("./catchAsyncErrors");
const user = require("../models/user");

// Checks if user is authenticated or not
exports.isAuthenticateUser = catchAsyncErrors(async(req,res,next)=>{
    const { token } = req.cookies

    if(!token){
        return next(new ErrorHandler('Login first to access this resource.', 401))
    }

    const decode = jwt.verify(token, process.env.JWT_SECRET)
    req.user = await user.findById(decode.id);

    next()

})

// Handling users roles
exports.authorizeRoles = (...roles) =>{
    return(req,res,next) =>{
        if(!roles.includes(req.user.role)){
            return next(
            new ErrorHandler(`Role(${req.user.role}) is not allowed to access this resource`, 403))
        }
        next()
    }
}