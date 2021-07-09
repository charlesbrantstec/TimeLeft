"use strict";

function getHours(){
    return new Date().getHours();
}

function zeroHundred(){
    let time = new Date().getHours();
    if (time > 17){
        time = "100%"
    } else if (time < 8) {
        time="0%";
    }
    return time;
}

function percentage(){
    let time = new Date().getHours();
    if (time===8){
        time= "0%";
    } else if (time===9){
        time= "11%";
    } else if (time===10){
        time= "22%";
    } else if (time===11){
        time= "33%";
    } else if (time===12){
        time= "44%";
    } else if (time===13){
        time= "55%";
    } else if (time===14){
        time= "66%";
    } else if (time===15){
        time= "77%";
    } else if (time===16){
        time= "88%";
    } else if (time===17){
        time= "100%";
    } else if (time<8){
        time="0%";
    } else if (time>17){
        time="100%"
    }
    return time;
}

function accurateTimePercentageDay(){
    hours = new Date().getHours();
    minutes = new Date().toLocaleTimeString().substring(3,5);
    currentTime = hours.toString() + minutes.toString();
    hoursMinutes = (parseInt(hours) / 24) + ((parseInt(minutes) / 60)/24);
    dayPercentage = hoursMinutes.toFixed(2);
    let midnightPercentage = hoursMinutes.toString().substring(2,4);
    if(parseInt(currentTime) <= 2352 ){
        if(parseInt(dayPercentage.substring(2,3)) === 0){
            return dayPercentage.substring(3,4) + '%';
        } else {
            return dayPercentage.substring(2,4) + '%';
        }
    } else if (parseInt(currentTime) >= 2353) {
        return midnightPercentage + '%';
    } else if (parseInt(currentTime) === 0){
        return '100%';
    }
}

let test = ((23/24) + ((53/60)/24)).toFixed(2);
let test2 = ((23/24) + ((53/60)/24)).toString().substring(2,4);

let hours = new Date().getHours();
let localTime = new Date().toLocaleTimeString();
let minutes = new Date().toLocaleTimeString().substring(3,5);
let currentTime = parseInt(hours) + parseInt(minutes);
let hoursMinutes = (parseInt(hours) / 24) + ((parseInt(minutes) / 60)/24);
let dayPercentage = hoursMinutes.toFixed(2);

document.getElementById("percent").innerText = accurateTimePercentageDay();
document.getElementById("localTime").innerText = localTime;



