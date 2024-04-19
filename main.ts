#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(
  chalk.magenta.bold.italic("\n \t || Welcome To Currency Converter || \n ")
);

const currency: any = {
  USD: 1, // base currency
  EUR: 0.91,
  GBP: 0.76,
  INR: 74.57,
  PKR: 280,
};

let user_answer = await inquirer.prompt([
  {
    name: "from",
    message: chalk.blue.italic("Enter from currency"),
    type: "list",
    choices: ["USD", "EUR", "GBR", "INR", "PKR"],
  },
  {
    name: "to",
    message: chalk.blue.italic("Enter to currency"),
    type: "list",
    choices: ["USD", "EUR", "GBR", "INR", "PKR"],
  },
  {
    name: "amount",
    type: "number",
    message: chalk.blue.italic("Enter your amount"),
  },
]);

let fromAmount = currency[user_answer.from]; //exchange rate//
let toAmount = currency[user_answer.to]; // exchange rate//
let amount = user_answer.amount;
let baseAmount = amount / fromAmount; // USD base currency //
let convertedAmount = baseAmount * toAmount;
console.log(
  chalk.yellowBright.bold(`convertedAmount = ${convertedAmount.toFixed(0)}`)
);
