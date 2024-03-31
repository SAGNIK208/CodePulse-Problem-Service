const {StatusCodes} = require("http-status-codes");
const BaseError = require("./baseError");

class NotImplementedError extends BaseError{
    constructor(methodName){
        super('NOT_IMPLEMENTED',
        StatusCodes.NOT_IMPLEMENTED,
        `${methodName} is not implemented`,
        {});
    }
}

module.exports = NotImplementedError;