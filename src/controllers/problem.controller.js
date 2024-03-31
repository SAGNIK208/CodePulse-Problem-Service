const {StatusCodes} = require("http-status-codes");
const NotImplementedError = require("../errors/notImplemented.error")

function pingProblemController(req, res) {
  res.json({
    success: true,
    msg: "Problem Controller is healthy",
  });
}

function getProblems(req, res,next) {
    try{
        throw new NotImplementedError("getProblems");
    }catch(error){
        console.error(error.stack);
        next(error);
    }
}

function getProblem(req, res,next) {
    try{
        throw new NotImplementedError("getProblem");
    }catch(error){
        console.error(error.stack);
        next(error);
    }
}

function addProblem(req, res,next) {
     try{
        throw new NotImplementedError("addProblem");
    }catch(error){
        console.error(error.stack);
        next(error);
    }
}

function deleteProblem(req, res,next) {
     try{
        throw new NotImplementedError("deleteProblem");
    }catch(error){
        console.error(error.stack);
        next(error);
    }
}

function updateProblem(req, res,next) {
     try{
        throw new NotImplementedError("updateProblem");
    }catch(error){
        console.error(error.stack);
        next(error);
    }
}

module.exports = {
  pingProblemController,  
  getProblems,
  getProblem,
  addProblem,
  deleteProblem,
  updateProblem,
};
