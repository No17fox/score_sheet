'use strict';

let AddStudentInfor = require("../scr/add_student_infor.js");

let addStudentInfor = new AddStudentInfor();

describe("AddStudentInfor", () => {
  it("should have attributes as inputType, prompt", () => { 
    expect(addStudentInfor.inputType).toEqual("学生信息");
    expect(addStudentInfor.prompt).toEqual("格式：姓名，学号，学科：成绩，...");
  });

  it("should have a method to print prompt", () => {    
    const RESULT = addStudentInfor.printPrompt();
    expect(RESULT).toEqual("请输入学生信息（格式：姓名，学号，学科：成绩，...），按回车提交：");
  });

  it("should have a method to parse input", () => {
    const INPUT = "张三，20160101，数学：七十五，语文：95，英语：80，编程：80";
    const RESULT = addStudentInfor.parseInput(INPUT);
    expect(RESULT).toEqual(["张三", "20160101", ["数学", "七十五"], ["语文", "95"], ["英语", "80"], ["编程", "80"]]);
  });

  it("should have a method to parse input", () => {
    const INPUT = "语文：95，语文：95，数学：七十五，：95，英语80，编程：80";
    const RESULT = addStudentInfor.parseInput(INPUT);
    expect(RESULT).toEqual(["语文：95", "语文：95", ["数学", "七十五"], ["", "95"], ["英语80"], ["编程", "80"]]);
  });

  it("should have a method to verify input", () => {
    const INPUT = "张三，20160101";
    const INFOR_ARR = addStudentInfor.parseInput(INPUT);
    const RESULT = addStudentInfor.verifyStudentInfor(INFOR_ARR);
    expect(RESULT).toEqual(["张三", "20160101"]);
  });

  it("should have a method to verify input", () => {
    const INPUT = "张三，20160101，数学：75，语文：95，英语：80，编程：80";
    const INFOR_ARR = addStudentInfor.parseInput(INPUT);
    const RESULT = addStudentInfor.verifyStudentInfor(INFOR_ARR);
    expect(RESULT).toEqual(["张三", "20160101", ["数学", "75"], ["语文", "95"], ["英语", "80"], ["编程", "80"]]);
  });

  it("should have a method to verify input", () => {
    const INPUT = "张三，张三，数学：七十五，语文：95，英语：80，编程：80";
    const INFOR_ARR = addStudentInfor.parseInput(INPUT);
    const RESULT = addStudentInfor.verifyStudentInfor(INFOR_ARR);
    expect(RESULT).toEqual("请按正确的格式输入学生信息（格式：姓名，学号，学科：成绩，...），按回车提交：");
  });

  it("should have a method to verify input", () => {
    const INPUT = "张三，20160101，：75，语文：95，英语：80，编程：80";
    const INFOR_ARR = addStudentInfor.parseInput(INPUT);
    const RESULT = addStudentInfor.verifyStudentInfor(INFOR_ARR);
    expect(RESULT).toEqual("请按正确的格式输入学生信息（格式：姓名，学号，学科：成绩，...），按回车提交：");
  });

  it("should have a method to verify input", () => {
    const INPUT = "张三，20160101，数学：七十五，语文：95，英语：80，编程：80";
    const INFOR_ARR = addStudentInfor.parseInput(INPUT);
    const RESULT = addStudentInfor.verifyStudentInfor(INFOR_ARR);
    expect(RESULT).toEqual("请按正确的格式输入学生信息（格式：姓名，学号，学科：成绩，...），按回车提交：");
  });

  it("should have a method to create student infor object", () => {
    const INPUT = "张三，20160101，数学：75，语文：95，英语：80，编程：80";
    const INFOR_ARR = addStudentInfor.parseInput(INPUT);
    const VERIFY_RESULT = addStudentInfor.verifyStudentInfor(INFOR_ARR);
    const RESULT = addStudentInfor.createStuInforObj(VERIFY_RESULT);
    expect(RESULT).toEqual({
      name: "张三",
      id: 20160101,
      average: 82.5,
      sum: 330,
      "数学": 75,
      "语文": 95,
      "英语": 80,
      "编程": 80,
    });
  });

});