#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "enter first Number", type: "number", name: "firstNumber", },
    { message: "enter second Number", type: "number", name: "secondNumber", },
    { message: "select one of the operation to perform action",
        type: "list",
        name: "operators",
        choices: ["addition", "subtraction", "division", "multiplication",]
    },
]);
if (answer.operators === "addition")
    (console.log(answer.firstNumber + answer.secondNumber));
else if (answer.operators === "subtraction")
    (console.log(answer.firstNumber - answer.secondNumber));
else if (answer.operators === "division")
    (console.log(answer.firstNumber / answer.secondNumber));
else if (answer.operators === "multiplication")
    (console.log(answer.firstNumber * answer.secondNumber));
else
    (console.log("please try correct value"));
