let Build = require("./build.js");

class BuildScoreSheet extends Build {
  constructor() {
    super("要打印的学生的学号", "格式：学号，学号，...");
  }

  verifyStudentSeq(studentSeq) {
    let studentArr = studentSeq.split(",").map(item => item = Number(item));
    if (studentArr.reduce((acc, cur) => acc && cur)) {
      return studentArr;
    } else {
      return super.promptIllegalInput();
    }
  }
}

module.exports = BuildScoreSheet;