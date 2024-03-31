class BaseError extends Error{
    constructor(name,status,message,description){
        super(message);
        this.name = name;
        this.status = status;
        this.description = description;
    }
}

module.exports = BaseError;