let userScore = 0;
let computerScore = 0;

function playGame(userChoice) {
    const choices = { snake: 1, water: -1, gun: 0 };
    const reversedChoices = { 1: "snake", "-1": "water", 0: "gun" };
    
    const computerChoice = Object.keys(choices)[Math.floor(Math.random() * 3)];
    const user = choices[userChoice];
    const computer = choices[computerChoice];
    
    const resultElement = document.getElementById("result");
    const yourScoreElement = document.getElementById("your-score");
    const computerScoreElement = document.getElementById("computer-score");
    
    let resultMessage = `You chose: ${userChoice} <br> Computer chose: ${computerChoice} <br>`;
    let result;

    if (user === computer) {
        result = "draw";
        resultMessage += "It's a Draw!";
        playSound("draw");
    } else if ((user === 1 && computer === -1) || (user === 0 && computer === 1) || (user === -1 && computer === 0)) {
        result = "win";
        resultMessage += "You Win!";
        userScore++;
        playSound("win");
    } else {
        result = "lose";
        resultMessage += "You Lose!";
        computerScore++;
        playSound("lose");
    }

    resultElement.innerHTML = resultMessage;
    yourScoreElement.textContent = userScore;
    computerScoreElement.textContent = computerScore;
    
    animateResult(result);
}

// function playSound(result) {
//     const soundMap = {
//         win: "win-sound",
//         lose: "lose-sound",
//         draw: "draw-sound"
//     };
//     const sound = document.getElementById(soundMap[result]);
//     if (sound) {
//         sound.play().catch(error => console.log("Error playing sound:", error));
//     }
// }

// Function to play the appropriate sound based on the game outcome
function playSound(outcome) {
    if (outcome === 'win') {
        document.getElementById('win-sound').play();
    } else if (outcome === 'lose') {
        document.getElementById('lose-sound').play();
    } else if (outcome === 'draw') {
        document.getElementById('draw-sound').play();
    }
}

// Example of triggering sound after a user clicks a button
document.getElementById('snake-button').addEventListener('click', function() {
    playSound('win');  // Replace 'win' with actual game logic
});


// document.getElementById('your-button-id').addEventListener('click', function() {
//     document.getElementById('win-sound').play();
// });



function animateResult(result) {
    const resultElement = document.getElementById("result");
    resultElement.classList.remove("win", "lose", "draw");
    resultElement.classList.add(result);
    
    // Add a brief animation for visual effect
    resultElement.style.transform = "scale(1.5)";
    setTimeout(() => {
        resultElement.style.transform = "scale(1)";
    }, 300);
}
