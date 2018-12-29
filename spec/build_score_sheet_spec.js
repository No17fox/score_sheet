'use strict';

let BuildScoreSheet = require("../scr/build_score_sheet.js");

let buildScoreSheet = new BuildScoreSheet();

const STU_DATABASE = [{
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
}, {
  name: "王五",
  id: 20160103,
  average: 81.25,
  sum: 325,
  "数学": 80,
  "语文": 80,
  "英语": 70,
  "编程": 95,
}];

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

  it("should have a method to build score report", () => { 
    const INPUT = "20160101,20160102";
    const STU_SEQ_ARR = buildScoreSheet.verifyStudentSeq(INPUT);
    buildScoreSheet.buildScoreReport(STU_SEQ_ARR, STU_DATABASE);

    expect(buildScoreSheet.scoreReport).toEqual({
      students: [{
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
      }],
      average: 327.5,
      median: 327.5
    });
  });

  it("should have a method to print score sheet", () => {
    const INPUT = "20160101,20160102";
    const STU_SEQ_ARR = buildScoreSheet.verifyStudentSeq(INPUT);
    buildScoreSheet.buildScoreReport(STU_SEQ_ARR, STU_DATABASE);

    const RESULT = buildScoreSheet.printScoreSheet();
    const EXPECT = `成绩单
姓名|数学|语文|英语|编程|平均分|总分
========================
张三|75|95|80|80|82.5|330
李四|85|80|70|90|81.25|325
========================
全班总分平均数：327.5
全班总分中位数：327.5`.trim();

    expect(RESULT).toEqual(EXPECT);
  })
});