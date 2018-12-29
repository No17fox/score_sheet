'use strict';

let printMainMenu = require("../scr/print_main_menu.js");

describe("main menu", () => {
  it("should print main menu", () => {
    const RESULT = printMainMenu();
    const EXPECT = `1. 添加学生
2. 生成成绩单
3. 退出
请输入你的选择（1～3）：`;
    expect(RESULT).toEqual(EXPECT);
  });
});