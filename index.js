let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");

let homeScore = 0;
let guestScore = 0;

function homeBtnPlusOne(){
    homeScore += 1;
    homeScoreEl.textContent = homeScore
}

function homeBtnPlusTwo(){
    homeScore += 2;
    homeScoreEl.textContent = homeScore
}

function homeBtnPlusThree(){
    homeScore += 3;
    homeScoreEl.textContent = homeScore
}

function guestBtnPlusOne(){
    guestScore += 1;
    guestScoreEl.textContent = guestScore
}

function guestBtnPlusTwo(){
    guestScore += 2;
    guestScoreEl.textContent = guestScore
}

function guestBtnPlusThree(){
    guestScore += 3;
    guestScoreEl.textContent = guestScore
}

function newGame(){
    homeScore = 0
    guestScore = 0
    homeScoreEl.textContent = homeScore
    guestScoreEl.textContent = guestScore
}