'use strict';

var inquirer = require('inquirer');

let printMainMenu = require("./src/print_main_menu.js");
let AddStudentInfor = require("./src/add_student_infor.js");
let BuildScoreSheet = require("./src/build_score_sheet.js");

let addStudentInfor = new AddStudentInfor();
let buildScoreSheet = new BuildScoreSheet();

main();

function main() { 
  inquirer.prompt([{ 
    type: 'input', 
    name: 'choice', 
    message: printMainMenu(), 
  }]).then(answers => jumpToSelectedPage(answers.choice));
}

function jumpToSelectedPage(choice) {
  switch (choice) {
    case "1":
      inquirer.prompt([{ 
        type: 'input', 
        name: 'studentInforString', 
        message: addStudentInfor.printPrompt(), 
      }]).then(input => addStudent(input.studentInforString));
      break;

    case "2":
      inquirer.prompt([{ 
        type: 'input', 
        name: 'studentSequence', 
        message: buildScoreSheet.printPrompt(), 
      }]).then(input => generateScoreSheet(input.studentSequence));
      break;

    case "3":
      break;

    default:
      console.log("\n请输入正确的数字");
      main();
      break;
  }
}

function addStudent(studentInforString) {
  let parsedInfor = addStudentInfor.parseInput(studentInforString);
  let verifiedResult = addStudentInfor.verifyStudentInfor(parsedInfor);
  if (verifiedResult === false) {
    inquirer.prompt([{ 
      type: 'input', 
      name: 'studentInforString', 
      message: addStudentInfor.promptIllegalInput(), 
    }]).then(input => addStudent(input.studentInforString));
  } else {
    let studentInforObj = addStudentInfor.createStuInforObj(parsedInfor);
    addStudentInfor.buildStudentDatabase(studentInforObj);
    console.log(`\n学生${studentInforObj.name}的成绩被添加`);
    main();
  }
}

function generateScoreSheet(studentSequence) {
  let studentSeqArr = buildScoreSheet.verifyStudentSeq(studentSequence);
  if (addStudentInfor.stuentDatabase.length === 0) {
    console.log("\n请先添加学生信息");
    main();
  } else if (!studentSeqArr) {
    inquirer.prompt([{ 
      type: 'input', 
      name: 'studentSequence', 
      message: buildScoreSheet.promptIllegalInput(), 
    }]).then(input => generateScoreSheet(input.studentSequence));
  } else {
    buildScoreSheet.buildScoreReport(studentSeqArr, addStudentInfor.stuentDatabase);
    console.log(buildScoreSheet.printScoreSheet());
    main();
  } 
}


