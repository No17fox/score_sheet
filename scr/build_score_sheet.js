let Build = require("./build.js");

class BuildScoreSheet extends Build {
  constructor() {
    super("要打印的学生的学号", "格式：学号，学号，...");
    this.scoreReport = {};
  }

  verifyStudentSeq(studentSeq) {
    let studentArr = studentSeq.split(",").map(item => Number(item));
    if (studentArr.reduce((acc, cur) => acc && cur)) {
      return studentArr;
    } else {
      return super.promptIllegalInput();
    }
  }

  buildScoreReport(studentArr, studentDatabase) {
    this.scoreReport.students = studentDatabase.filter(item => studentArr.includes(item.id));
    this.scoreReport.average = this.averageScore(this.scoreReport.students);
    this.scoreReport.median = this.medianScore(this.scoreReport.students);
  }

  averageScore(students) {
    return students.reduce((acc, cur) => acc + cur.sum, 0) / students.length;
  }

  medianScore(students) {
    let totalScore = students.map(item => item.sum);
    totalScore.sort((a, b) => a - b);
    let middle = Math.floor(totalScore.length / 2);
    if (totalScore.length % 2 === 0) {
      return (totalScore[middle] + totalScore[middle - 1]) / 2;
    } else {
      return totalScore[middle];
    }
  }
}

module.exports = BuildScoreSheet;