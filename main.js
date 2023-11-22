// main.js
const QuestionStore = require('./src/questionStore');
const QuestionPaperGenerator = require('./src/questionPaperGenerator');

// Load questions from the question store
const questionStore = new QuestionStore('./data/questions.json');
const questions = questionStore.getQuestions();

// Create a Question Paper Generator
const questionPaperGenerator = new QuestionPaperGenerator(questions);

// Define the question paper requirements
const totalMarks = 100;
const difficultyDistribution = { Easy: 20, Medium: 50, Hard: 30 };

// Generate the question paper
const questionPaper = questionPaperGenerator.generateQuestionPaper(totalMarks, difficultyDistribution);

// Display the question paper
console.log('Question Paper:');
questionPaper.forEach((q) => console.log(`- ${q.question} (${q.difficulty}, ${q.marks} marks)`));
