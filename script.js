let min = 0;
let max = 25;

// get variables home
const teamHomePlusBtn = document.getElementById("home-addBtn");
const teamHomeSubtractBtn = document.getElementById("home-subtractBtn");
let showTeamHomeScore = document.getElementById("home-score");
let homeScore = 0;

// get variables away
const teamAwayPlusBtn = document.getElementById("away-addBtn");
const teamAwaySubtractBtn = document.getElementById("away-subtractBtn");
let showTeamAwayScore = document.getElementById("away-score");
let awayScore = 0;

//show result variable
const showResult = document.getElementById("show-result");

teamHomePlusBtn.addEventListener("click", function () {
  homeScore++;
  showTeamHomeScore.textContent = homeScore;
  if (homeScore === 25) {
    showResult.textContent = "HOME wins";
  }

  if (homeScore > 25 || homeScore <= 0) {
    homeScore = 0;
    showTeamHomeScore.textContent = "0";
  }

  return;
});

teamHomeSubtractBtn.addEventListener("click", function () {
  homeScore--;
  showTeamHomeScore.textContent = homeScore;

  if (homeScore > 25 || homeScore <= 0) {
    homeScore = 0;
    showTeamHomeScore.textContent = "0";
  }
});

teamAwayPlusBtn.addEventListener("click", function () {
  awayScore++;
  showTeamAwayScore.textContent = awayScore;
  if (awayScore === 25) {
    showResult.textContent = "AWAY wins";
  }

  if (awayScore > 25 || awayScore <= 0) {
    awayScore = 0;
    showTeamAwayScore.textContent = "0";
  }

  return;
});

teamAwaySubtractBtn.addEventListener("click", function () {
  awayScore--;
  showTeamAwayScore.textContent = awayScore;

  if (awayScore > 25 || awayScore <= 0) {
    awayScore = 0;
    showTeamAwayScore.textContent = "0";
  }
});
