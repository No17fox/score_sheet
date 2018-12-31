'use strict';

let Build = require("../src/build.js");

const PROMPT = "格式: 姓名, 学号, 学科: 成绩, ...";
const INPUT_TYPE = "学生信息";
const BUILD = new Build(INPUT_TYPE, PROMPT);

describe("Build", () => {
  it("should have attributes as inputType, prompt", () => { 
    expect(BUILD.inputType).toEqual("学生信息");
    expect(BUILD.prompt).toEqual("格式: 姓名, 学号, 学科: 成绩, ...");
  });

  it("should have a method to print prompt", () => {    
    const RESULT = BUILD.printPrompt();
    expect(RESULT).toEqual("\n请输入学生信息(格式: 姓名, 学号, 学科: 成绩, ...), 按回车提交: ");
  });

  it("should have a method to prompt illegal input data", () => {
    const RESULT = BUILD.promptIllegalInput();
    expect(RESULT).toEqual("\n请按正确的格式输入学生信息(格式: 姓名, 学号, 学科: 成绩, ...), 按回车提交: ");
  });
});
