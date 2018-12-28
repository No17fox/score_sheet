'use strict';

let BuildScoreSheet = require("../scr/build_score_sheet.js");

let buildScoreSheet = new BuildScoreSheet();

describe("BuildScoreSheet", () => {
  it("should have attributes as inputType and prompt", () => { 
    expect(buildScoreSheet.inputType).toEqual("要打印的学生的学号");
    expect(buildScoreSheet.prompt).toEqual("格式：学号，学号，...");
  });

  it("should have a method to print prompt", () => {    
    const RESULT = buildScoreSheet.printPrompt();
    expect(RESULT).toEqual("请输入要打印的学生的学号（格式：学号，学号，...），按回车提交：");
  });

  it("should have a method to verify input", () => {
    const INPUT = "20160101,20160102,20160103,20160104";
    const RESULT = buildScoreSheet.verifyStudentSeq(INPUT);
    expect(RESULT).toEqual([20160101, 20160102, 20160103, 20160104]);
  });

  it("should have a method to verify input", () => {
    const INPUT = "20160101,20160102,张三,20160104";
    const RESULT = buildScoreSheet.verifyStudentSeq(INPUT);
    expect(RESULT).toEqual("请按正确的格式输入要打印的学生的学号（格式：学号，学号，...），按回车提交：");
  });
});