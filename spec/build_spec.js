'use strict';

let Build = require("../scr/build.js");

const PROMPT = "格式：姓名，学号，学科：成绩，...";
const INPUT_TYPE = "学生信息";
const BUILD = new Build(INPUT_TYPE, PROMPT);

describe("Build", () => {
  it("should have attributes as inputType, prompt and verifyResult", () => { 
    expect(BUILD.inputType).toEqual("学生信息");
    expect(BUILD.prompt).toEqual("格式：姓名，学号，学科：成绩，...");
    expect(BUILD.verifyResult).toEqual(false);
  });

  it("should have a method to print prompt", () => {    
    const RESULT = BUILD.printPrompt();
    expect(RESULT).toEqual("请输入学生信息（格式：姓名，学号，学科：成绩，...），按回车提交：");
  });

  it("should have a method to prompt illegal input data", () => {
    const RESULT = BUILD.promptIllegalInput();
    expect(BUILD.verifyResult).toEqual(false);
    expect(RESULT).toEqual("请按正确的格式输入学生信息（格式：姓名，学号，学科：成绩，...），按回车提交：");
  });
});
