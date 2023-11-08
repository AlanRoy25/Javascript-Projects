// deposit some money
// determine the no of line to bet
// collect the bet
// spin the slot machine
// check if the user won
// give the user their winnings
// play again

const prompt = require("prompt-sync")();  

const deposit =() => {
    while(true){

    
    const depositAmount = prompt ("Enter a deposit amount: "); //here first actual value is in string so we need to change an int / float
        const numberDepositAmount = parseFloat(depositAmount);

        if (isNaN(numberDepositAmount) || numberDepositAmount <=0) { // isNan is a function which returns the boolean value and check if it is an number.
            console.log ("Invalid Deposit amount , try again.");
        }
        else {
            return numberDepositAmount;
        }
    }


};

const depositAmount = deposit();