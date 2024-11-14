// script.js

let count = 0;
let alarmInterval;
let alarmTimeout;

function increaseCount() {
    count++;
    document.getElementById("counter").textContent = count;
}

function setAlarm() {
    // Clear any existing alarm
    if (alarmTimeout) {
        clearTimeout(alarmTimeout);
    }

    // Get the interval from input
    const interval = document.getElementById("alarmInterval").value;
    if (!interval || interval <= 0) {
        alert("Please enter a valid time interval.");
        return;
    }

    // Convert minutes to milliseconds
    alarmInterval = interval * 60 * 1000;

    // Set a recurring alarm
    alarmTimeout = setTimeout(triggerAlarm, alarmInterval);
    document.getElementById("alarmMessage").textContent = `Alarm set for every ${interval} minutes.`;
}

function triggerAlarm() {
    alert("Time to drink a glass of water!");
    // Reset the alarm for the next interval
    alarmTimeout = setTimeout(triggerAlarm, alarmInterval);
}
