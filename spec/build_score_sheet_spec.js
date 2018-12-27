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
});