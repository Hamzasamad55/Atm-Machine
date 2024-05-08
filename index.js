#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let myPinCode = 215215;
let pinAnswer = await inquirer.prompt([
    { name: "Pin", type: "number", message: "Please Enter You Pin Code" },
]);
if (pinAnswer.Pin === myPinCode) {
    console.log("Your Pin Code Is Correct!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Select operation to perform action",
            type: "list",
            choices: ["Withdraw Balance", "Check Balance"],
        },
    ]);
    if (operationAns.operation === "Withdraw Balance") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter Amount To Withdraw",
                type: "number",
            },
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Your balance is insufficient");
        }
        else {
            myBalance -= amountAns.amount;
            console.log("Your Remaining Balance Is :" + myBalance);
        }
    }
    else if (operationAns.operation === "Check Balance") {
        console.log("Your balance is: " + myBalance);
    }
}
else {
    console.log("Your Pincode is incorrect");
}
