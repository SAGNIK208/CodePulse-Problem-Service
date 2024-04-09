const {StatusCodes} = require("http-status-codes");
const BaseError = require("../errors/baseError");
const logger = require("../config/logger.config");

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
        logger.error(err);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            "status" : false,
            "message" : "Something went wrong",
            "error" : err,
            "data" : {}
        });
    }
}

module.exports = errorHandler;