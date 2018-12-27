class Build {
  constructor(inputType, prompt) {
    this.inputType = inputType;
    this.prompt = prompt;
    this.verifyResult = false;
  }

  printPrompt() {
    return(`请输入${this.inputType}（${this.prompt}），按回车提交：`);
  }

  promptIllegalInput() {
    this.verifyResult = false;
    return (`请按正确的格式输入${this.inputType}（${this.prompt}），按回车提交：`);
  }
}

module.exports = Build;