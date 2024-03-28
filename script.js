"use strict";

// console.log(document.querySelector('.check').textContent)
// console.log(document.querySelector('.message').textContent = '🚀Correct Guess...')
// console.log(document.querySelector('.score').textContent = 15)
// console.log(document.querySelector('.number').textContent = 13)
// console.log(document.querySelector('.guess').value = 45)

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMsg = (message) => {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  document.querySelector(".number").textContent = secretNumber;

  if (!guess) {
    // document.querySelector(".message").textContent = "⛔No number inputed";
    displayMsg("⛔No number inputed");
  } else if (guess < 1 || guess > 20) {
    displayMsg("⛔Invalid number inputed");
  } else if (guess === secretNumber) {
    displayMsg("🎉Correct Number, do you wish to continue??");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".check").disabled = true;
    if (score > highScore) {
      document.querySelector(".highscore").textContent = score;
    }
  } else if (guess !== secretNumber) {
    displayMsg(guess > secretNumber ? "📈Too high" : "📉Too low");
    score--;
    document.querySelector(".score").textContent = score;
    if (score < 1) {
      document.querySelector(".score").textContent =
        "❌Score exceeded, play again!!";
      document.querySelector(".check").disabled = true;
    }
  }
});

document.querySelector(".again").addEventListener("click", () => {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".check").disabled = false;
  score = 20;
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  displayMsg("Start guessing...");
  document.querySelector(".number").textContent = "?";
});
