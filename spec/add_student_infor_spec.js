'use strict';

let AddStudentInfor = require("../src/add_student_infor.js");

let addStudentInfor = new AddStudentInfor();

describe("AddStudentInfor", () => {
  it("should have attributes as inputType, prompt", () => { 
    expect(addStudentInfor.inputType).toEqual("学生信息");
    expect(addStudentInfor.prompt).toEqual("格式：姓名，学号，学科：成绩，...");
  });

  it("should have a method to print prompt", () => {    
    const RESULT = addStudentInfor.printPrompt();
    expect(RESULT).toEqual("\n请输入学生信息（格式：姓名，学号，学科：成绩，...），按回车提交：");
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
    expect(RESULT).toEqual(true);
  });

  it("should have a method to verify input", () => {
    const INPUT = "张三，20160101，数学：75，语文：95，英语：80，编程：80";
    const INFOR_ARR = addStudentInfor.parseInput(INPUT);
    const RESULT = addStudentInfor.verifyStudentInfor(INFOR_ARR);
    expect(RESULT).toEqual(true);
  });

  it("should have a method to verify input", () => {
    const INPUT = "张三，张三，数学：七十五，语文：95，英语：80，编程：80";
    const INFOR_ARR = addStudentInfor.parseInput(INPUT);
    const RESULT = addStudentInfor.verifyStudentInfor(INFOR_ARR);
    expect(RESULT).toEqual(false);
  });

  it("should have a method to verify input", () => {
    const INPUT = "张三，20160101，：75，语文：95，英语：80，编程：80";
    const INFOR_ARR = addStudentInfor.parseInput(INPUT);
    const RESULT = addStudentInfor.verifyStudentInfor(INFOR_ARR);
    expect(RESULT).toEqual(false);
  });

  it("should have a method to verify input", () => {
    const INPUT = "张三，20160101，数学：七十五，语文：95，英语：80，编程：80";
    const INFOR_ARR = addStudentInfor.parseInput(INPUT);
    const RESULT = addStudentInfor.verifyStudentInfor(INFOR_ARR);
    expect(RESULT).toEqual(false);
  });

  it("should have a method to create student infor object", () => {
    const INPUT = "张三，20160101，数学：75，语文：95，英语：80，编程：80";
    const INFOR_ARR = addStudentInfor.parseInput(INPUT);
    const VERIFY_RESULT = addStudentInfor.verifyStudentInfor(INFOR_ARR);

    let result;
    if (VERIFY_RESULT === false) {
      addStudentInfor.promptIllegalInput();
    } else {
      result = addStudentInfor.createStuInforObj(INFOR_ARR);
    }
    
    expect(result).toEqual({
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

  it("should have a method to build student infor data base", () => {
    const STU_1 = "张三，20160101，数学：75，语文：95，英语：80，编程：80";
    const STU_1_INFOR_ARR = addStudentInfor.parseInput(STU_1);
    const STU_1_VERIFIED_RESULT = addStudentInfor.verifyStudentInfor(STU_1_INFOR_ARR);

    if (STU_1_VERIFIED_RESULT === false) {
      addStudentInfor.promptIllegalInput();
    } else {
      const STU_1_OBJ = addStudentInfor.createStuInforObj(STU_1_INFOR_ARR);
      addStudentInfor.buildStudentDatabase(STU_1_OBJ);
    }    

    const STU_2 = "李四，20160102，数学：85，语文：80，英语：70，编程：90";
    const STU_2_INFOR_ARR = addStudentInfor.parseInput(STU_2);
    const STU_2_VERIFIED_RESULT = addStudentInfor.verifyStudentInfor(STU_2_INFOR_ARR);

    if (STU_2_VERIFIED_RESULT === false) {
      addStudentInfor.promptIllegalInput();
    } else {
      const STU_2_OBJ = addStudentInfor.createStuInforObj(STU_2_INFOR_ARR);
      addStudentInfor.buildStudentDatabase(STU_2_OBJ);
    }  

    const ALLSTUDENTS = addStudentInfor.stuentDatabase;

    expect(ALLSTUDENTS).toEqual([{
      name: "张三",
      id: 20160101,
      average: 82.5,
      sum: 330,
      "数学": 75,
      "语文": 95,
      "英语": 80,
      "编程": 80,
    }, {
      name: "李四",
      id: 20160102,
      average: 81.25,
      sum: 325,
      "数学": 85,
      "语文": 80,
      "英语": 70,
      "编程": 90,
    }]);
  });

});