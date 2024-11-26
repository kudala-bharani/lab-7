let targetNumber;
let attempts;

// Initialize the game when the page loads
window.onload = function() {
    resetGame();
};

function resetGame() {
    targetNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('message').textContent = '';
    document.getElementById('attempts').textContent = 'Attempts: 0';
    document.getElementById('guessInput').value = '';
}

function checkGuess() {
    const guessInput = document.getElementById('guessInput');
    const guess = parseInt(guessInput.value);
    const messageElement = document.getElementById('message');
    
    // Input validation
    if (isNaN(guess) || guess < 1 || guess > 100) {
        messageElement.textContent = 'Please enter a valid number between 1 and 100.';
        messageElement.style.color = 'red';
        return;
    }

    attempts++;
    document.getElementById('attempts').textContent = `Attempts: ${attempts}`;

    // Game logic
    if (guess === targetNumber) {
        messageElement.textContent = `Congratulations! You found the number in ${attempts} attempts!`;
        messageElement.style.color = 'green';
    } else if (guess < targetNumber) {
        messageElement.textContent = 'Too low! Try a higher number.';
        messageElement.style.color = 'blue';
    } else {
        messageElement.textContent = 'Too high! Try a lower number.';
        messageElement.style.color = 'blue';
    }

    // Clear input for next guess
    guessInput.value = '';
    guessInput.focus();
}

// Allow Enter key to submit guess
document.getElementById('guessInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        checkGuess();
    }
});