const currentTime = new Date().getTime();
const endingDate = new Date(document.getElementById("date").textContent + " 00:00:00").getTime();
let time = endingDate - currentTime;

const countdownEl = document.getElementById("countdown");

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

        countdownEl.innerHTML = `${days} days and<br>${hours}:${minutes}:${seconds}`;

        console.log(time, "days:", days, "hours:", hours, "minutes:", minutes, "seconds", seconds);
        time -= 1000;
    }
}