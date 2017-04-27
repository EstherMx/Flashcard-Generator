var basicCard = require("./BasicCard.js");
var clozeCard = require("./ClozeCard.js");
var inquirer = require("inquirer");
var fs = require("fs");
var count = 0;




var flashCard = function () {
  count = 0;
  inquirer.prompt([{
    type: "list",
    message: "Choose from the Following:",
    choices: ["Basic", "Cloze"],
    name: "chooseType"
  }]).then(function (answers) {
    if (answers.chooseType === "Basic") {
      questionsForUser();
    } else {
      clozePicked();
    }
  });
}

flashCard();

var questionsForUser = function () {

  if (count < basicCard.basicQuestions.length) {
    inquirer.prompt([{
      name: "input",
      message: basicCard.basicQuestions[count].front
    }]).then(function (answers) {
      if (answers.input === basicCard.basicQuestions[count].back) {
        console.log("Correct");
      } else {
        console.log("Incorrect! The right answer is " + basicCard.basicQuestions[count].back + " Current score is = " + score);
      }
      count++;
      questionsForUser();
    });
  } else {
    var gameOver = true;
    count = 0;
  }
}

var clozePicked = function () {
  if (count < clozeCard.clozeQuestions.length) {
    inquirer.prompt([{
      name: "input",
      message: clozeCard.clozeQuestions[count].text + "_"
    }]).then(function (answers) {
      if (answers.input === clozeCard.clozeQuestions[count].cloze) {
        console.log("Correct!");
      } else {
        console.log("Incorrect! The right answer is " + clozeCard.clozeQuestions[count].text);
      }
      count++;
      clozePicked();
    });
  } else {

    var gameOver = true;
    count = 0;
  }
}



