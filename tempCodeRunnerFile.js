// 1 deposit some money
// 2 determine the no of line to bet
// 3 collect the bet
// 4spin the slot machine
// 5 check if the user won
// 6 give the user their winnings
// 7 play again

const prompt = require("prompt-sync")();  

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = { // these are the symbols each row and columns each column is gonna have and we are randomly gonna select 
    "A":2,  // KEY : VALUE PAIR
    "B":4,
    "C":6,
    "D":8

};

const SYMBOLS_VALUES = { //  The use of an underscore _ in variable names like SYMBOLS_COUNT is a common convention in programming to indicate that a variable is meant to be used as a constant,
     // and its value should not be changed during the execution of the program.

    "A":5,  // KEY : VALUE PAIR
    "B":4,
    "C":3,
    "D":2
};







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

const getNumberoflines =() => { //second parameter we are checking on
    while(true){

    const lines = prompt ("Enter the no of lines to bet (1-3): ");
    const Numberoflines = parseFloat(lines);  //here first actual value is in string so we need to change an int / float

    if (isNaN(Numberoflines) || Numberoflines <=0 || Numberoflines > 3) { // isNan is a function which returns the boolean value and check if it is an number.
        console.log ("Invalid Number of lines , try again.");
    }
    else {
        return Numberoflines;
    }
}
};



const getBet =(balance, lines) => { //third parameter we are checking on is balance to check how much balance they have and how much is left
     

        while(true){

    const bet = prompt ("Enter the bet per line: ");
    const Numberbet = parseFloat(bet);  //here first actual value is in string so we need to change an int / float

    if (isNaN(Numberbet) || Numberbet <=0 || Numberbet > balance /lines) { //the function getBet takes two parameters: balance and lines. The purpose of dividing balance by lines is to ensure that the bet amount entered by the user is within a valid range.
        //Balance (after deducting the total bet amount) = Initial balance - (Numberbet * lines) = 10 units - (20 units * 3 lines) = 10 units - 60 units = -50 units.
        console.log ("Invalid bet , try again.");
    }
    else {
        return Numberbet;
    }
}
};

const spin = () => {
    const symbols = []; // this initialize an empty array called symbols (used to store the symbols during the spin) using const means i m not going to change the value of the array.
    for (const [symbol, count] of Object.entries(SYMBOLS_COUNT) ) {  
        for (let i =0; i < count; i++){
            symbols.push(symbol); // symbols.push(symbol) is called for each symbol, and each time it is called, the symbol is added to the end of the symbols array.
        }
        
    }
    const reels = [[] , [] , []];  // each array will represent our values in the slot colums i.e A A A
    for (let i=0; i < COLS; i++){
        reels.push([]);

        const reelsSymbols = [...symbols]; //coping from the above symbols 
        for (let j =0; j < ROWS; j++) {
            const randomIndex = Math.floor(Math.random() * reelsSymbols.length);
            const selectedSymbol = reelsSymbols[randomIndex];
            reels[i].push(selectedSymbol);
            reelsSymbols.splice(randomIndex,1);
        } 
     }
     return reels;
};

const transpose = (reels) => {
    const rows = [];

    for (let i =0; i< ROWS; i++){
        rows.push([]);
        for (let j =0; j <COLS; j++){
            rows[i].push(reels[j][i]);
        }

    }
    return rows;
};

let balance = deposit(); // now let is used to change the value if incase we can later add / sub or do anything with it .
const Numberoflines = getNumberoflines();
const bet = getBet(balance,Numberoflines);
const reels = spin();
const rows = transpose (reels);
console.log(reels);
console.log(rows);