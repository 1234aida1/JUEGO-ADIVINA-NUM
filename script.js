let randomNumber = Math.floor(Math.random() * 101);
const resultText = document.getElementById('result');
const guessInput = document.getElementById('guess');
const submitButton = document.getElementById('submit');
const restartButton = document.getElementById('restart');

submitButton.addEventListener('click', () => {
    const userGuess = parseInt(guessInput.value);
    if (isNaN(userGuess) || userGuess < 0 || userGuess > 100) {
        resultText.textContent = 'Por favor, introduce un número válido entre 0 y 100.';
    } else if (userGuess < randomNumber) {
        resultText.textContent = 'DEMASIADO BAJO. Intenta de nuevo.';
    } else if (userGuess > randomNumber) {
        resultText.textContent = 'DEMASIADO ALTO. Intenta de nuevo.';
    } else {
        resultText.textContent = '¡FELICIDADES! ADIVINAST EL NUMERO.';
        submitButton.style.display = 'none';
        restartButton.style.display = 'block';
    }
});

restartButton.addEventListener('click', () => {
    randomNumber = Math.floor(Math.random() * 101);
    resultText.textContent = '';
    guessInput.value = '';
    submitButton.style.display = 'block';
    restartButton.style.display = 'none';
});