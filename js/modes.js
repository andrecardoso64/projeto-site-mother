let body = document.getElementById("body");
let dayButton = document.getElementById("day-button");
let nightButton = document.getElementById("night-button");
let abyssButton = document.getElementById("abyss-button");

function dayMode(){
    body.className = "";
    dayButton.hidden = true;
    nightButton.hidden = false;
    abyssButton.hidden = false;
}
function nightMode(){
    body.className = "night-mode";
    dayButton.hidden = false;
    nightButton.hidden = true;
    abyssButton.hidden = false;
}
function abyssMode(){
    body.className = "abyss-mode";
    dayButton.hidden = false;
    nightButton.hidden = false;
    abyssButton.hidden = true;
}