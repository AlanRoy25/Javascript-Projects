// 1 deposit some money
// 2 determine the no of line to bet
// 3 collect the bet
// 4spin the slot machine
// 5 check if the user won
// 6 give the user their winnings
// 7 play again

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = { // these are the symbols each row and columns each column is gonna have and we are randomly gonna select 
    "A": 2,  // KEY : VALUE PAIR
    "B": 4,
    "C": 6,


};

const SYMBOLS_VALUES = { //  The use of an underscore _ in variable names like SYMBOLS_COUNT is a common convention in programming to indicate that a variable is meant to be used as a constant,
    // and its value should not be changed during the execution of the program.

    "A": 5,  // KEY : VALUE PAIR
    "B": 4,
    "C": 3,

};

const deposit = () => {
    while (true) {
        const depositAmount = prompt("Enter a deposit amount: "); //here first actual value is in string so we need to change an int / float
        const numberDepositAmount = parseFloat(depositAmount);

        if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) { // isNan is a function which returns the boolean value and check if it is an number.
            console.log("Invalid Deposit amount , try again.");
        }
        else {
            return numberDepositAmount;
        }
    }
};

const getNumberoflines = () => { //second parameter we are checking on
    while (true) {

        const lines = prompt("Enter the no of lines to bet (1-3): ");
        const Numberoflines = parseFloat(lines);  //here first actual value is in string so we need to change an int / float

        if (isNaN(Numberoflines) || Numberoflines <= 0 || Numberoflines > 3) { // isNan is a function which returns the boolean value and check if it is an number.
            console.log("Invalid Number of lines , try again.");
        }
        else {
            return Numberoflines;
        }
    }
};

const getBet = (balance, lines) => { //third parameter we are checking on is balance to check how much balance they have and how much is left
    while (true) {
        const bet = prompt("Enter the bet per line: ");
        const Numberbet = parseFloat(bet);  //here first actual value is in string so we need to change an int / float
        if (isNaN(Numberbet) || Numberbet <= 0 || Numberbet > balance / lines) { //the function getBet takes two parameters: balance and lines. The purpose of dividing balance by lines is to ensure that the bet amount entered by the user is within a valid range.
            //Balance (after deducting the total bet amount) = Initial balance - (Numberbet * lines) = 10 units - (20 units * 3 lines) = 10 units - 60 units = -50 units.
            console.log("Invalid bet , try again.");
        }
        else {
            return Numberbet;
        }
    }
};

const shuffle = (array) => {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
};
const spin = () => {
    const symbols = [];
    for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
        for (let i = 0; i < count; i++) {
            symbols.push(symbol);
        }
    }

    const reels = [];
    for (let i = 0; i < COLS; i++) {
        const reelsSymbols = [...symbols];
        const shuffledReel = shuffle(reelsSymbols);
        reels.push(shuffledReel);
    }

    return reels;
};


const transpose = (reels) => {

    const rows = [];
    for (let i = 0; i < ROWS; i++) {
        rows.push([]);
        for (let j = 0; j < COLS; j++) {
            rows[i].push(reels[j][i]);
        }

    }
    return rows;
};

const printRows = (rows) => {
    const slotMachineElement = document.getElementById("slotMachine");
    slotMachineElement.innerHTML = '';

    for (let i = 0; i < ROWS; i++) {
        let rowString = "";
        for (let j = 0; j < COLS; j++) {
            rowString += rows[j][i];
            if (j !== COLS - 1) {
                rowString += " | ";
            }
        }
        const rowDiv = document.createElement('div');
        rowDiv.textContent = rowString;
        slotMachineElement.appendChild(rowDiv);
    }
};

const getWinnings = (rows, bet, lines) => {
    let winnings = 0;

    for (let row = 0; row < lines; row++) {
        const symbols = rows[row];
        let allSame = true;

        for (const symbol of symbols) {
            if (symbol != symbols[0]) {
                allSame = false;
                break;
            }
        }

        if (allSame) {
            winnings += bet * SYMBOLS_VALUES[symbols[0]]
        }
    }
    return winnings;
}

const toggleAnimation = () => {
    const rows = document.querySelectorAll('.row');
    rows.forEach(row => row.classList.toggle('animate'));
};

const slotMachineElement = document.getElementById("slotMachine");

const startButton = document.getElementById("startButton");
startButton.addEventListener("click", function () {
    const result = spin();
    animateSymbols(result);
});


const animateSymbols = (result) => {
    // Reset the slot machine content
    slotMachineElement.innerHTML = '';

    const rotationDuration = 2000; // milliseconds

    for (let i = 0; i < ROWS; i++) {
        const rowString = result.map((reel) => reel[i]).join(" | ");
        const rowDiv = document.createElement('div');
        rowDiv.textContent = rowString;

        // Add a class for rotation animation
        rowDiv.classList.add('rotate-animation');

        slotMachineElement.appendChild(rowDiv);
    }

    // After the rotation duration, check for a win
    setTimeout(() => {
        checkForWin(result);
    }, rotationDuration);
};

const checkForWin = (result) => {
    const allEqual = result.every((reel) => reel.every((symbol) => symbol === reel[0]));

    tryAgainButton.style.display = 'block';
    if (allEqual) {
        const congratulationsDiv = document.createElement('div');
        congratulationsDiv.textContent = 'Congratulations! You won!';
        congratulationsDiv.style.fontSize = '24px';
        congratulationsDiv.style.color = 'green';
        slotMachineElement.appendChild(congratulationsDiv);
    }
    
};

const tryAgainButton = document.getElementById("tryAgainButton");
tryAgainButton.addEventListener("click", function () {
    
    window.location.reload();
    
});

const resetGame = () => {
    // Reset any game-related state or elements
    slotMachineElement.innerHTML = '';
};


const game = () => {
    let balance = parseFloat(document.getElementById("betAmountInput").value);
    const linesInput = parseFloat(document.getElementById("linesInput").value);
    const betPerLineInput = parseFloat(document.getElementById("betPerLineInput").value);

    if (isNaN(balance) || isNaN(linesInput) || isNaN(betPerLineInput) || balance <= 0 || linesInput <= 0 || betPerLineInput <= 0) {
        console.log("Invalid input. Please enter valid values.");
        return;
    }

    while (true) {
        console.log("You have a balance of $" + balance);

        //const Numberoflines = parseFloat(linesInput.value);
        //const bet = parseFloat(betPerLineInput.value);
        const Numberoflines = linesInput;
        const bet = betPerLineInput;
        const reels = spin();
        balance -= bet * Numberoflines;
        const rows = transpose(reels);

        printRows(rows);

        const winnings = getWinnings(rows, bet, Numberoflines);
        balance += winnings;

        console.log("You won, $" + winnings);

        if (balance <= 0) {
            console.log("You ran out of money!");
            break;
        }

        const playAgain = confirm("Do you want to play again?");
        if (!playAgain) {
            break;
        }
    }
};
