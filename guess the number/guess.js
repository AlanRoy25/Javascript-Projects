document.addEventListener('DOMContentLoaded', function() {
let randomnumber = parseInt(Math.random() * 100);
const submit = document.querySelector('#sumbitbutton')
const userinput = document.querySelector('#guessfield')
const Guesses = document.querySelector('.Guesses')
const remaining = document.querySelector('.finalresult')
const lowOrhi = document.querySelector('.loworhi')
const results = document.querySelector('.result');
let newGameButton;


let prevGuess = [] // in this we are going to store the array of guesses
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault()
    const guess = parseInt(userinput.value)
    if (playGame) {
      Validateguess(guess)
    }
  })
}

function Validateguess(guess) {
  if (isNaN(guess)) {
    alert('Enter a valid number')
  } else if (guess < 1 || guess > 100) {
    alert('Please enter the numbers between 1 and 100')
  } else {
    prevGuess.push(guess)
    displayGuess(guess)
    checkGuess(guess);
  }
}

function checkGuess(guess) {
  if (guess === randomnumber) {
    endGame(true)
  } else if (guess < randomnumber) {
    displayMessage(`No is tooo Low `)
  } else if (guess > randomnumber) {
    displayMessage(`No is tooo High`)
  }
}
function displayGuess(guess) {
  userinput.value = '';
  Guesses.innerHTML += `${guess} ,`;
  numGuess++;

  const remainingGuesses = Math.max(0, 11 - numGuess);
  remaining.innerHTML = `${remainingGuesses}`;

  if (remainingGuesses === 0) {
    // If there are no remaining guesses, append the random number message
    displayMessage(`Game Over! The Random number was ${randomnumber}`);
    // End the game
    endGame(false);
  }

  // Check if the guess is correct after updating the UI
  if (guess === randomnumber) {
    // If the guess is correct, end the game
    endGame(true);
  }
}

function displayMessage(message) {
  console.log('Displaying message:', message);
 lowOrhi.innerHTML = `<h2>${message}</h2>`;
}




  // if (numGuess > 11) {
  //   lowOrhi.innerHTML = `<h2>Game over! ${message} The random number was ${randomnumber} </h2>`
  // }
  // else {
  //   const remainingGuesses = Math.max(0, 11 - numGuess);
  //   remaining.innerHTML = `${remainingGuesses}`;
  //   lowOrhi.innerHTML = `<h2>${message}</h2>`;
  // }


function endGame(guessCorrect) {
  userinput.value = ''
  userinput.setAttribute('disabled', '')
  submit.setAttribute('disabled', 'true');
  
  if (guessCorrect) {
    displayMessage(`You guessed it right!! The Random number was ${randomnumber}`);
  } else {
    displayMessage(`Game Over! The Random number was ${randomnumber}`);
  }


  const newGameButton = document.createElement('button');
  newGameButton.textContent = 'Start New Game';
  newGameButton.id = 'newGame'; // Assigning an ID to the new game button
  newGameButton.classList.add('button');


  results.appendChild(newGameButton);
  Newgame();
  
  
  playGame = false;

}


function Newgame() {
  newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click', function (e) {
    randomnumber = parseInt(Math.random() * 100);
    displayMessage(`Random Number: ${randomnumber}`)
    prevGuess = []
    numGuess = 1
    Guesses.innerHTML = ''
    remaining.innerHTML = `${11 - numGuess}`
    userinput.removeAttribute('disabled')
    lowOrhi.innerHTML = ''
    results.removeChild(newGameButton);
    submit.removeAttribute('disabled', 'true');
    playGame = true;

   
  })
}
});
