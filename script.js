'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  //Kada nema unosa
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No number!';
    displayMessage(`⛔ No number!`);
  }

  //Kada igrac pogodi
  else if (guess === secretNumber) {
    displayMessage(`🎉 Correct Number!`);
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    //Kada igrac dobije veci highscore
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  //Kada igrac fula (skracena verzija prevelikog i premalog guessa u odnosu na secretNumber)
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? `📈 Too high!` : `📉 Too low!`);
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage(`😧 You lost the game!`);
      // document.querySelector('.message').textContent = '😧 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }

  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too high!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '😧 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }

  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '😧 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage(`Start guessing...`);
  // document.querySelector('.message').textContent = 'Start guessing...';

  document.querySelector('.number').textContent = '?';

  document.querySelector('.score').textContent = score;

  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
