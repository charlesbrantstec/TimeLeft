"use strict";

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

function accurateTimePercentageDay(){
    // var hours = new Date().getHours();
    var hours = 0;
    // var minutes = new Date().toLocaleTimeString().substring(3,5);
    var minutes = 1;
    var currentTime = parseInt(hours) + parseInt(minutes);
    var hoursMinutes = (parseInt(hours) / 24) + ((parseInt(minutes) / 60)/24);
    var dayPercentage = hoursMinutes.toFixed(2);
    var midnightPercentage = hoursMinutes.toString().substring(2,4);
    if(currentTime <= 2352){
        if(dayPercentage.substring(2,3) == 0){
            return dayPercentage.substring(3,4) + '%';
        } else {
            return dayPercentage.substring(2,4) + '%';
        }
    } else if (currentTime >= 2353) {
        return midnightPercentage;
    } else if (currentTime === 0){
        return '100%';
    } else if (parseInt(dayPercentage) >= 0.999){
        return '99%';
    }
}

var test = ((23/24) + ((53/60)/24)).toFixed(2);
var test2 = ((23/24) + ((53/60)/24)).toString().substring(2,4);



var hours = new Date().getHours();
var localTime = new Date().toLocaleTimeString();
var minutes = new Date().toLocaleTimeString().substring(3,5);
var currentTime = parseInt(hours) + parseInt(minutes);
var hoursMinutes = (parseInt(hours) / 24) + ((parseInt(minutes) / 60)/24);
var dayPercentage = hoursMinutes.toFixed(2);

// document.getElementById("percent").innerText = dayPercentage.substring(2,4) + '%';
document.getElementById("percent").innerText = accurateTimePercentageDay();
document.getElementById("localTime").innerText = localTime;



