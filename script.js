/* Variáveis */
let scorePx = document.getElementById('score-px');
let scorePo = document.getElementById('score-po');
const btnGame = document.querySelectorAll('button#btn');
let player = 'X';
const btnsVerification = [
    [0, 1, 2], // Line 1
    [3, 4, 5], // Line 2
    [6, 7, 8], // Line 3
    [0, 3, 6], // Collumn 1
    [1, 4, 7], // Collumn 2
    [2, 5, 8], // Collumn 3
    [0, 4, 8], // Primary diagonal
    [2, 4, 6], // Secondary diagonal
];

/* Script to add X & O */
btnGame.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        if (btn.innerHTML === '') {
            btn.innerHTML = player;
            player = player === 'X' ? 'O' : 'X'; // Toggles between 'X' and 'O'
            checkWinner(); // Checks if there is a winner after the move
        }
    });
});

/* Function to reset and restart the game and buttons */
function restart() {
    scorePo.innerHTML = '0';
    scorePx.innerHTML = '0';
    reset();
}

function reset() {
    btnGame.forEach(btn => {
        btn.innerHTML = ''; // Resets button content
    });
    player = 'X'; // Resets the player to 'X'
}

/* Function to check the winner */
function checkWinner() {
    let winner = null;

    btnsVerification.forEach(combination => {
        const [a, b, c] = combination;

        if (
            btnGame[a].innerHTML &&
            btnGame[a].innerHTML === btnGame[b].innerHTML &&
            btnGame[a].innerHTML === btnGame[c].innerHTML
        ) {
            winner = btnGame[a].innerHTML;
        }
    });

    if (winner) {
        alert(`O vencedor é: ${winner}`);
        updateScore(winner);
        reset();
    } else if ([...btnGame].every(btn => btn.innerHTML !== '')) {
        alert('Empate!');
        reset();
    }
}

/* Function to update the scoreboard */
function updateScore(winner) {
    if (winner === 'X') {
        scorePx.innerHTML = parseInt(scorePx.innerHTML) + 1;
    } else if (winner === 'O') {
        scorePo.innerHTML = parseInt(scorePo.innerHTML) + 1;
    }
}