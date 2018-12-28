let Build = require("./build.js");
let Student = require("../scr/student.js");

class AddStudentInfor extends Build {
  constructor() {
    super("学生信息", "格式：姓名，学号，学科：成绩，...");
    this.stuentDatabase = [];
  }

  verifyStudentInfor(stuInforArr) {
    let verifyResult;
    let allowedNameAndId = stuInforArr[0] && Number(stuInforArr[1]);
    if (stuInforArr.length === 2 && allowedNameAndId) {
      verifyResult = true;
    } else if (stuInforArr.length > 2 && allowedNameAndId) {
      let scoreArr = stuInforArr.slice(2).reduce((acc, cur) => acc.concat(cur));
      let allowedSubject = scoreArr.filter((item, idx) => idx % 2 === 0).reduce((acc, cur) => acc && cur);
      let allowedScore = scoreArr.filter((item, idx) => idx % 2 === 1).map(item => Number(item)).reduce((acc, cur) => acc && cur);
      verifyResult = (allowedSubject && allowedScore) ? true : false;
    } else {
      verifyResult = false;
    }
    return verifyResult ? stuInforArr : super.promptIllegalInput();
  }

  parseInput(stuInforStr) {
    let stuInforArr = stuInforStr.split("，");
    if (stuInforArr.length > 2) {
      for (let i = 2; i < stuInforArr.length; i++) {
        stuInforArr[i] = stuInforArr[i].split("：");
      }
    }
    return stuInforArr;
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

  buildStudentDatabase(studentInfor) {
    this.stuentDatabase.push(studentInfor);
  }
}

module.exports = AddStudentInfor;