// Generate a random number between min and max
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Initialize variables
const min = 1;
const max = 100;
const targetNumber = getRandomNumber(min, max);
let attempts = 0;

// Function to check the user's guess
function checkGuess() {
    const guessInput = document.getElementById('guessInput');
    const guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < min || guess > max) {
        setMessage('Please enter a valid number between 1 and 100.', 'red');
        return;
    }

    attempts++;

    if (guess === targetNumber) {
        setMessage(`Congratulations! You guessed the number ${targetNumber} in ${attempts} attempts.`, 'green');
        guessInput.disabled = true;
    } else {
        const hint = guess < targetNumber ? 'higher' : 'lower';
        setMessage(`Incorrect! Try a ${hint} number.`, 'red');
    }

    guessInput.value = '';
}

// Function to set message text and color
function setMessage(message, color) {
    const messageElement = document.getElementById('message');
    messageElement.style.color = color;
    messageElement.textContent = message;
}
