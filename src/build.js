class Build {
  constructor(inputType, prompt) {
    this.inputType = inputType;
    this.prompt = prompt;
  }

  printPrompt() {
    return(`请输入${this.inputType}(${this.prompt}), 按回车提交: `);
  }

  promptIllegalInput() {
    return (`请按正确的格式输入${this.inputType}(${this.prompt}), 按回车提交: `);
  }
}

module.exports = Build;