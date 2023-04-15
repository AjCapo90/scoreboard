let homeScore = 0;
let guestScore = 0;
const home = 'home';
const guest = 'guest';
const neither = 'neither';
let startTime = undefined;
let interval = undefined;
let pauseTime = undefined;
let arrayOfUselessTime = [];

const homeScoreEl = document.getElementById("home-score");
const guestScoreEl = document.getElementById("guest-score");
const newGameEl = document.getElementById("new-game-block");
const leaderTeamEl = document.getElementById("leader-team");
const homeResultEl = document.getElementById("home-result-block");
const guestResultEl = document.getElementById("guest-result-block");
const pauseGameEl = document.getElementById("pause-game-block");
const resumeGameEl = document.getElementById("resume-game-block");
const timeEl = document.getElementById("time");


function addOnePointToHome() {
    homeScore += 1;
    homeScoreEl.textContent = homeScore
}

function addTwoPointsToHome() {
    homeScore += 2;
    homeScoreEl.textContent = homeScore
}

function addThreePointsToHome() {
    homeScore += 3;
    homeScoreEl.textContent = homeScore
}

function addOnePointToGuest() {
    guestScore += 1;
    guestScoreEl.textContent = guestScore
}

function addTwoPointsToGuest() {
    guestScore += 2;
    guestScoreEl.textContent = guestScore
}

function addThreePointsToGuest() {
    guestScore += 3;
    guestScoreEl.textContent = guestScore
}

function newGame() {
    startTimer();
    homeScore = 0;
    guestScore = 0;
    homeScoreEl.textContent = homeScore;
    guestScoreEl.textContent = guestScore;
}

function onClickHandler() {
    if(homeScore > guestScore) {
        leaderTeamEl.textContent = home;
        guestResultEl.style.border = 'none';
        homeResultEl.style.border = "1px solid #F94F6D";
    } else if (homeScore === guestScore) {
        leaderTeamEl.textContent = neither;
        guestResultEl.style.border = 'none';
        homeResultEl.style.border = 'none';
    } else {
        leaderTeamEl.textContent = guest;
        guestResultEl.style.border = "1px solid #F94F6D"
        homeResultEl.style.border = 'none';
    }
}

document.addEventListener("click", onClickHandler);

function startTimer() {
    newGameEl.classList.add(['invisible']);
    resumeGameEl.classList.add(['invisible']);
    pauseGameEl.classList.remove(['invisible']);
    startTime = Date.now();
    arrayOfUselessTime = [];
    interval = setInterval(function(){
        updateDisplay(Date.now() - startTime);
    });
}

function pauseTimer(id) {
    pauseGameEl.classList.add(['invisible']);
    newGameEl.classList.remove(['invisible']);
    resumeGameEl.classList.remove(['invisible']);
    pauseTime = Date.now();
    clearInterval(id);
}

function resumeTimer() {
    pauseGameEl.classList.remove(['invisible']);
    newGameEl.classList.add(['invisible']);
    resumeGameEl.classList.add(['invisible']);
    const uselessTime = Date.now() - pauseTime;
    arrayOfUselessTime.push(uselessTime);
    const sumOfUselessTime = arrayOfUselessTime.reduce((acc, val) => acc + val);
    interval = setInterval(function(){
        updateDisplay((Date.now() - startTime) - sumOfUselessTime );
    });
}

function updateDisplay(currentTime){
    timeEl.textContent = currentTime.toLocaleString("en-US");;
}