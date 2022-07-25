const game = () => {
  let pScore = 0;
  let cScore = 0;

  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const pHand = document.querySelector(".player-hand");
    const cHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach((hand) => {
      hand.addEventListener("animationend", function () {
        this.style.animation = "";
      });
    });

    const cOptions = ["rock", "paper", "scissors"];
    options.forEach((options) => {
      options.addEventListener("click", function () {
        const cNumber = Math.floor(Math.random() * 3);
        const cChoice = cOptions[cNumber];

        setTimeout(() => {
          compareHands(this.textContent, cChoice);

          pHand.src = `./assets/${this.textContent}.png`;
          cHand.src = `./assets/${cChoice}.png`;
        }, 2000);

        pHand.style.animation = "shakePlayer 2s ease";
        cHand.style.animation = "shakeComputer 2s ease";
      });
    });
  };
  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };


  const compareHands = (pChoice, cChoice) => {
    const winner = document.querySelector(".winner");
    if (pChoice === cChoice) {
      winner.textContent = "it's a draw";
      return;
    }
    if (pChoice === "rock") {
      if (cChoice === "scissors") {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      }
    }
    if (pChoice === "paper") {
      if (cChoice === "rock") {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      }
    }
    if (pChoice === "scissors") {
      if (cChoice === "paper") {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      }
    }
  };

  startGame();
  playMatch();
};
game();
