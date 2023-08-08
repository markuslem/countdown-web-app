const beginningDate = document.getElementById("beginning_date").textContent;
const beginningTime = new Date(beginningDate + " 00:00:00").getTime();
const endingDate = document.getElementById("end_date").textContent;
const endingTime = new Date(endingDate + " 00:00:00").getTime();
const currentTime = new Date().getTime();

let time = endingTime - currentTime; // time = milliseconds left
let percentage = 0;

const countdownEl = document.getElementById("countdown");
const percentageEl = document.getElementById("percentage");


setInterval(updateCountdown, 1000);

function updateCountdown() {
    if (time > 0) {
        const days = Math.floor(time / 86400000);
        let hours = Math.floor(time / 3600000 % 24);
        let minutes = Math.floor(time / 60000 % 60);
        let seconds = Math.floor(time / 1000 % 60);

        seconds = seconds < 10 ? '0' + seconds : seconds;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        hours = hours < 10 ? '0' + hours : hours;

        percentage = Math.round((100 - (time / (endingTime - beginningTime) * 100) + Number.EPSILON) * 100) / 100;

        countdownEl.innerHTML = `${days} days and<br>${hours}:${minutes}:${seconds}`;
        percentageEl.innerHTML = `${percentage}% of time has passed from ${beginningDate} to ${endingDate}`;

        document.getElementById("percentage-bar").style.width = percentage + "%";

        console.log(time, "days:", days, "hours:", hours, "minutes:", minutes, "seconds", seconds);
        time -= 1000;
    }
}