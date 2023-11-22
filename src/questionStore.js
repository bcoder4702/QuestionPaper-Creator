// questionStore.js
const fs = require('fs');

class QuestionStore {
  constructor(filePath) {
    this.questions = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  }

  getQuestions() {
    return this.questions;
  }
}

module.exports = QuestionStore;
