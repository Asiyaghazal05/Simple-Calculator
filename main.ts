// importing inquirer
import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "EnterFirstNumber", type: "number", name: "FirstNumber" },
  { message: "EnterSecondName", type: "number", name: "SecondNumber" },
  {
    message: "select one of the operator to performs action",
    type: "list",
    name: "operator",
    choices: ["addition", "subtraction", "multiplication", "division"],
  },
]);
// console.log(answer);
if (answer.operator === "addition") {
  console.log(answer.FirstNumber + answer.SecondNumber);
} else if (answer.operator === "subtraction") {
  console.log(answer.FirstNumber - answer.SecondNumber);
} else if (answer.operator === "multiplication") {
  console.log(answer.FirstNumber * answer.SecondNumber);
} else if (answer.operator === "division") {
  console.log(answer.FirstNumber / answer.SecondNumber);
}else{
    console.log("please select valid operator")
};
