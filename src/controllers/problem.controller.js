const {StatusCodes} = require("http-status-codes");
const {ProblemRepository} = require("../repositories");
const {ProblemService} = require("../services");

const problemService = new ProblemService(new ProblemRepository());

function pingProblemController(req, res) {
  res.json({
    success: true,
    msg: "Problem Controller is healthy",
  });
}

async function getProblems(req, res,next) {
    try {
        const response = await problemService.getAllProblems();
        return res.status(StatusCodes.OK).json({
            success: true,
            message: 'Successfully fetched all the problems',
            error: {},
            data: response
        });
    } catch(error) {
        next(error);
    }
}

async function getProblem(req, res,next) {
    try {
        const problemId = req.params.id;
        const response = await problemService.getProblem(problemId);
        return res.status(StatusCodes.OK).json({
            success: true,
            message: 'Successfully fetched the problem',
            error: {},
            data: response
        });
    } catch(error) {
        next(error);
    }
}

async function addProblem(req, res,next) {
    try {
        const newproblem = await problemService.createProblem(req.body);
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: 'Successfully created a new problem',
            error: {},
            data: newproblem
        })
    } catch(error) {
        next(error);
    }
}

async function deleteProblem(req, res,next) {
    try {
        const problemId = req.params.id;
        const response = await problemService.getProblem(problemId);
        return res.status(StatusCodes.OK).json({
            success: true,
            message: 'Successfully deleted the problem',
            error: {},
            data: response
        });
    } catch(error) {
        next(error);
    }
}

async function updateProblem(req, res,next) {
    try {
        const newproblem = await problemService.createProblem(req.body);
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: 'Successfully updated a problem',
            error: {},
            data: newproblem
        })
    } catch(error) {
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
