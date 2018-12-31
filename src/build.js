class Build {
  constructor(inputType, prompt) {
    this.inputType = inputType;
    this.prompt = prompt;
  }

  printPrompt() {
    return(`\n请输入${this.inputType}(${this.prompt}), 按回车提交: `);
  }

  promptIllegalInput() {
    return (`\n请按正确的格式输入${this.inputType}(${this.prompt}), 按回车提交: `);
  }
}

module.exports = Build;