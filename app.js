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

    default:
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
    }]).then(inputInfor => addStudent(inputInfor.studentInforString));
  } else {
    let studentInforObj = addStudentInfor.createStuInforObj(parsedInfor);
    let addResult = addStudentInfor.buildStudentDatabase(studentInforObj);
    console.log(addResult);
    main();
  }
}

function generateScoreSheet(studentSequence) {
  if (addStudentInfor.stuentDatabase.length === 0) {
    console.log("\n请先添加学生信息");
    main();
  } else {
    let studentSeqArr = buildScoreSheet.verifyStudentSeq(studentSequence);
    buildScoreSheet.buildScoreReport(studentSeqArr, addStudentInfor.stuentDatabase);
    console.log(buildScoreSheet.printScoreSheet());
    main();
  } 
}


