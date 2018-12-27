let Build = require("./build.js");
let Student = require("../scr/student.js");

class AddStudentInfor extends Build{
  constructor() {
    super("学生信息", "格式：姓名，学号，学科：成绩，...");
  }

  verifyStudentInfor(stuInforStr) {
    let stuInforArr = stuInforStr.split("，");
    if (stuInforArr.length >= 2 && stuInforArr[0] && Number(stuInforArr[1])) {
       if (stuInforArr.length > 2) {
        stuInforArr = this.verifyScoreInfor(stuInforArr);
       }
      return stuInforArr;
    } else {
      return (super.promptIllegalInput());
    }
  }

  verifyScoreInfor(stuInforArr) {
    let scoreArr = stuInforArr.slice(2).map(item => {
      let score = item.split("：");
      if (score.length === 2 && score[0] && Number(score[1])) {
        return score;
      } else {
        return (super.promptIllegalInput());
      }
    });
    return stuInforArr.slice(0, 2).concat(scoreArr);
  }

  createStuInforObj(stuInforArr) {
    let studentInfor = new Student(stuInforArr[0], stuInforArr[1]);
    for (let i = 2; i < stuInforArr.length; i++) {
      studentInfor[stuInforArr[i][0]] = Number(stuInforArr[i][1]);
      studentInfor.sum += studentInfor[stuInforArr[i][0]];
    }
    studentInfor.average = studentInfor.sum / (stuInforArr.length - 2);
    return studentInfor;
  }
}

module.exports = AddStudentInfor;