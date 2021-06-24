"use strict";

// function getLocalTime(){
//     return new Date().toLocaleTimeString();
// }
//
// function updatePercentage(){
//     return new Date().toLocaleTimeString();
// }

function getHours(){
    return new Date().getHours();
}

function zeroHundred(){
    var time = new Date().getHours();
    if (time > 17){
        time = "100%"
    } else if (time < 8) {
        time="0%";
    }
    return time;
}

function percentage(){
    var time = new Date().getHours();
    if (time==8){
        time= "0%";
    } else if (time==9){
        time= "11%";
    } else if (time==10){
        time= "22%";
    } else if (time==11){
        time= "33%";
    } else if (time==12){
        time= "44%";
    } else if (time==13){
        time= "55%";
    } else if (time==14){
        time= "66%";
    } else if (time==15){
        time= "77%";
    } else if (time==16){
        time= "88%";
    } else if (time==17){
        time= "100%";
    } else if (time<8){
        time="0%";
    } else if (time>17){
        time="100%"
    }
    return time;
}

function accurateTime(){
    var hours = new Date().getHours();
    var minutes = new Date().toLocaleTimeString().substring(3,5);
    // return hours;
    return minutes;
}

var minutes = new Date().toLocaleTimeString().substring(3,5);

// var t = d.substring(0,5).replace(':', '');

// document.getElementById("percent").innerText = zeroHundred();
document.getElementById("percent").innerText = percentage();

// document.getElementById("currentTime").innerHTML = getLocalTime();

