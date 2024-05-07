#!/usr/bin/env node
import inquirer from "inquirer";
const anwer = await inquirer.prompt({
    name: "sentance",
    type: "input",
    message: "Enter your wordings to count"
});
const words = anwer.sentance.trim().split(" ");
console.log(words);
console.log(`your sentance word count is ${words.length}`);
