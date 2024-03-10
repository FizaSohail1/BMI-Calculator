// BMI calculator
import inquirer from "inquirer";
const weight = await inquirer.prompt({
    name: 'weightinKG',
    type: 'number',
    message: 'Enter Your weight:'
});
const height = await inquirer.prompt({
    name: 'Heightinmeters',
    type: 'number',
    message: 'Enter your height:'
});
let BMI = weight.weightinKG / (height.Heightinmeters * height.Heightinmeters);
console.log(`Your BMI is:${BMI} `);
