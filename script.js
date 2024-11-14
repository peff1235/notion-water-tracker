// script.js

let count = 0;
let maxGlasses = 11; // Target glasses per day
let alarmInterval;
let alarmTimeout;

function increaseCount() {
    if (count < maxGlasses) {
        count++;
        document.getElementById("counter").textContent = count;
        updateProgressBar();
    }
}

function resetCount() {
    count = 0;
    document.getElementById("counter").textContent = count;
    updateProgressBar();
}

function setAlarm() {
    if (alarmTimeout) {
        clearTimeout(alarmTimeout);
    }

    const interval = document.getElementById("alarmInterval").value;
    if (!interval || interval <= 0) {
        alert("Please enter a valid time interval.");
        return;
    }

    alarmInterval = interval * 60 * 1000;
    alarmTimeout = setTimeout(triggerAlarm, alarmInterval);
    document.getElementById("alarmMessage").textContent = `Alarm set for every ${interval} minutes.`;
}

function triggerAlarm() {
    alert("Time to drink a glass of water!");
    alarmTimeout = setTimeout(triggerAlarm, alarmInterval);
}

function updateProgressBar() {
    const progressBar = document.getElementById("progressBar");
    const progressPercentage = (count / maxGlasses) * 100;
    progressBar.style.width = `${progressPercentage}%`;
}
