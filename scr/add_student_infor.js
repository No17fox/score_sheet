let Build = require("./build.js");

class AddStudentInfor extends Build{
  constructor() {
    super("学生信息", "格式：姓名，学号，学科：成绩，...");
  }

  verifyStudentInfor(input) {
    let stuInforArr = input.split("，");
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
}

module.exports = AddStudentInfor;