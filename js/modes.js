const body = document.getElementById("body");
const dayButton = document.getElementById("day-button");
const nightButton = document.getElementById("night-button");
const abyssButton = document.getElementById("abyss-button");

let currentMode = localStorage.getItem("currentMode");
if (currentMode == null){
    currentMode = "night";
}
console.log(currentMode);

function checkMode(){
    if(currentMode == "day"){
        dayMode();
    } else if (currentMode == "night"){
        nightMode();
    } else{
        abyssMode();
    }
}

function dayMode(){
    body.className = "";
    localStorage.setItem("currentMode","day");
    dayButton.hidden = true;
    nightButton.hidden = false;
    abyssButton.hidden = false;
}
function nightMode(){
    body.className = "night-mode";
    localStorage.setItem("currentMode","night");
    dayButton.hidden = false;
    nightButton.hidden = true;
    abyssButton.hidden = false;
}
function abyssMode(){
    body.className = "abyss-mode";
    localStorage.setItem("currentMode","abyss");
    dayButton.hidden = false;
    nightButton.hidden = false;
    abyssButton.hidden = true;
}

checkMode();
