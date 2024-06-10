'use strict';
const score0EL = document.querySelector('#score--0');
const score1EL = document.querySelector('#score--1');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
let diceEL = document.querySelector('.dice');
const player = document.querySelectorAll('.player');
const currScore0 = document.getElementById('current--0');
const currScore1 = document.getElementById('current--1');
let currentScore = 0;
let fnScore0 = 0;
let fnScore1 = 0;
let playing = true;
let win = 0;
//intial conds
score0EL.textContent = 0;
score1EL.textContent = 0;
diceEL.classList.add('hidden');
//rolling the dice

btnRoll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
    diceEL.classList.remove('hidden');
    diceEL.src = `dice-${dice}.png`;
    if (dice === 1) {
      if (player[0].classList.contains('player--active')) {
        player[0].classList.remove('player--active');
        player[1].classList.add('player--active');
        currentScore = 0;
        currScore0.textContent = currentScore;
      } else {
        player[1].classList.remove('player--active');
        player[0].classList.add('player--active');
        currentScore = 0;
        currScore1.textContent = currentScore;
      }
    } else {
      if (player[0].classList.contains('player--active')) {
        currentScore += dice;
        currScore0.textContent = currentScore;
      } else {
        currentScore += dice;
        currScore1.textContent = currentScore;
      }
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    if (player[0].classList.contains('player--active')) {
      fnScore0 += currentScore;
      score0EL.textContent = fnScore0;
      if (fnScore0 >= 30) {
        player[0].classList.add('player--winner');
        // player[0].classList.add('player--active');
        playing = false;
        diceEL.classList.add('hidden');
        win = 0;
      } else {
        player[0].classList.remove('player--active');
        player[1].classList.add('player--active');
        currentScore = 0;
        currScore0.textContent = currentScore;
      }
    } else {
      fnScore1 += currentScore;
      score1EL.textContent = fnScore1;
      if (fnScore1 >= 30) {
        player[1].classList.add('player--winner');
        // player[1].classList.remove('player--active');
        playing = false;
        diceEL.classList.add('hidden');
        win = 1;
      } else {
        player[1].classList.remove('player--active');
        player[0].classList.add('player--active');
        currentScore = 0;
        currScore1.textContent = currentScore;
      }
    }
  }
});
btnNew.addEventListener('click', function () {
  currentScore = 0;
  currScore0.textContent = currentScore;
  currScore1.textContent = currentScore;
  fnScore0 = 0;
  fnScore1 = 0;
  score0EL.textContent = fnScore0;
  score1EL.textContent = fnScore1;
  player[win].classList.remove('player--winner');
  diceEL.classList.remove('hidden');
  playing = true;
});
