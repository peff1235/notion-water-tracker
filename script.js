let count = 0;
let alarmInterval;
let alarmTimeout;

function increaseCount() {
    count++;
    document.getElementById("counter").textContent = count;
}

function resetCount() {
    count = 0;
    document.getElementById("counter").textContent = count;
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
