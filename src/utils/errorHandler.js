const {StatusCodes} = require("http-status-codes");
const BaseError = require("../errors/baseError");

function errorHandler(err,req,res,next){
    if(err instanceof BaseError){
        return res.status(err.status).json({
            "status" : false,
            "message" : err.message,
            "error" : err.description,
            "data" : {}
        });
    }
    else{
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            "status" : false,
            "message" : "Something went wrong",
            "error" : err,
            "data" : {}
        });
    }
}

module.exports = errorHandler;