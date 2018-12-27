let Build = require("./build.js");

class BuildScoreSheet extends Build {
  constructor() {
    super("要打印的学生的学号", "格式：学号，学号，...");
  }
}

module.exports = BuildScoreSheet;