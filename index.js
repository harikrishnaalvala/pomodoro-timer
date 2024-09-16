let timer = document.getElementById("timer");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");

let date = new Date();

function startTimer() {
    hours.textContent = date.getHours()
    minutes.textContent = date.getMinutes()

}

function stopTimer() {
    hours.textContent = date.getHours()
    minutes.textContent = date.getMinutes()
}

function resetTimer() {
    hours.textContent = "25"
    minutes.textContent = "00"
}
