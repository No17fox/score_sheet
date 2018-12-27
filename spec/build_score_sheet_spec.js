'use strict';

let BuildScoreSheet = require("../scr/build_score_sheet.js");

let buildScoreSheet = new BuildScoreSheet();

describe("BuildScoreSheet", () => {
  it("should have attributes as inputType and prompt", () => { 
    expect(buildScoreSheet.inputType).toEqual("要打印的学生的学号");
    expect(buildScoreSheet.prompt).toEqual("格式：学号，学号，...");
  });

});