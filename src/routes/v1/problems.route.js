const express = require("express");
const {problemController} = require("../../controllers");

const problemRouter = express.Router();

problemRouter.get('/health',problemController.pingProblemController);

problemRouter.get('/',problemController.getProblems);

problemRouter.get('/:id',problemController.getProblem);

problemRouter.post('/',problemController.addProblem);

problemRouter.delete('/:id',problemController.deleteProblem);

problemRouter.put('/:id',problemController.updateProblem);


module.exports = {
    problemRouter
}