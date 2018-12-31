let Build = require("./build.js");

class BuildScoreSheet extends Build {
  constructor() {
    super("要打印的学生的学号", "格式: 学号, 学号, ...");
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

  printScoreSheet() {
    let studentAttri = this.scoreReport.students.map(item => Object.keys(item));
    let subjects = studentAttri.reduce((acc, cur) => {
      return (acc.length > cur.length) ? acc : cur;
    }).slice(4);

    let students = this.scoreReport.students.map(member => {
      let student = [member.name];
      subjects.map(item => student.push(member[item]));
      student.push(member.average);
      student.push(member.sum);
      return student.join("|");
    });

    const TITLE = "\n成绩单\n";
    const HEAD = `姓名|${subjects.join("|")}|平均分|总分\n`;
    const DIVIDING_LINE = "========================\n";
    const STUDENTS = students.join("\n") + "\n";
    const AVERAGE = `全班总分平均数: ${this.scoreReport.average}\n`;
    const MEDIAN = `全班总分中位数: ${this.scoreReport.median}`;

    return TITLE + HEAD + DIVIDING_LINE + STUDENTS + DIVIDING_LINE + AVERAGE + MEDIAN;
  }
}

module.exports = BuildScoreSheet;