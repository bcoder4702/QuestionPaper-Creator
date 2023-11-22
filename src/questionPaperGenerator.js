// questionPaperGenerator.js
class QuestionPaperGenerator {
    constructor(questions) {
      this.questions = questions;
    }
  
    generateQuestionPaper(totalMarks, difficultyDistribution) {
      const questionPaper = [];
  
      for (const difficulty in difficultyDistribution) {
        const difficultyCount = Math.round((difficultyDistribution[difficulty] / 100) * totalMarks);
  
        const filteredQuestions = this.questions.filter(
          (q) => q.difficulty === difficulty && q.marks <= difficultyCount
        );
  
        questionPaper.push(...filteredQuestions);
      }
  
      return questionPaper;
    }
  }
  
  module.exports = QuestionPaperGenerator;
  