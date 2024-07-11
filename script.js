document.addEventListener('DOMContentLoaded', function() {
    const choices = ['rock', 'paper', 'scissors'];
    const resultDisplay = document.getElementById('result');
    const choiceElements = document.querySelectorAll('.choice');

    choiceElements.forEach(choice => {
        choice.addEventListener('click', function() {
            const userChoice = this.id;
            const computerChoice = choices[Math.floor(Math.random() * choices.length)];
            const result = determineWinner(userChoice, computerChoice);
            displayResult(userChoice, computerChoice, result);
        });
    });

    function determineWinner(userChoice, computerChoice) {
        if (userChoice === computerChoice) {
            return 'It is a draw!';
        }

        if (
            (userChoice === 'rock' && computerChoice === 'scissors') ||
            (userChoice === 'paper' && computerChoice === 'rock') ||
            (userChoice === 'scissors' && computerChoice === 'paper')
        ) {
            return 'You win!';
        } else {
            return 'You lose!';
        }
    }

    function displayResult(userChoice, computerChoice, result) {
        resultDisplay.innerHTML = `
            <p>You chose: ${userChoice}</p>
            <p>Computer chose: ${computerChoice}</p>
            <h3>${result}</h3>
        `;
    }
});
