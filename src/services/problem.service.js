const {markdownSanitize} = require("../utils");
const {NotFound}=require("../errors");
const logger = require("../config/logger.config");

class ProblemService {

    constructor(problemRepository){
        this.problemRepository = problemRepository;
    }

    async createProblem(problemData) {
        problemData.description = markdownSanitize(problemData.description);

        const problem = await this.problemRepository.createProblem(problemData);

        return problem;
    }

    async getAllProblems() {
        const problems = await this.problemRepository.getAllProblems();
        return problems;
    }

    async getProblem(problemId) {
        const problem = await this.problemRepository.getProblemById(problemId);
        if(!problem){
            throw new NotFound("Problem",problemId);
        }
        return problem;
    }

    async deleteProblem(problemId){
        const problem = await this.problemRepository.deleteProblemById(problemId);
        if(!problem){
            throw new NotFound("Problem",problemId);
        }
        return problem;
    }

    async updateProblem(problemId,problemData){
        const problem = await this.problemRepository.updateProblemById(problemId,problemData);
        if(!problem){
            throw new NotFound("Problem",problemId);
        }
        return problem;
    }

}

module.exports = ProblemService;