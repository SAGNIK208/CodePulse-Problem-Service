const {StatusCodes} = require("http-status-codes");
function pingProblemController(req, res) {
  res.json({
    success: true,
    msg: "Problem Controller is healthy",
  });
}

function getProblems(req, res) {
    res.status(StatusCodes.NOT_IMPLEMENTED).json({
        success: false,
        msg: "Not Implemented",
    })
}

function getProblem(req, res) {
    res.status(StatusCodes.NOT_IMPLEMENTED).json({
        success: false,
        msg: "Not Implemented",
    })
}

function addProblem(req, res) {
    res.status(StatusCodes.NOT_IMPLEMENTED).json({
        success: false,
        msg: "Not Implemented",
    })
}

function deleteProblem(req, res) {
    res.status(StatusCodes.NOT_IMPLEMENTED).json({
        success: false,
        msg: "Not Implemented",
    })
}

function updateProblem(req, res) {
    res.status(StatusCodes.NOT_IMPLEMENTED).json({
        success: false,
        msg: "Not Implemented",
    })
}

module.exports = {
  pingProblemController,  
  getProblems,
  getProblem,
  addProblem,
  deleteProblem,
  updateProblem,
};
