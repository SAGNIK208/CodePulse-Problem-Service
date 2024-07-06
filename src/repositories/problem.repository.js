const { Problem } = require("../models");

class ProblemRepository {
  async createProblem(problemData) {
    try {
      const problem = await Problem.create({
        title: problemData.title,
        description: problemData.description,
        testCases: problemData.testCases ? problemData.testCases : [],
        difficulty: problemData.difficulty,
        codeStubs: problemData.codeStubs,
        editorial: problemData?.editorial,
      });
      return problem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getAllProblems() {
    try {
      const problems = await Problem.find({});
      return problems;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getProblemById(id) {
    try {
      const problem = await Problem.findById(id);
      return problem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async deleteProblemById(id) {
    try {
      const problem = await Problem.findByIdAndDelete(id);
      return problem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async updateProblemById(id, problemData) {
    try {
      const problem = await Problem.findByIdAndUpdate(id, problemData, {
        new: true,
      });
      return problem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

module.exports = ProblemRepository;
