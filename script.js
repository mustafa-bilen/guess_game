'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '๐ Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  // ? when there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '๐งจ No Number!';
    displayMessage('๐งจ No Number!');
    // ? when players wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '๐ Correct Number!';
    displayMessage('๐ Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('h1').textContent = 'You win!';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // ? this is when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '๐ Too high!' : '๐ Too low!';
      displayMessage(guess > secretNumber ? '๐ Too high!' : '๐ Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '๐ฃ You lost the game!';
      displayMessage('๐ฃ You lost the game!');
      document.querySelector('body').style.backgroundColor = '#fc0328';
      document.querySelector('h1').textContent = 'You lose!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
// } else if (guess > secretNumber) {
//   if (score > 1) {
//     document.querySelector('.message').textContent = '๐ Too high!';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent = '๐ฃ You lost the game!';
//     document.querySelector('body').style.backgroundColor = '#fc0328';
//     document.querySelector('h1').textContent = 'You lose!';
//     document.querySelector('.score').textContent = 0;
//   }
//   // ? this is when guess is so low
// } else if (guess < secretNumber) {
//   if (score > 1) {
//     document.querySelector('.message').textContent = '๐ Too low!';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent = '๐ฃ You lost the game!';
//     document.querySelector('body').style.backgroundColor = '#fc0328';
//     document.querySelector('h1').textContent = 'You lose!';
//     document.querySelector('.score').textContent = 0;
//   }
// }

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('h1').textContent = 'Guess My Number!';
});
